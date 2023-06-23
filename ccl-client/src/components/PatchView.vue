/**
* Vue component for PatchView
* @component
*/
<template>
  <div class="border-t-2 border-component_secondary_bcc  py-8">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-5xl mb-8 font-display text-primary_bcc">Latest Patch Notes</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 font-main_content" v-if="patchnotes" >
        <PatchItem v-for="patchnote in patchnotes" :patchTitle="patchnote.patchTitel" :patchVersion="patchnote.patchVersion" :patchContent="patchnote.patchContent" />
      </div>
    </div>
  </div>
</template>
<script setup>
import PatchItem from "./PatchItem.vue";
import {onMounted, ref} from "vue";

const patchnotes = ref();
const website = import.meta.env.VITE_API_BASE_URL

onMounted(()=>{
  getPatches();
});

/**
 * Retrieves the patch data.
 * @returns {Promise<void>}
 */
async function getPatches(){
  const API = website+"/api/patchnotes";
  const data = await fetch(API).then(res => res.json())
  if(data.success){
    patchnotes.value = data.data;
  }
}


</script>