<template>
   <header class="sticky top-0 bg-inherit">
      <nav class="flex flex-col md:flex-row sticky top-0 text-center justify-center md:justify-between p-5 z-50">
        <h1 class="text-4xl">eventr</h1>
        <!-- navlinks and login/register buttons -->
        <div class="flex flex-col md:flex-row md:grow items-center md:justify-end mt-5 md:mt-0 md:gap-x-10" :class='isOpened || isDesktop ? "" : "hidden"' >
          <ul class="flex flex-col md:flex-row md:gap-5 w-full md:w-max mb-5 md:mb-0">
            <RouterLink class="border-t-2 md:border-t-0 p-2 md:p-0" activeClass="text-blue-600" to="/">Home</RouterLink>
            <RouterLink class="border-t-2 md:border-t-0 p-2 md:p-0" activeClass="text-blue-600" to="/events">Events</RouterLink>
            <RouterLink class="border-t-2 md:border-t-0 p-2 md:p-0" activeClass="text-blue-600" to="/about">About</RouterLink>
            <RouterLink class="border-t-2 md:border-t-0 p-2 md:p-0" activeClass="text-blue-600" to="/contact">Contact</RouterLink>
          </ul>
          <div class="flex md:justify-self-end" :class='isAuthenticated ? "hidden": ""'>
            <button class="bg-gray-200 hover:bg-gray-300 px-4 py-2 mr-2 rounded-lg login">Log in</button>
            <SignUpButton text="Sign up" />
          </div>
        </div>
        <div
          id="menu-icon"
          class="absolute top-6 right-5 md:hidden"
          @click="toggleIsOpened"
        >
          <svg
            class="menu-icons w-6 h-6"
            :class="[isOpened ? 'hidden' : 'block']"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
          </svg>
          <svg
            class="menu-icons w-6 h-6"
            :class="[isOpened ? 'block' : 'hidden']"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
          </svg>
        </div>
      </nav>
    </header>
</template>

<script setup>
import { ref } from "vue";
import SignUpButton from "./SignUpButton.vue";
import { RouterLink } from "vue-router";

//boolean to check if the menu is open
const isOpened = ref(false);

const toggleIsOpened = () => {
  isOpened.value = !isOpened.value;
};

const isDesktop = ref(window.innerWidth > 768);

const isAuthenticated = ref(false);

</script>

<style scoped>

</style>