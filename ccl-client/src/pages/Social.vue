<template>
  <div class="flex">
    <!-- Friend List -->
    <div class="w-1/4 bg-gray-200 p-4">
      <h2 class="text-xl font-bold mb-4">Friend List</h2>
      <ul>
        <li class="flex items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <img src="../assets/test_image.png" alt="Friend 1" class="w-12 h-12 rounded-full mr-4">
          <span class="font-semibold">Friend 1</span>
        </li>
        <li class="flex items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <img src="../assets/Medium.png" alt="Friend 2" class="w-12 h-12 rounded-full mr-4">
          <span class="font-semibold">Friend 2</span>
        </li>
        <li class="flex items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <img src="../assets/Medium.png" alt="Friend 3" class="w-12 h-12 rounded-full mr-4">
          <span class="font-semibold">Friend 3</span>
        </li>
        <li class="flex items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <img src="../assets/Medium.png" alt="Friend 4" class="w-12 h-12 rounded-full mr-4">
          <span class="font-semibold">Friend 4</span>
        </li>
      </ul>
    </div>

    <!-- User List -->
    <div class="w-3/4 p-4">
      <div class="flex items-center mb-4">
        <input type="text" class="w-full border-gray-300 rounded-md px-3 py-2" placeholder="Search users...">
      </div>
      <h2 class="text-xl font-bold mb-4">User List</h2>
      <ul>
        <li class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg">
          <img src="../assets/Medium.png" alt="User 1" class="w-16 h-16 rounded-full mr-6">
          <div>
            <h3 class="text-lg font-bold mb-1">User 1</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg">
          <img src="../assets/Medium.png" alt="User 2" class="w-16 h-16 rounded-full mr-6">
          <div>
            <h3 class="text-lg font-bold mb-1">User 2</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg">
          <img src="../assets/Medium.png" alt="User 3" class="w-16 h-16 rounded-full mr-6">
          <div>
            <h3 class="text-lg font-bold mb-1">User 3</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg">
          <img src="../assets/Medium.png" alt="User 4" class="w-16 h-16 rounded-full mr-6">
          <div>
            <h3 class="text-lg font-bold mb-1">User 4</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg">
          <img src="../assets/Medium.png" alt="User 4" class="w-16 h-16 rounded-full mr-6">
          <div>
            <h3 class="text-lg font-bold mb-1">User 4</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg">
          <img src="../assets/Medium.png" alt="User 4" class="w-16 h-16 rounded-full mr-6">
          <div>
            <h3 class="text-lg font-bold mb-1">User 5</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
        <li class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg">
          <img src="../assets/Medium.png" alt="User 4" class="w-16 h-16 rounded-full mr-6">
          <div>
            <h3 class="text-lg font-bold mb-1">User 6</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
</script>