<template>
  <div class="container mx-auto mt-10 px-4 max-w-2xl">
    <div class="bg-component_secondary_bcc rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-4">User Settings</h2>

      <div class="flex flex-col space-y-6">
        <div class="bg-component_primary_bcc rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">Profile Picture</h3>
          <div class="flex items-center mb-4">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img src="placeholder.png" alt="Profile Picture" class="object-cover w-full h-full">
            </div>
            <label for="profile-picture-upload" class="ml-4 bg-primary_bcc hover:bg-secondary_bcc text-content_text px-4 py-2 rounded-md cursor-pointer">Upload</label>
            <input type="file" id="profile-picture-upload" class="hidden">
          </div>
          <button type="submit" class="bg-primary_bcc text-content_text px-4 py-2 rounded-md">Save</button>
        </div>

        <div class="bg-component_primary_bcc rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">Change Password</h3>
          <form>
            <div class="mb-4">
              <label for="current-password" class="block font-semibold mb-1">Current Password</label>
              <input type="password" id="current-password" name="current-password" class="w-full bg-component_primary_bcc text-content_text rounded-md p-2">
            </div>
            <div class="mb-4">
              <label for="new-password" class="block font-semibold mb-1">New Password</label>
              <input type="password" id="new-password" name="new-password" class="w-full bg-component_primary_bcc text-content_text rounded-md p-2">
            </div>
            <div class="mb-4">
              <label for="confirm-password" class="block font-semibold mb-1">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" class="w-full bg-component_primary_bcc text-content_text rounded-md p-2">
            </div>
            <button type="submit" class="bg-primary_bcc text-content_text px-4 py-2 rounded-md">Save</button>
          </form>
        </div>

        <div class="bg-component_primary_bcc rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">Change Email</h3>
          <form>
            <div class="mb-4">
              <label for="current-email" class="block font-semibold mb-1">Current Email</label>
              <input type="email" id="current-email" name="current-email" class="w-full bg-component_primary_bcc text-content_text rounded-md p-2">
            </div>
            <div class="mb-4">
              <label for="new-email" class="block font-semibold mb-1">New Email</label>
              <input type="email" id="new-email" name="new-email" class="w-full bg-component_primary_bcc text-content_text rounded-md p-2">
            </div>
            <button type="submit" class="bg-primary_bcc text-content_text px-4 py-2 rounded-md">Save</button>
          </form>
        </div>
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
