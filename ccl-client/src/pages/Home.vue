<template>

  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/Fulllength.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/Fulllength.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/Fulllength.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/Fulllength.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../assets/Fulllength.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
  </div>

  <div class="max-w-6xl mx-auto px-4 py-8">
    <!-- Image Carousel -->


    <div class="bg-gray-100 py-8">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Latest Patch Notes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Patch Note Card 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4">Patch Note 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a lacus ut enim pellentesque faucibus.</p>
          </div>
          <!-- Patch Note Card 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4">Patch Note 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a lacus ut enim pellentesque faucibus.</p>
          </div>
          <!-- Patch Note Card 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4">Patch Note 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a lacus ut enim pellentesque faucibus.</p>
          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- Game Description -->
    <div>
      <div class="bg-gray-200 rounded-lg shadow-md p-4">
        <h2 class="text-2xl font-bold mb-4">Game Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc sagittis, efficitur tortor in, vestibulum turpis. Sed ac sapien non lectus ultricies facilisis. In hac habitasse platea dictumst. Phasellus bibendum enim at venenatis viverra. Proin accumsan sapien nec venenatis laoreet.</p>
        <p>Integer sed elit sit amet ligula ullamcorper lobortis in id libero. Sed rutrum finibus diam et condimentum. Sed cursus velit a ante elementum, id gravida nunc semper. Nullam eget ipsum vitae ex pellentesque aliquet a in lectus. Phasellus convallis turpis nec justo tristique, et commodo lorem vulputate.</p>
      </div>
    </div>
    <br>
    <!-- Download Game Section -->
    <div class="mb-8">
      <div class="bg-gray-200 rounded-lg shadow-md p-4 flex justify-center items-center">
        <h2 class="text-2xl font-bold mb-4">Download the Game</h2>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc sagittis, efficitur tortor in, vestibulum turpis.</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Download Now</button>
      </div>
    </div>


  </div>
</template>
<script setup>

</script>