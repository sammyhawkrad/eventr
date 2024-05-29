<script setup>
import { onBeforeMount } from "vue";

import NavBar from "../components/NavBar.vue";
import Hero from "../components/Hero.vue";
import EventComponent from "../components/EventComponent.vue";

import { useEventsStore } from "../store";

const eventsStore = useEventsStore();

onBeforeMount(() => {
    eventsStore.fetchEvents();
});

</script>

<template>
    <NavBar />
    <main class="md:max-w-screen-xl mx-auto px-10">
        <Hero />
        <section>
            <h2 class="text-3xl text-center my-10">Upcoming Events</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <EventComponent v-for="event in eventsStore.events.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 12)" :key="event.id" :event="event" />
            </div>
            <a href=""><div class="rounded-sm my-5 p-2 min-w-full text-center bg-gray-100 hover:bg-gray-200">See all events</div></a>
        </section>
    </main>
</template>


<style scoped>

</style>