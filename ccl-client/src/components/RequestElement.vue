/**
* Vue component for RequestElement
* @component
*/
<template>
  <li class="flex items-center justify-between mb-2 cursor-pointer bg-component_secondary_bcc hover:bg-primary_bcc hover:text-component_secondary_bcc p-2 rounded-lg">
    <router-link  tabindex="100"  :to="`/users/${userID}`" class="flex w-full items-center">
      <img :src="userPicturePath?`http://127.0.0.1:3000/${userPicturePath}`:'/assets/logo.svg'" :alt="`Request ${userName} Picture`"  class="w-12 h-12 rounded-full mr-4">
      <span class="">{{props.userName}}</span>
    </router-link>
    <button tabindex="100"  @click="acceptRequest" class="bg-secondary_bcc hover:bg-tertiary_bcc text-white rounded-full w-10 h-10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    </button>
  </li>
</template>
<script setup>
import {useRouter} from "vue-router";

const props = defineProps(['userID', 'userName', 'userFriendID', 'userPicturePath']);
const router = useRouter();

/**
 * Accepts the friend request.
 */
async function acceptRequest(){
  let test = await fetch('http://127.0.0.1:3000/api/friends/accept/', {
    method: 'PUT',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userFriendID: props.userFriendID,
    })
  });
  let data = await test.json();
  if(data.success){
    await router.go();
  }
}

</script>