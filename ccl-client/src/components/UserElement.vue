<template>
  <li class="flex items-center mb-4 cursor-pointer bg-component_primary_bcc hover:bg-primary_bcc hover:text-component_secondary_bcc p-2 rounded-lg">
    <img src="../assets/Medium.png" alt="User 1" class="w-16 h-16 rounded-full mr-6">
    <div>
      <h3 class="text-lg font-bold mb-1">{{ username }}</h3>
    </div>
  </li>
</template>
<script setup>
const props = defineProps(['username', 'id', 'userImage'])
</script>