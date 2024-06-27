<script setup>
import { onMounted  } from "vue";
import { RouterView } from "vue-router";

import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

import { useEventsStore } from "./store";

const eventsStore = useEventsStore();

onMounted(() => {
    if (eventsStore.events.length === 0) {
        eventsStore.fetchEvents();
    }
});
</script>

<template>
    <NavBar />
    <RouterView />
    <Footer />
</template>

<style scoped>
</style>
