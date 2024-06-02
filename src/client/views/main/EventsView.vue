<script setup>
import { useEventsStore } from "../../store";
import EventComponent from "../../components/EventComponent.vue";

const eventsStore = useEventsStore();

if (eventsStore.events.length === 0) {
    eventsStore.fetchEvents();
}
</script>

<template>
<main class="md:max-w-screen-xl mx-auto px-10">
    <h1>Events Page</h1>
    <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <EventComponent v-for="event in eventsStore.events.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 12)" :key="event.id" :event="event" />
        </div>
    </section>
</main>
</template>