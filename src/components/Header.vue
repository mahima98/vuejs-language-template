<template>
  <div class="header w-full flex justify-between items-center h-24 z-40">
    <img src="../assets/images/Logo.png" alt="proximity-logo" class="px-4" />

    <div class="header-menu md:flex justify-center items-center hidden">
      <div class="flex md:text-sm lg:text-xl z-30">
        <a
          href="/"
          v-for="menu in menus"
          :key="menu"
          class="px-4 py-2 text-white hover:opacity-80"
        >
          {{ $t(`menu.${menu}`) }}
        </a>
      </div>
      <button
        @click="setLanguage"
        class="z-30 language border-solid border-y-[1px] border-l-[1px] p-1 border-white text-white ml-4"
      >
        EN/FR
      </button>
    </div>
    <button @click="open = !open" class="md:hidden px-4 right-0 absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <div
      focus
      :class="[
        open ? `opacity-1 md:hidden` : `opacity-0`,
        `absolute z-10 w-full h-full top-0 p-2 transition-opacity duration-500 ease-in-out origin-top-right overflow-hidden`,
      ]"
    >
      <div
        class="absolute rounded-lg shadow-md w-full lg:w-0 h-full bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div class="px-5 pt-4 flex items-center justify-between w-full">
          <div>
            <img
              src="../assets/images/Logo.png"
              alt="proximity-logo"
              class="h-auto w-48"
            />
          </div>
          <button @click="open = !open">
            <div
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        </div>
        <div class="px-2 pt-2 pb-3 w-full">
          <a
            v-for="menu in menus"
            :key="menu"
            href="#"
            class="flex justify-center items-center px-3 py-4 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            {{ $t(`menu.${menu}`) }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import i18n from "../../i18n";
import { computed } from "vue";

const open = ref(false);
const setLang = ref(false);
let menus = ["about", "work", "latest", "people", "contact"];

function setLanguage() {
  if (!setLang.value) {
    setLang.value = true;
    return (i18n.global.locale = "en");
  } else {
    setLang.value = false;
    return (i18n.global.locale = "fr");
  }
}
</script>
