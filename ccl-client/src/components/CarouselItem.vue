/**
* Vue component for CarouselItem
* @component
*/
<template>

  <div v-if="main"
      class="relative max-h-[600px] float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style="backface-visibility: hidden">
    <img
        :src="website+'/'+newsImagePath"
        class="block w-full"
        alt="Carousel Item" />
    <div
        class="bg-component_secondary_bcc bg-opacity-75 backdrop-blur-sm absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      <h5 class="text-3xl text-primary_bcc font-display">{{ newsTitle }}</h5>
      <p>
        {{ newsContent }}
      </p>
    </div>
  </div>
  <div v-else
       class="relative max-h-[600px] float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
       data-te-carousel-item
       style="backface-visibility: hidden">
    <img
        :src="website+'/'+newsImagePath"
        class="block w-full"
        alt="Carousel Item" />
    <div
        class="bg-component_secondary_bcc bg-opacity-75 backdrop-blur-sm absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      <h5 class="text-3xl text-primary_bcc font-display">{{ newsTitle }}</h5>
      <p>
        {{ newsContent }}
      </p>
    </div>
  </div>
</template>
<script setup>
const website = import.meta.env.VITE_API_BASE_URL
const props = defineProps(['main', 'newsTitle','newsContent', 'newsImagePath'])
</script>