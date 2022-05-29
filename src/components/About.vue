<template>
  <Header headerColor="bg-red-700" />
  <div
    class="h-screen text-4xl w-full flex justify-center items-center text-black"
  >
    {{ $t("about") }}
  </div>
</template>
<script setup>
import Header from "./Header.vue";
</script>
