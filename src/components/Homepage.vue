<template>
  <div class="homepage w-full h-screen bg-red-100">
    <Header />
  </div>
</template>
<script setup>
import Header from "./Header.vue";
</script>
<style>
.homepage {
  background: url("../assets/videos/video-poster.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: fit;
}
</style>
