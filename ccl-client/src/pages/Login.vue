/**
* Vue component for the Not Found page.
* @component
*/
<template>
  <div v-if="!loggedInUser" class="flex flex-col md:flex-row min-h-1/2">
    <!-- Login Form -->
    <div class="w-full md:w-4/6 flex items-center justify-center p-2 flex-col gap-8">
      <div class="max-w-md w-full">
        <h1 class="text-5xl mb-5 font-display">Login</h1>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="username" class="block mb-2">Username</label>
            <input v-model="username" type="text" id="username" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0" placeholder="Enter your Username">
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2">Password</label>
            <input  v-model="password" type="password" id="password" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0" placeholder="Enter your password">
          </div>
          <button @click="login" type="submit" class="w-full bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc text-center justify-center font-display text-3xl">Login</button>
        </form>
      </div>
      <div v-if="errors" >
        <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Error</span> {{ errors}}
          </div>
        </div>
      </div>
    </div>
    <!-- Image -->
    <div class="w-2/6 hidden md:flex">
      <img src="../assets/Fulllength.png" alt="Login Image" class="object-cover w-full h-full">
    </div>
  </div>
  <div v-else>
    <Already></Already>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import { useRouter } from 'vue-router'
import Already from "../components/Already.vue";

const router = useRouter()

const username = ref("");
const password = ref("");
const errors = ref();

/**
 * The currently logged-in user data.
 * @type {import("vue").Ref<Object>}
 */
const loggedInUser = ref();

onMounted(() => {
  loginGET();
})

/**
 * Performs the login operation.
 * @returns {Promise<void>}
 */
async function loginGET(){
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
 * Performs the login operation.
 * @returns {Promise<void>}
 */
async function login(){
  let test = await fetch('https://cc221019-10110.node.fhstp.io/api/login', {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userName: username.value,
      password: password.value
    })
  });
  let data = await test.json();
  if(data.success){
    errors.value = undefined;
    await router.push({path: '/'});
  }else{
    errors.value = data.error;
  }
}


</script>