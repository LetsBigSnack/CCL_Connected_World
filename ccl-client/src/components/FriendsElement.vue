<template>
  <li class="flex items-center mb-2 cursor-pointer bg-component_primary_bcc hover:bg-primary_bcc hover:text-component_secondary_bcc p-2 rounded-lg">
    <img src="../assets/test_image.png" alt="Friend 1" class="w-12 h-12 rounded-full mr-4">
    <span class="font-navbar">{{props.userName}}</span>
  </li>
</template>
<script setup>
const props = defineProps(['userID', 'userName']);
</script>