<template>

  <WebsiteHeader></WebsiteHeader>
  <router-view></router-view>
  <website-footer></website-footer>
</template>
<script setup>
import WebsiteHeader from "./components/WebsiteHeader.vue";
import WebsiteFooter from "./components/WebsiteFooter.vue";
</script>
