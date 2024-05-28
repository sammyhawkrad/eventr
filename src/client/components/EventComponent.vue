<script setup>
const props = defineProps({
    event: Object,
});

</script>

<template>
    <div class="ring-2 rounded-lg">
        <img :src="event.image" :alt="`${event.title} cover picture`">
        <h2>{{ event.title }}</h2>
        <p>{{ event.description }}</p>
        <p>{{ event.location }}</p>
        <p>{{ `${event.date} @ ${event.time}` }}</p>
    </div>
</template>


<style scoped>

</style>