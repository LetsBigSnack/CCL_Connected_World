/**
* Vue component for the Not Found page.
* @component
*/
<template>
  <div class="max-w-6xl mx-auto px-4 py-8 min-h-[80vh] flex flex-col justify-center items-center gap-2">
    <div>
      <div class="border-t-2 border-component_secondary_bcc p-4 font-main_content flex flex-col justify-center items-center gap-2">
        <h2 class="text-8xl mb-4 font-display text-primary_bcc">404 - Page not Found</h2>
        <p  class="text-2xl">Sorry Traveler your journey ends here.  </p>
        <p>Try to go back to the start</p>
        <router-link to="/" class="flex mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc">
          Go back
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import PatchView from "../components/PatchView.vue";
</script>