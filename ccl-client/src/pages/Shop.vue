<template>
  <div class="flex">
    <!-- Search and Filters -->
    <div class="w-1/4 bg-gray-200 p-4">
      <h2 class="text-xl font-bold mb-4">Search Filters</h2>
      <form>
        <div class="mb-4">
          <label for="search" class="block mb-2">Search</label>
          <input type="text" id="search" class="w-full border-gray-300 rounded-md px-3 py-2" placeholder="Enter your search query">
        </div>
        <div class="mb-4">
          <label for="category" class="block mb-2">Chamption-Type</label>
          <select id="category" class="w-full border-gray-300 rounded-md px-3 py-2">
            <option value="">All types</option>
            <option value="tank">Tank</option>
            <option value="supports">Supports</option>
            <option value="healer">Healer</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="price" class="block mb-2">Price Range</label>
          <input type="range" id="price" class="w-full">
        </div>
        <div class="mb-4">
          <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Apply Filters</button>
        </div>
      </form>
    </div>

    <!-- Articles -->
    <div class="w-3/4 p-4">
      <h2 class="text-xl font-bold mb-4">Champions</h2>
      <div class="grid grid-cols-4 gap-4">
        <!-- Article 1 -->
        <div class="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center">
          <img src="../assets/Medium.png" alt="Article 1" class="w-full min-h-80 object-cover mb-4">
          <h3 class="text-lg font-bold">Name</h3>
          <h2 class="text-sm font-bold text-gray-600">50 BP</h2>
          <button class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Details</button>
        </div>
        <div class="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center">
          <img src="../assets/Medium.png" alt="Article 1" class="w-full min-h-80 object-cover mb-4">
          <h3 class="text-lg font-bold">Name</h3>
          <h2 class="text-sm font-bold text-gray-600">50 BP</h2>
          <button class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Details</button>
        </div>
        <div class="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center">
          <img src="../assets/Medium.png" alt="Article 1" class="w-full min-h-80 object-cover mb-4">
          <h3 class="text-lg font-bold">Name</h3>
          <h2 class="text-sm font-bold text-gray-600">50 BP</h2>
          <button class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Details</button>
        </div>
        <div class="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center">
          <img src="../assets/Medium.png" alt="Article 1" class="w-full min-h-80 object-cover mb-4">
          <h3 class="text-lg font-bold">Name</h3>
          <h2 class="text-sm font-bold text-gray-600">50 BP</h2>
          <button class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Details</button>
        </div>
        <div class="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center">
          <img src="../assets/Medium.png" alt="Article 1" class="w-full min-h-80 object-cover mb-4">
          <h3 class="text-lg font-bold">Name</h3>
          <h2 class="text-sm font-bold text-gray-600">50 BP</h2>
          <button class="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Details</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>