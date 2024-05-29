<template>
   <header>
      <nav class="flex flex-col md:flex-row sticky top-0 text-center justify-center md:justify-between p-5 z-50">
        <h1 class="text-3xl mb-5">eventr</h1>
        <form class="self-start">
        <input type="text" name="" id="" placeholder="Search for events">
        <button class="bg-blue-500 text-white p-2 rounded">Search</button>
        </form>
        <div>
        <button class="hover:bg-gray-200 px-4 py-2 rounded-lg login">Log in</button>
        <SignUpButton text="Sign up" />
        </div>
      </nav>
    </header>
</template>

<script setup>
import { ref } from "vue";
import SignUpButton from "./SignUpButton.vue";


const isOpened = ref(false);

const toggleMenu = () => {
  isOpened.value = !isOpened.value;
};

const isDesktop = window.innerWidth > 768;

const displayMenu = () => isOpened ? "hidden" : "";

</script>

<style scoped>

</style>