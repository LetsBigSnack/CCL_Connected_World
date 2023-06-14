<template>
  <div class="flex flex-col md:flex-row h-screen">
    <!-- Login Form -->
    <div class="w-1/2 flex items-center justify-center py-10">
      <div class="max-w-md w-full">
        <h1 class="text-2xl font-bold mb-5">Login</h1>
        <form>
          <div class="mb-4">
            <label for="username" class="block mb-2">Username</label>
            <input type="text" id="username" class="w-full border-gray-300 rounded-md px-3 py-2" placeholder="Enter your Username">
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2">Password</label>
            <input type="password" id="password" class="w-full border-gray-300 rounded-md px-3 py-2" placeholder="Enter your password">
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
    <!-- Image -->
    <div class="w-1/2 flex">
      <img src="../assets/Fulllength.png" alt="Login Image" class="object-cover w-full h-full">
    </div>
  </div>
</template>
<script setup>
</script>