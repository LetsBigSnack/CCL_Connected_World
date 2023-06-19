<template>
  <div v-if="champion" class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-8 gap-8">
      <div class="col-span-8 md:col-span-2 bg-component_secondary_bcc rounded-[10px] shadow-lg shadow-black">
        <div class="p-8 h-full flex flex-col justify-between border-primary_bcc border-t-4 rounded-[10px] gap-8">
          <div>
            <img :src="champion.championImagePath?`http://127.0.0.1:3000/${champion.championImagePath}`:'/assets/medium.png'" :alt="`Champion ${champion.championID}`" class="w-full rounded-lg shadow-lg mb-8">
            <div class="flex flex-col gap-4">
              <h2 class="text-3xl font-bold mb-1 border-primary_bcc border-b-2">{{champion.championName}}</h2>
              <p class="text-lg font-bold mb-4">{{champion.championDescription}}</p>
              <div class="mt-4">
                <h3 class="text-2xl font-medium border-primary_bcc border-b-2">Stats</h3>
                <ul class="mt-2 space-y-2">
                  <li>Health: <span class="text-primary_bcc">{{champion.championHealth}}</span></li>
                  <li>Strength: <span  class="text-primary_bcc">{{champion.championStrength}}</span></li>
                  <li>Speed: <span  class="text-primary_bcc">{{champion.championSpeed}}</span></li>
                  <li>Armor: <span  class="text-primary_bcc">{{champion.championArmor}}</span></li>
                </ul>
              </div>
              <div class="mt-4">
                <h3 class="text-2xl font-medium border-primary_bcc border-b-2">Role</h3>
                <p class="mt-2 text-primary_bcc">{{ champion.championType }}</p>
              </div>
            </div>
          </div>
          <button v-if="loggedInUser && !isOwned" @click="showDialogBox = true" class="items-center text-center mr-3 text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc focus:border-primary_bcc focus:border-2">
            Buy Champion
          </button>
          <button v-else-if="loggedInUser && isOwned" @click="showDialogBox = true" disabled class="items-center text-center mr-3 text-md rounded-[0.5rem] p-2 md:mr-0 bg-tertiary_bcc focus:border-primary_bcc focus:border-2">
            Owned
          </button>
        </div>
      </div>
      <div class="col-span-8 md:col-span-6">
        <div class="bg-component_secondary_bcc rounded-lg p-8 h-full border-primary_bcc border-t-4 rounded-[10px] shadow-lg shadow-black">
          <h3 class="text-3xl font-medium mb-4 border-primary_bcc border-b-2">Description</h3>
          <p class="text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor in mi eu tincidunt. Nulla euismod bibendum quam in pretium. Sed convallis iaculis justo ac rutrum. Donec eget molestie dolor. Nullam tincidunt ex nunc, ac posuere quam mattis ac. Etiam interdum felis sit amet ex tristique dictum. Pellentesque vitae elit ante. Integer eu eleifend velit.

            Maecenas id elit eu enim ornare sodales. Quisque mi magna, iaculis in pretium a, rhoncus et ante. Sed quis elementum felis. Curabitur congue ligula et tincidunt fermentum. Donec viverra dui nec aliquam volutpat. Pellentesque a ullamcorper quam, nec ornare tortor. In tristique vitae urna eget tempor. Donec porta iaculis orci, sit amet porttitor enim imperdiet egestas. Nam efficitur placerat pharetra. Proin porttitor imperdiet risus a laoreet. Duis pellentesque mauris nibh, eget dapibus est vehicula eu. Duis eleifend sem aliquam rhoncus tempus.
          </p>
          <div class="mt-6">
            <h3 class="text-2xl font-medium mb-4 border-primary_bcc border-b-2">Abilities</h3>
            <div class="flex flex-col w-full justify-center items-center gap-12">
              <AbilitiyElement v-for="ability in champion.abilities" :ability-i-d="ability.abilityID" :ability-name="ability.abilityName" :ability-description="ability.abilityDescription" :ability-image-path="ability.abilityImagePath"></AbilitiyElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showDialogBox && loggedInUser" class="fixed inset-0 flex items-center justify-center w-screen h-screen backdrop-blur">
    <div class="bg-component_primary_bcc rounded-lg shadow-lg p-4 border-4 border-component_secondary_bcc">
      <h2 class="text-xl font-bold mb-4">Do you want to buy <span class="text-primary_bcc">{{champion.championName}}</span></h2>
      <div class="flex justify-between">
        <p>Champion Cost:</p><span class="text-secondary_bcc">{{champion.championPrice}} BP</span>
      </div>
      <div class="flex justify-between">
        <p>Wallet Amount: </p><span class="text-secondary_bcc">{{loggedInUser.amount}} BP</span>
      </div>
      <div class="border-t-2 border-primary_bcc flex justify-between">
        <p>Remaining Amount: </p><span class="text-secondary_bcc">{{loggedInUser.amount - champion.championPrice}} BP</span>
      </div>
      <div class="flex gap-2">
        <button :disabled="(loggedInUser.amount - champion.championPrice) <= 0"  @click="buyChampion" class="bg-secondary_bcc text-white px-4 py-2 rounded-md mt-4  hover:bg-tertiary_bcc disabled:bg-component_secondary_bcc">
          Buy
        </button>
        <button @click="showDialogBox = false"  class="bg-[#ff5555] text-white px-4 py-2 rounded-md mt-4  hover:bg-[#f83b3b]">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, onRenderTriggered, onUpdated, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import AbilitiyElement from "../components/AbilitiyElement.vue";

const route = useRoute()
const router = useRouter();
const championID =  route.params.championID;
const champion = ref();
const loggedInUser = ref();
const showDialogBox = ref(false);
const isOwned = ref(false);

onMounted(async () => {
  await login();
  await getChampion();
  await getUserChampion();
})


async function login(){
  let test = await fetch('http://127.0.0.1:3000/api/login', {
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


async function getChampion(){
  let test = await fetch(`http://127.0.0.1:3000/api/champions/${championID}`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    champion.value = data.data;
    console.log(champion.value)
  }else{

  }
}

async function buyChampion(){
  showDialogBox.value = false;
  let test = await fetch('http://127.0.0.1:3000/api/wallet/buy', {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userID: loggedInUser.value.id,
      championID: route.params.championID,
    })
  });
  let data = await test.json();
  console.log(data);
  if(data.success){
    router.go("/");
    console.log("Great Success");
  }
}

async function getUserChampion(){
  if(!loggedInUser.value){
    return;
  }
  let test = await fetch(`http://127.0.0.1:3000/api/userChampions/`, {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body:  JSON.stringify({
      userID: loggedInUser.value.id,
      championID: championID
    })
  });
  let data = await test.json();
  if(data.success){
    isOwned.value = true;
  }
}

</script>
