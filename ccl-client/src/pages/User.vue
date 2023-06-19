<template>
  <div class="container w-full mx-auto py-8 text-content_text">
    <div v-if="user" class="text-content_text rounded-lg p-6">
      <div class="flex flex-col md:flex-row items-center mb-8 p-4">
        <img :src="user.userPicturePath?`http://127.0.0.1:3000/${user.userPicturePath}`:'/assets/logo.svg'" :alt="`User ${userID}`" class="w-24 h-24 rounded-full border-2 border-component_secondary_bcc mb-4 md:mb-0">
        <div class="md:ml-4">
          <h1 class="text-5xl">{{user.userName}}</h1>
        </div>
        <div class="md:ml-auto flex flex-col gap-2">
          <button v-if="loggedInUser" @click="createRequest" class="flex text-2xl mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc">
            Add Friend
          </button>
          <button v-if="loggedInUser" class="flex text-2xl mr-3 text-white text-md bg-[#ff5555] rounded-[0.5rem] p-2 md:mr-0 hover:bg-[#f83b3b]">
            Report
          </button>
        </div>
      </div>
      <div class="border-t-4 border-component_secondary_bcc mt-8 mb-8 p-4">
        <h2 class="text-3xl mb-4">Ranked Stats</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium">Ranked Wins</h3>
            <p class="text-3xl font-bold">48</p>
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium">Ranked Losses</h3>
            <p class="text-3xl font-bold">12</p>
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium">Ranked Points</h3>
            <p class="text-3xl font-bold">2150</p>
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium">Win Rate</h3>
            <p class="text-3xl font-bold">80%</p>
          </div>
        </div>
      </div>
      <div class="border-t-4 border-component_secondary_bcc mt-8 mb-8 p-4">
        <h2 class="text-3xl mb-4">Champions</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <img src="" alt="Champion 1" class="w-16 h-16 mx-auto mb-2">
            <p class="text-center">Champion 1</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <img src="" alt="Champion 2" class="w-16 h-16 mx-auto mb-2">
            <p class="text-center">Champion 2</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <img src="" alt="Champion 3" class="w-16 h-16 mx-auto mb-2">
            <p class="text-center">Champion 3</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <img src="" alt="Champion 4" class="w-16 h-16 mx-auto mb-2">
            <p class="text-center">Champion 4</p>
          </div>
        </div>
      </div>
      <div class="border-t-4 border-component_secondary_bcc mt-8 mb-8 p-4">
        <h2 class="text-3xl mb-4 mb-4">Achievements</h2>
        <ul class="list-disc pl-6">
          <li>First Blood Master - Achieved 100 First Blood kills</li>
          <li>Triple Kill Streak - Achieved 10 Triple Kills</li>
          <li>Legendary Champion - Reached Level 20 with a champion</li>
          <!-- Add more achievements as needed -->
        </ul>
      </div>
      <div class="border-t-4 border-component_secondary_bcc mt-8 mb-8 p-4">
        <h2 class="text-3xl mb-4">Recent Matches</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <h3 class="text-base font-medium">Match 1</h3>
            <p class="text-sm">Victory - 15/3/7</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <h3 class="text-base font-medium">Match 2</h3>
            <p class="text-sm">Defeat - 5/9/10</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <h3 class="text-base font-medium">Match 3</h3>
            <p class="text-sm">Victory - 10/2/8</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, onRenderTriggered, onUpdated, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter();
const userID =  route.params.userID;
const user = ref();
const loggedInUser = ref();

onMounted(() => {
  console.log(userID);
  login();
  getUser();
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


async function getUser(){
  let test = await fetch(`http://127.0.0.1:3000/api/users/${userID}`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    user.value = data.data;
    console.log(user.value)
  }else{

  }
}

async function createRequest(){
  let test = await fetch('http://127.0.0.1:3000/api/friends/add', {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userID_1: loggedInUser.value.id,
      userID_2: route.params.userID,
    })
  });
  let data = await test.json();
  console.log(data);
  if(data.success){

  }
}

</script>
