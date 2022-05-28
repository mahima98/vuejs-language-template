<template>
  <div
    class="relative flex justify-between items-center px-4 md:px-16 h-24 bg-gradient-to-r from-pink-500 via-red-400 to-orange-500"
  >
    <div class="text-white text-xs w-48 md:w-full md:text-md">
      © Proximity Worldwide 2018. All Rights Reserved. Privacy statement.
    </div>
    <div class="flex gap-4">
      <a href="">
        <img
          src="../assets/images/LinkedIn.png"
          class="w-8 h-8"
          alt=""
          srcset=""
        />
      </a>
      <a href="">
        <img
          src="../assets/images/Facebook.png"
          class="w-8 h-8"
          alt=""
          srcset=""
        />
      </a>
      <a href="">
        <img
          src="../assets/images/Twitter.png"
          class="w-8 h-8"
          alt=""
          srcset=""
        />
      </a>
    </div>
    <button
      @click="backToTop"
      class="absolute animate-bounce flex justify-center items-center gap-1 -top-8 right-8"
    >
      <span>Return to top</span
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 7l4-4m0 0l4 4m-4-4v18"
        />
      </svg>
    </button>
  </div>
</template>
<script setup>
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
