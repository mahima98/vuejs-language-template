<template>
  <footer
    class="px-8 md:px-16 h-24 bg-gradient-to-r from-pink-500 via-red-400 to-orange-500"
  >
    <div
      class="relative flex justify-between items-center max-w-[1700px] mx-auto h-full"
    >
      <div class="text-white text-xs w-48 md:w-full md:text-md">
        {{ $t("homepage.footer") }}
      </div>
      <nav class="flex gap-4">
        <a href="">
          <img
            src="../assets/images/LinkedIn.png"
            class="w-8 h-8 object-contain hover:opacity-80"
            alt=""
            srcset=""
          />
        </a>
        <a href="">
          <img
            src="../assets/images/Facebook.png"
            class="w-8 h-8 object-contain hover:opacity-80"
            alt=""
            srcset=""
          />
        </a>
        <a href="">
          <img
            src="../assets/images/Twitter.png"
            class="w-8 h-8 object-contain hover:opacity-80"
            alt=""
            srcset=""
          />
        </a>
      </nav>
      <button
        @click="backToTop"
        class="absolute animate-bounce flex justify-center items-center gap-1 -top-8 right-0 md:right-8 text-gray-800 hover:text-gray-500"
      >
        <svg
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
        <span>{{ $t("homepage.backToTop") }}</span>
      </button>
    </div>
  </footer>
</template>
<script setup>
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const socialIcon = [
  "../assets/images/LinkedIn.png",
  "../assets/images/Facebook.png",
  "../assets/images/Twitter.png",
];
</script>
