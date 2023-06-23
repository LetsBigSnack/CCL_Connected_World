/**
* Vue component for FriendsElement
* @component
*/
<template>
  <li class=" mb-2 cursor-pointer bg-component_secondary_bcc hover:bg-primary_bcc hover:text-component_secondary_bcc p-2 rounded-lg">
    <router-link  tabindex="100"  :to="`/users/${userID}`" class="flex items-center w-full h-full">
      <img :src="userPicturePath?website+`/${userPicturePath}`:'/assets/logo.svg'" :alt="`Friend ${userName} Picture`" class="w-12 h-12 rounded-full mr-4">
      <span class="font-navbar">{{props.userName}}</span>
    </router-link>

  </li>
</template>
<script setup>
const website = import.meta.env.VITE_API_BASE_URL
const props = defineProps(['userID', 'userName', 'userPicturePath']);
</script>