/**
* Vue component for PatchItem
* @component
*/
<template>
<div class="bg-component_secondary_bcc drop-shadow-lg shadow-black p-6 rounded-lg shadow-md">
  <h3 class="text-2xl mb-2 font-display">{{patchTitle}}</h3>
  <h3 class="text-gray-400 text-sm mb-4">{{patchVersion}}</h3>
  <p>{{patchContent}}</p>
</div>
</template>
<script setup>
const props = defineProps(['patchTitle', 'patchVersion','patchContent'])
</script>