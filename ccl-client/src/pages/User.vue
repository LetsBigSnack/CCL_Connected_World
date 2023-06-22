/**
* Vue component for the User Profile page.
* @component
*/
<template>
  <div class="container w-full mx-auto py-8 text-content_text">
    <div v-if="user" class="text-content_text rounded-lg p-6">
      <div class="flex flex-col md:flex-row items-center mb-8 p-4">
        <img :src="user.userPicturePath?`http://127.0.0.1:3000/${user.userPicturePath}`:'/assets/logo.svg'" :alt="`User ${userID}`" class="w-24 h-24 rounded-full border-2 border-component_secondary_bcc mb-4 md:mb-0">
        <div class="md:ml-4">
          <h1 class="text-5xl">{{user.userName}}</h1>
        </div>
        <div v-if="loggedInUser && parseInt(loggedInUser.id) !== parseInt(userID)" class="md:ml-auto flex flex-col gap-2">
          <button v-if="loggedInUser && !pending && !alreadyFriends" @click="createRequest" class="flex text-2xl mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc">
            Add Friend
          </button>
          <button v-else-if="loggedInUser && pending && !alreadyFriends" disabled class="flex text-2xl mr-3 text-white text-md bg-tertiary_bcc rounded-[0.5rem] p-2 md:mr-0">
            Pending
          </button>
          <button v-else-if="loggedInUser && !pending && alreadyFriends" disabled class="flex text-2xl mr-3 text-white text-md bg-tertiary_bcc rounded-[0.5rem] p-2 md:mr-0">
            Friended
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
        <h2 class="text-3xl mb-4">Achievements</h2>
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
/**
 * The ID of the user profile being viewed.
 * @type {string}
 */
const userID = route.params.userID;

/**
 * The user data.
 * @type {import("vue").Ref<Object>}
 */
const user = ref();

/**
 * The user's friends data.
 * @type {import("vue").Ref<Object>}
 */
const friends = ref();

/**
 * The friend request data.
 * @type {import("vue").Ref<Object>}
 */
const request = ref();

/**
 * The currently logged-in user data.
 * @type {import("vue").Ref<Object>}
 */
const loggedInUser = ref();

/**
 * Indicates whether a friend request is pending.
 * @type {import("vue").Ref<boolean>}
 */
const pending = ref(false);

/**
 * Indicates whether the user is already friends with the logged-in user.
 * @type {import("vue").Ref<boolean>}
 */
const alreadyFriends = ref(false);
onMounted(async () => {
  ;
  await login();
  await getUser();
  if(loggedInUser.value){
    await getFriends();
    await getRequest();
  }
})

/**
 * Performs the login operation.
 * @returns {Promise<void>}
 */
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

/**
 * Retrieves the user's information.
 * @returns {Promise<void>}
 */
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

  }else{

  }
}

/**
 * Retrieves the user's friends.
 * @returns {Promise<void>}
 */
async function getFriends(){
  let test = await fetch(`http://127.0.0.1:3000/api/friends/${loggedInUser.value.id}`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    friends.value = data.data;
    ;
    if(friends.value.find(element => element.userID_1 === parseInt(userID) || element.userID_2 === parseInt(userID))){
      alreadyFriends.value = true;
    }
  }else{

  }
}

/**
 * Retrieves the friend request status.
 * @returns {Promise<void>}
 */
async function getRequest(){
  let test = await fetch(`http://127.0.0.1:3000/api/friends/${loggedInUser.value.id}/open/all`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    request.value = data.data;
    ;
    if(request.value.find(element => element.userID_1 === parseInt(userID) || element.userID_2 === parseInt(userID))){
      pending.value = true;
    }
  }else{

  }
}


/**
 * Creates a friend request.
 * @returns {Promise<void>}
 */
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
  ;
  if(data.success){
    router.go();
  }
}

</script>
