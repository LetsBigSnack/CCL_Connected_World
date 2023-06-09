/**
* @typedef {Object} WalletData - Wallet data object.
* @property {number} userWalletAmount - User's wallet balance.
*/

/**
* @typedef {Object} TransactionData - Transaction data object.
* @property {string} transactionID - Transaction ID.
* @property {number} transactionAmount - Transaction amount.
* @property {string} transactionDescription - Transaction description.
* @property {string} transactionDate - Transaction date.
*/

/**
* Vue component for the Wallet page.
* @component
*/
<template>
  <div v-if="loggedInUser" class="w-full mx-auto mt-10 px-4 max-w-3xl">
    <div class="p-6 flex flex-col gap-8">
      <h2 class="text-4xl font-bold mb-4 border-primary_bcc border-b-2">Wallet</h2>

      <div class="mb-6">
        <h3 class="text-2xl font-bold mb-2 border-primary_bcc border-b-2">Wallet Balance</h3>
        <div class="bg-component_primary_bcc rounded-lg p-4 shadow-lg shadow-black flex justify-center">
          <p v-if="wallet" class="text-5xl text-content_text">{{wallet.userWalletAmount}} BP</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-4 border-primary_bcc border-b-2">Recent Transactions</h3>
        <ul class="space-y-4" v-if="filteredTransactions">
          <TransactionElement v-for="transaction in filteredTransactions" :transactionID="transaction.transactionID" :transactionAmount="transaction.transactionAmount" :transactionDescription="transaction.transactionDescription" :transaction-date="transaction.transactionDate"></TransactionElement>
        </ul>
        <div v-if="transactions" class="flex flex-col items-center">
          <!-- Help text -->
          <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{{fromTransaction}}</span> to <span class="font-semibold text-gray-900 dark:text-white">{{toTransaction}}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ transactions.length }}</span> Entries
  </span>
          <!-- Buttons -->
          <div class="inline-flex mt-2 xs:mt-0">
            <button @click="previousTransactions" class="px-4 py-2 text-sm font-medium bg-component_primary_bcc border-2 border-secondary_bcc rounded-l hover:bg-component_secondary_bcc">
              Prev
            </button>
            <button @click="nextTransactions" class="px-4 py-2 text-sm font-medium bg-component_primary_bcc border-2 border-secondary_bcc rounded-r hover:bg-component_secondary_bcc">
              Next
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4 border-primary_bcc border-b-2">Add Funds</h3>
        <div class="flex flex-wrap w-full justify-center gap-4">
          <button  @click="addFunds(100)" class="bg-secondary_bcc  hover:bg-tertiary_bcc text-content_text px-4 py-2 rounded-md">Add 100 BP</button>
          <button @click="addFunds(500)" class="bg-secondary_bcc  hover:bg-tertiary_bcc text-content_text px-4 py-2 rounded-md">Add 500 BP</button>
          <!-- Add more buttons for different amounts -->
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <NotLoggedIn></NotLoggedIn>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { initTE } from "tw-elements";
import TransactionElement from "../components/TransactionElement.vue";
import {useRouter} from "vue-router";
import NotLoggedIn from "../components/NotLoggedIn.vue";
/**
 * @type {import("vue").Ref<WalletData>}
 */
const wallet = ref();

/**
 * @type {import("vue").Ref<Object>}
 */
const loggedInUser = ref();

/**
 * @type {import("vue").Ref<number>}
 */
const fromTransaction = ref();

/**
 * @type {import("vue").Ref<number>}
 */
const toTransaction = ref();

/**
 * @type {import("vue").Ref<TransactionData[]>}
 */
const transactions = ref();

/**
 * @type {import("vue").Ref<TransactionData[]>}
 */
const filteredTransactions = ref();

/**
 * @type {import("vue-router").Router}
 */
const router = useRouter();
const website = import.meta.env.VITE_API_BASE_URL

onMounted(async () => {
  initTE();
  await login();
  if(loggedInUser.value){
    await getWallet();
    await getTransaction();
  }
});

/**
 * Performs the login operation.
 * @returns {Promise<void>}
 */
async function login(){
  let test = await fetch(website+'/api/login', {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    loggedInUser.value = data.data;
  }
}


/**
 * Retrieves the user's wallet information.
 * @returns {Promise<void>}
 */
async function getWallet(){
  let test = await fetch(website+`/api/wallet/${loggedInUser.value.id}`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    ;
    wallet.value = data.data;
  }
}

/**
 * Retrieves the user's transactions.
 * @returns {Promise<void>}
 */
async function getTransaction(){
  let test = await fetch(website+`/api/wallet/transactions/${wallet.value.userWalletID}`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    ;
    transactions.value = data.data;
    if(transactions.value.length>0){
      fromTransaction.value = 1;
    }else{
      fromTransaction.value = 0;
    }
    if(transactions.value.length/5 > 1){
      toTransaction.value = 5;
    }else{
      toTransaction.value = transactions.value.length;
    }
    applyFilter();
  }
}

/**
 * Displays the next set of transactions.
 * @returns {void}
 */
function nextTransactions(){
  if(toTransaction.value+5 <= transactions.value.length){
    fromTransaction.value += 5;
    toTransaction.value += 5;
  }else if(fromTransaction.value+5 <= transactions.value.length){
    fromTransaction.value += 5;
    toTransaction.value = transactions.value.length;
  }
  applyFilter()
}

/**
 * Displays the previous set of transactions.
 * @returns {void}
 */
function previousTransactions(){

  if(transactions.value.length < 6){
    return
  }
  
  if(toTransaction.value%5 === 0){
    if(fromTransaction.value-5 >= 1){
      fromTransaction.value -= 5;
      toTransaction.value -= 5;
    }else{
      fromTransaction.value = 1;
      toTransaction.value = 5;
    }
  }else{
    fromTransaction.value -= 5;
    toTransaction.value -= toTransaction.value%5;
  }
  applyFilter()
}

/**
 * Applies the filter to display the specified range of transactions.
 * @returns {void}
 */
function applyFilter(){
  if(fromTransaction.value < 1){
    return;
  }
  let tempTransactions = [];
  for(let i = fromTransaction.value-1; i < toTransaction.value; i++){
    tempTransactions.push(transactions.value[i]);
  }
  filteredTransactions.value = tempTransactions;

}

/**
 * Adds funds to the user's wallet.
 * @param {number} amount - The amount of funds to add.
 * @returns {Promise<void>}
 */
async function addFunds(amount){
  let test = await fetch(website+'/api/wallet/add', {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userID: loggedInUser.value.id,
      walletAmount: amount,
    })
  });
  let data = await test.json();
  if(data.success){
    router.go();
  }
}


</script>
