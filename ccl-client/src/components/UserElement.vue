/**
* Vue component for UserElement
* @component
*/
<template>
  <li>
    <router-link  tabindex="100"  :to="`/users/${userID}`" class="flex items-center justify-between pr-2 mb-4 cursor-pointer bg-component_secondary_bcc hover:bg-primary_bcc hover:text-component_secondary_bcc p-2 rounded-lg">
      <div class="flex items-center">
        <img :src="userImagePath?website+`/${userImagePath}`:'/assets/logo.svg'" :alt="`User ${userName} Profile Picture`" class="w-16 h-16 rounded-full mr-6">
        <div>
          <h3 class="text-lg font-bold mb-1">{{ userName }}</h3>
        </div>
      </div>
    </router-link>
    <!--
    <button v-if="loggedInUser" @click="createRequest" class="bg-secondary_bcc hover:bg-tertiary_bcc text-white rounded-full w-10 h-10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    </button>
    -->
  </li>
</template>
<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const props = defineProps(['userID', 'userName', 'userImagePath']);
const router = useRouter();
const loggedInUser = ref();
const website = import.meta.env.VITE_API_BASE_URL

onMounted(() => {
  login();

})

/**
 * Performs the login request and sets the user data.
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
 * Creates a request to add the user as a friend.
 */
async function createRequest(){
  let test = await fetch(website+'/api/friends/add', {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userID_1: loggedInUser.value.id,
      userID_2: props.userID,
    })
  });
  let data = await test.json();
  ;
  if(data.success){
    await router.go();
  }
}

</script>