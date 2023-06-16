<template>

  <WebsiteHeader></WebsiteHeader>
  <router-view></router-view>
  <WebsiteFooter></WebsiteFooter>
</template>
<script setup>
import WebsiteHeader from "./components/WebsiteHeader.vue";
import WebsiteFooter from "./components/WebsiteFooter.vue";
</script>
