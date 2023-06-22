/**
* Vue component for Header
* @component
*/
<template>
  <nav class="bg-component_secondary_bcc shadow-lg shadow-black box">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
      <div class="flex gap-8">
        <router-link to="/" class="flex items-center" tabindex="1">
          <img src="../assets/logo.svg" class="h-12 mr-3" alt="BattleChamp Logo" />
          <h1 class="self-center text-3xl whitespace-nowrap dark:text-white font-display">BattleChamp</h1>
        </router-link>
      </div>
      <div class="w-full m-4 md:w-auto flex flex-wrap items-center justify-center gap-8 text-md md:text-xl">
        <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="mobile-menu-2">
          <ul class="flex flex-col gap-2 md:gap-0 font-medium justify-center items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <router-link to="/" class="hover:text-primary_bcc block py-2 pl-3 pr-4 text-white rounded hover:bg-tertiary_bcc md:hover:bg-transparent md:hover:text-primary_bcc md:p-0" tabindex="2">Home</router-link>
            </li>
            <li>
              <router-link to="/shop" class="hover:text-primary_bcc block py-2 pl-3 pr-4 rounded hover:bg-tertiary_bcc md:hover:bg-transparent md:hover:text-primary_bcc md:p-0" tabindex="3">Shop</router-link>
            </li>
            <li>
              <router-link to="/social" class="hover:text-primary_bcc block py-2 pl-3 pr-4 rounded hover:bg-tertiary_bcc md:hover:bg-transparent md:hover:text-primary_bcc md:p-0" tabindex="4">Community</router-link>
            </li>
            <li>
              <router-link v-if="user" to="/game" class="hover:text-primary_bcc block py-2 pl-3 pr-4 rounded hover:bg-tertiary_bcc md:hover:bg-transparent md:hover:text-primary_bcc md:p-0" tabindex="5">Play</router-link>
            </li>
            <li>
              <div v-if="!user" class="flex gap-4">
                <router-link to="/login" class="flex mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc" tabindex="6">
                  Login
                </router-link>

                <router-link to="/register" class="flex mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc" tabindex="7">
                  Sign up
                </router-link>
              </div>
            </li>
          </ul>
        </div>


        <button :class="{ hidden: (!user) }" type="button" class="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-component_secondary_bcc" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" tabindex="8">
          <span class="sr-only">Open user menu</span>
          <img v-if="user" class="w-12 h-12 rounded-full border-2 border-primary_bcc" :src="user.picture?`http://127.0.0.1:3000/${ user.picture}`:'/assets/logo.svg'" :alt="`${user.name} Avatar`">
        </button>
        <div :class="{ hidden: (!user) }" class="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow bg-component_secondary_bcc border-primary_bcc border-2" id="user-dropdown">
          <div class="px-4 py-3">
            <span v-if="user" class="block text-sm text-gray-900 dark:text-white">{{ user.name }}</span>
            <span v-if="user" class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ user.email }}</span>
          </div>
          <ul class="py-2 text-content_text" aria-labelledby="user-menu-button">
            <li>
              <router-link to="/inventory" href="#" class="block px-4 py-2 text-sm hover:bg-primary_bcc hover:text-component_primary_bcc" tabindex="9">Inventory</router-link>
            </li>
            <li>
              <router-link v-if="user" :to="`/users/${user.id}`" class="block px-4 py-2 text-sm hover:bg-primary_bcc hover:text-component_primary_bcc" tabindex="10">Profile</router-link>
            </li>
            <li>
              <router-link to="/settings" class="block px-4 py-2 text-sm hover:bg-primary_bcc hover:text-component_primary_bcc" tabindex="11">Settings</router-link>
            </li>
            <li>
              <router-link to="/wallet" class="block px-4 py-2 text-sm hover:bg-primary_bcc hover:text-component_primary_bcc" tabindex="12">Wallet</router-link>
            </li>
            <li>
              <button @click="logout" class="w-full flex    block px-4 py-2 text-sm hover:bg-primary_bcc hover:text-component_primary_bcc" tabindex="13">Sign out</button>
            </li>
          </ul>
        </div>
        <!-- Dropdown menu -->
        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" tabindex="14">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const errors = ref();
const user = ref();


watch(route, () => {
  // This will run every time the route changes.
  login();
}, { deep: true }) // Use the `deep` option to watch nested properties



onMounted(() => {
  login();
})

/**
 * Performs the login request and sets the user data.
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
    user.value = data.data;
    errors.value = undefined;
  }else{
    errors.value = data.error;
    user.value = undefined;
  }
}


/**
 * Performs the logout request and sets the user data.
 */
async function logout(){
  let test = await fetch('http://127.0.0.1:3000/api/logout', {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    errors.value = undefined;
    user.value = undefined;
    await router.replace({ path: '/' });
  }else{
    errors.value = data.error;
  }
}
</script>
