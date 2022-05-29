<template>
  <header :class="`header ${headerColor} w-full z-40`">
    <div class="max-w-[1700px] mx-auto flex justify-between items-center h-24">
      <router-link to="/">
        <img
          src="../assets/images/Logo.png"
          alt="proximity-logo"
          class="lg:px-0 px-4"
        />
      </router-link>

      <div class="header-menu md:flex justify-center items-center hidden">
        <nav class="flex md:text-sm lg:text-xl z-30">
          <router-link
            v-for="menu in menus"
            :key="menu"
            :to="`/${menu}`"
            class="px-4 py-2 text-white transition duration-300 hover:text-red-300"
          >
            {{ $t(`menu.${menu}`) }}
          </router-link>
        </nav>
        <button
          @click="toggleLang"
          class="flex gap-2 px-4 z-30 language border-solid border-y-[1px] border-l-[1px] p-1 border-white text-white ml-4"
        >
          <span
            title="set english"
            :class="[active ? `font-extrabold` : 'font-normal']"
            >EN</span
          ><span
            title="set french"
            :class="[active ? `font-normal` : 'font-extrabold']"
            >FR</span
          >
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
          open ? `opacity-1 w-full md:hidden` : `opacity-0`,
          `absolute z-10 h-full top-0 p-2 transition-opacity duration-500 ease-in-out origin-top-right overflow-hidden`,
        ]"
      >
        <div
          class="absolute rounded-lg shadow-md w-full lg:w-0 h-full bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-4 pt-4 flex items-center justify-between w-full">
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
          <nav class="px-2 pt-2 pb-3 w-full">
            <router-link
              v-for="menu in menus"
              :key="menu"
              :to="`/${menu}`"
              class="flex justify-center items-center px-3 py-4 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {{ $t(`menu.${menu}`) }}
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import i18n from "../../i18n";

const props = defineProps(["headerColor"]);

const open = ref(false);
const setLang = ref(false);
const active = ref(true);
const menus = ["about", "work", "latest", "people", "contact"];

function toggleLang() {
  setLang.value = !setLang.value;

  if (setLang.value) {
    active.value = true;
    return (i18n.global.locale = "en");
  }
  active.value = false;
  return (i18n.global.locale = "fr");
}
</script>
