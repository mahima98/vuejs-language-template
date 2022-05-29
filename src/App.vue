<template>
  <div>
    <router-view :key="$route.params?.id" />
    <Footer />
  </div>
</template>
<script setup>
import Homepage from "./components/Homepage.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<style></style>
