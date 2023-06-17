<template>
  <div class="container mx-auto py-8">
    <div class="bg-background_bcc rounded-lg p-6">
      <div class="flex flex-col md:flex-row items-center mb-8">
        <img :src="profileImage" alt="User Avatar" class="w-24 h-24 rounded-full border-2 border-component_secondary_bcc mb-4 md:mb-0">
        <div class="md:ml-4">
          <h1 class="text-3xl font-bold">John Doe</h1>
          <p class="text-content_text">Summoner Level 10</p>
        </div>
      </div>
      <form class="border-t border-component_secondary_bcc mt-8 mb-8">
        <h2 class="text-lg font-semibold mb-4">Profile Image</h2>
        <div class="flex items-center">
          <label for="profileImageUpload" class="mr-2 text-content_text">Upload an image:</label>
          <input type="file" id="profileImageUpload" class="hidden">
          <button class="btn-secondary" >Choose File</button>
          <span v-if="profileImageFileName" class="ml-4 text-content_text">{{ profileImageFileName }}</span>
        </div>
      </form>
      <div class="border-t border-component_secondary_bcc mt-8 mb-8">
        <h2 class="text-lg font-semibold mb-4">General Settings</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium text-content_text">Display Name</h3>
            <input type="text" class="input-primary w-full mt-2">
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium text-content_text">Email Address</h3>
            <input type="email" class="input-primary w-full mt-2">
          </div>
        </div>
      </div>
      <div class="border-t border-component_secondary_bcc mt-8 mb-8">
        <h2 class="text-lg font-semibold mb-4">Account Settings</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium text-content_text">Old Password</h3>
            <input type="password" class="input-primary w-full mt-2">
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium text-content_text">New Password</h3>
            <input type="password" class="input-primary w-full mt-2">
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium text-content_text">Re-enter New Password</h3>
            <input type="password" class="input-primary w-full mt-2">
          </div>
        </div>
      </div>
      <div class="border-t border-component_secondary_bcc mt-8 mb-8">
        <h2 class="text-lg font-semibold mb-4">Delete Account</h2>
        <p class="text-content_text">Warning: This action is irreversible. Deleting your account will permanently remove all your data.</p>
        <button class="btn-danger mt-4">Delete Account</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initTE } from "tw-elements";

onMounted(() => {
  initTE();
});
</script>
