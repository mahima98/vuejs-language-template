<template>
  <div class="homepage w-full h-screen bg-red-100">
    <div class="flex flex-col justify-between items-center w-full h-full">
      <Header />
      <p
        class="text-4xl md:text-6xl lg:text-7xl text-white text-center flex flex-col gap-3"
      >
        <span>We make people</span>
        <span>more valuable to brands</span>
      </p>
      <button class="arrow-down py-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          />
        </svg>
      </button>
    </div>
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
