/**
* Vue component for the Inventory page.
* @component
*/
<template>
  <div v-if="loggedInUser" class="container mx-auto py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="w-full md:w-1/4" style="align-self: start;">
        <div class="bg-component_secondary_bcc rounded-lg p-6 mb-8 shadow-lg shadow-black">
          <h2 class="text-3xl font-bold mb-4 border-b-2 border-secondary_bcc">Filter</h2>
          <div class="mb-4">
            <input tabindex="20" v-model="userInput" @input="filterChampions" type="text" placeholder="Search by name" class="w-full text-xl rounded-md px-3 py-2 bg-component_primary_bcc  font-navbar border-0 focus:border-primary_bcc focus:border-2">
          </div>
          <div class="mb-4">
            <label for="category" class="text-lg mb-2">Category:</label>
            <select tabindex="20" v-model="userType" id="category" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0 focus:border-primary_bcc focus:border-2">
              <option value="" selected>All Categories</option>
              <option value="mage">Mage</option>
              <option value="assassin">Assassin</option>
              <option value="tank">Tank</option>
              <option value="bruiser">Bruiser</option>
              <option value="support">Support</option>
            </select>
          </div>
          <div class="flex w-full justify-center">
            <button tabindex="20" @click="filterChampions" class="flex-grow items-center text-center mr-3 text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc focus:border-primary_bcc focus:border-2">
              Apply filter
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-3/4">
        <ul class="h-[80vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-scroll no-scrollbar auto-rows-min" v-if="champions">
          <ChampionElement v-for="champion in filteredChampions" :championID="champion.championID" :championName="champion.championName" :championType="champion.championType" :championPicturePath="champion.championImagePath" :championPrice="champion.championPrice"></ChampionElement>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <NotLoggedIn></NotLoggedIn>
  </div>
</template>
<script setup>
import ChampionElement from "../components/ChampionElement.vue";
import {onMounted, ref} from "vue";
import NotLoggedIn from "../components/NotLoggedIn.vue";

const champions = ref();
const filteredChampions = ref();
const userInput = ref("");
const userType = ref("");
const loggedInUser = ref();

onMounted(async () => {
  await login();
  if(loggedInUser){
    await getUserChampions();
  }
})

/**
 * Performs the login operation.
 * @returns {Promise<void>}
 */
async function login(){
  let test = await fetch('https://cc221019-10110.node.fhstp.io/api/login', {
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
 * Filters the list of champions based on the user input.
 * @returns {void}
 */
function filterChampions(){

  if(userInput.value){
    filteredChampions.value = champions.value.filter(champion => champion.championName.toLowerCase().includes(userInput.value.toLowerCase()));
  }else{
    filteredChampions.value = champions.value;
  }
  if(userType){
    filteredChampions.value = filteredChampions.value.filter(champion => champion.championType.toLowerCase().includes(userType.value.toLowerCase()));
  }
}

/**
 * Retrieves the user's champions.
 * @returns {Promise<void>}
 */
async function getUserChampions(){
  let test = await fetch(`https://cc221019-10110.node.fhstp.io/api/userChampions/${loggedInUser.value.id}`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    champions.value = data.data;
    filteredChampions.value = champions.value;
  }
}
</script>