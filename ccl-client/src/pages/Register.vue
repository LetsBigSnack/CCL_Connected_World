/**
* Vue component for the Register page.
* @component
*/
<template>
  <div v-if="!loggedInUser" class="flex flex-col md:flex-row w-full  min-h-1/2">
    <!-- Image -->
    <div class="w-2/6  hidden md:flex">
      <img src="../assets/Fulllength.png" alt="Register Image" class="object-cover w-full h-full">
    </div>
    <!-- Register Form -->
    <div class="w-full md:w-4/6 flex items-center justify-center p-2 flex-col gap-8">
      <div class="max-w-md w-full">
        <h1 class="text-5xl mb-5 font-display">Register</h1>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="username" class="block mb-2">Username</label>
            <input autocomplete="username" v-model="username" type="text" id="username" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0" placeholder="Enter your username">
          </div>
          <div class="mb-4">
            <label for="email" class="block mb-2">Email</label>
            <input autocomplete="email" v-model="email" type="email" id="email" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0" placeholder="Enter your email">
          </div>
          <div class="mb-4">
            <label for="email-confirm" class="block mb-2">Confirm Email</label>
            <input autocomplete="email"  v-model="conf_email"  type="email" id="email-confirm" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0" placeholder="Confirm your email">
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2">Password</label>
            <input autocomplete="new-password" v-model="password"  type="password" id="password" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0" placeholder="Enter your password">
          </div>
          <div class="mb-4">
            <label for="password-confirm" class="block mb-2">Confirm Password</label>
            <input autocomplete="new-password" v-model="conf_password"  type="password" id="password-confirm" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0" placeholder="Confirm your password">
          </div>
          <div class="mb-4">
            <label class="block mb-2">
              <input v-model="terms_conditions" type="checkbox" class="mr-2 bg-component_primary_bcc border-0">
              I accept the terms and conditions
            </label>
          </div>
          <button @click="checkForm" type="submit" class="w-full bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc text-center justify-center font-display text-3xl">Register</button>
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

  </div>
  <div v-else>
    <Already></Already>
  </div>
</template>
<script setup>

import {onMounted, ref} from "vue";
import {useRoute, useRouter} from 'vue-router'
import Already from "../components/Already.vue";


const route = useRoute()
const router = useRouter()

const username = ref("");
const email = ref("");
const conf_email = ref("");
const password = ref("");
const conf_password = ref("");
const terms_conditions = ref();
const errors = ref();




/**
 * The currently logged-in user data.
 * @type {import("vue").Ref<Object>}
 */
const loggedInUser = ref();

onMounted(() => {
  login();
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
 * Handles the form submission.
 */
async function checkForm(){

  if(email.value === "" || conf_email.value === "" || password.value === "" || conf_password.value === "" || terms_conditions.value === ""){
    errors.value = "Please fill in the Form";
    return;
  }


  if(email.value !== conf_email.value){
    errors.value = "Both Emails should be the same";
    return;
  }
  if(password.value !== conf_password.value){
    errors.value = "Both Passwords should be the same";
    return;
  }
  if(!terms_conditions.value){
    errors.value = "Please accept the terms and conditions";
    return;
  }

  await register();
}

/**
 * Performs the registration process.
 */
async function register(){
  let test = await fetch('http://127.0.0.1:3000/api/users', {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userName: username.value,
      userEmail: email.value,
      userPassword: password.value,
    })
  });
  let data = await test.json();
  if(data.success){
    errors.value = undefined;
    router.push({ path: '/' });
  }else{
    errors.value = data.error;
  }
}
</script>