/**
* Vue component for NotLoggedIn
* @component
*/
<template>
  <div class="max-w-6xl mx-auto px-4 py-8 min-h-[80vh] flex flex-col justify-center items-center gap-2">
    <div>
      <div class="border-t-2 border-component_secondary_bcc p-4 font-main_content flex flex-col justify-center items-center gap-2">
        <h2 class="text-8xl mb-4 font-display text-primary_bcc">Access Denied</h2>
        <p  class="text-2xl">You need to be logged in to access that feature</p>
        <p>Create an account or login with an existing one</p>
        <router-link to="/login" class="flex mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc">
          Login
        </router-link>

        <router-link to="/register" class="flex mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc">
          Sign up
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>