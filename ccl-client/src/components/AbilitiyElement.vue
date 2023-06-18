<template>
  <div class="w-full md:w-1/2 flex flex-col gap-2">
    <h4 class="text-md font-medium border-primary_bcc border-b-2">{{ abilityName }}</h4>
    <div class="flex gap-2">
      <img :src="abilityImagePath?`http://127.0.0.1:3000/${abilityImagePath}`:'/assets/logo.svg'" :alt="`Ability ${abilityName}`" class="h-20 w-20 rounded-lg shadow-lg mb-4">
      <p class="text-sm mt-2">{{ abilityDescription }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['abilityID', 'abilityName', 'abilityDescription', 'abilityImagePath']);
</script>