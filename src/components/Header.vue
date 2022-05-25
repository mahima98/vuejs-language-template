<template>
  <div class="header w-full flex justify-between items-center h-24">
    <img src="../assets/images/Logo.png" alt="proximity-logo" class="px-4" />
    <div class="header-menu md:flex justify-center items-center hidden">
      <div class="flex text-xl">
        <a href="/" class="px-4 py-2 text-white">About</a>
        <a href="/" class="px-4 py-2 text-white">Work</a>
        <a href="/" class="px-4 py-2 text-white">Latest</a>
        <a href="/" class="px-4 py-2 text-white">People & Careers</a>
        <a href="/" class="px-4 py-2 text-white">Contact</a>
      </div>
      <div
        class="language border-solid border-y-[1px] border-l-[1px] p-1 border-white text-white ml-4"
      >
        EN/FR
      </div>
    </div>
    <div class="block md:hidden px-4">
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
    </div>
  </div>
</template>
