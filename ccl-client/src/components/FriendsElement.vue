<template>
  <li class=" mb-2 cursor-pointer bg-component_secondary_bcc hover:bg-primary_bcc hover:text-component_secondary_bcc p-2 rounded-lg">
    <router-link :to="`/users/${userID}`" class="flex items-center w-full h-full">
      <img :src="userPicturePath?`http://127.0.0.1:3000/${userPicturePath}`:'/assets/logo.svg'" :alt="`Friend ${userID}`" class="w-12 h-12 rounded-full mr-4">
      <span class="font-navbar">{{props.userName}}</span>
    </router-link>

  </li>
</template>
<script setup>
const props = defineProps(['userID', 'userName', 'userPicturePath']);
</script>