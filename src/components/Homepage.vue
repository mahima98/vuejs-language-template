<template>
  <div class="font-avenirBook">
    <section class="homepage w-full h-screen bg-red-100">
      <div class="flex flex-col justify-between items-center w-full h-full">
        <Header />
        <p
          class="text-4xl md:text-6xl lg:text-7xl text-white text-center flex flex-col gap-3"
        >
          <span>{{ $t("homepage.descriptionOne_1") }}</span>
          <span>{{ $t("homepage.descriptionOne_2") }}</span>
        </p>
        <button
          class="arrow-down z-50 py-10 animate-bounce"
          @click="scrollToElement"
        >
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
    </section>
    <section class="section-2-wrapper" ref="section2">
      <div
        class="w-full h-full flex flex-col justify-between items-center py-8"
      >
        <div class="flex flex-col justify-center items-center gap-4 pt-16">
          <h4 class="text-red-600 font-bold">
            {{ $t("homepage.headingOne") }}
          </h4>
          <div
            class="flex flex-col text-center gap-1 text-2xl md:text-4xl font-light"
          >
            <span>{{ $t("homepage.descriptionTwo_1") }}</span>
            <span>{{ $t("homepage.descriptionTwo_2") }}</span>
          </div>
        </div>
        <div class="relative second-img w-full bg-no-repeat">
          <img
            src="../assets/images/Brightness_Cont.png"
            alt="Nature"
            class="max-w-full mx-auto w-[1600px] h-auto bg-no-repeat"
            width="700"
            height="700"
          />
          <p
            class="para md:absolute text-sm md:text-xl left-[50%] top-[90%] md:-translate-y-[50%] md:-translate-x-[50%] bg-white p-8 md:p-16 md:[500px] lg:w-[900px] mx-auto"
          >
            {{ $t("homepage.descriptionThree") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col gap-4 justify-center items-center h-screen lg:-mt-8"
    >
      <img
        src="../assets/images/ANIMATION.png"
        class="animate-spin lg:w-auto w-12"
        alt=""
      />
      <h4 class="text-red-600 font-bold pt-8">
        {{ $t("homepage.headingTwo") }}
      </h4>
      <div
        class="grid grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none gap-4 w-full h-96 my-16 px-16"
      >
        <div
          class="bg-gray-400 relative hover:opacity-80 transition-opacity duration-500 ease-in-out"
        >
          <div
            class="absolute flex flex-col gap-2 bottom-0 w-[260px] p-8 text-white"
          >
            <p class="leading-5 text-lg">
              {{ $t("homepage.headingThree") }}
            </p>
            <a href="#" class="underline text-sm">
              {{ $t("homepage.link1") }}
            </a>
          </div>
        </div>
        <div
          class="bg-gray-400 relative hover:opacity-80 transition-opacity duration-1000 ease-in-out"
        >
          <div
            class="absolute flex flex-col gap-2 bottom-0 w-[260px] p-8 text-white"
          >
            <p class="leading-5 text-lg">
              {{ $t("homepage.headingFour") }}
            </p>
            <a href="#" class="underline text-sm">
              {{ $t("homepage.link1") }}</a
            >
          </div>
        </div>
      </div>
      <a
        href="#"
        class="underline text-md text-thin hover:text-red-500 transition-opacity duration-500 opacity-80"
      >
        {{ $t("homepage.link2") }}
      </a>
    </section>
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import { ref } from "vue";

const section2 = ref();
function scrollToElement() {
  console.log("inside function");
  console.log(section2.value);
  section2.value.scrollIntoView({ behavior: "smooth" });
}
</script>
<style>
.homepage {
  background: url("../assets/videos/video-poster.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: fit;
}
</style>
