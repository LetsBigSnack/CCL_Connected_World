<template>
  <div class="bg-component_secondary_bcc rounded-lg p-2 flex flex-col w-full items-center shadow-lg shadow-black gap-1">
    <img :src="championPicturePath?`http://127.0.0.1:3000/${championPicturePath}`:'/assets/medium.png'" :alt="`Champion ${championID}`"  class="w-full object-cover mx-auto mb-2 shadow-sm shadow-black rounded-[10px]">
    <h3 class="text-2xl font-bold mb-2 text-primary_bcc">{{ championName }}</h3>
    <p>{{championType}}</p>
    <p class="text-sm mt-2 mb-2">Price: {{championPrice}} BP</p>
    <div class="p-1 w-full">
      <router-link :to="`/champions/${championID}`" class="flex justify-center text-center mr-3 text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc focus:border-primary_bcc focus:border-2">
        <p>Details</p>
      </router-link>
    </div>

  </div>
</template>
<script setup>
const props = defineProps(['championID', 'championName', 'championType', 'championPicturePath','championPrice'])
</script>