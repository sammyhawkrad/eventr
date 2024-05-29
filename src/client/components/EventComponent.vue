<script setup>
const props = defineProps({
    event: Object,
});

</script>

<template>
    <div class="rounded-lg bg-gray-50 dark:bg-inherit">
        <img class="rounded-md aspect-video" :src="event.image" :alt="`${event.title} cover picture`">
        <div class="py-2">
            <h3 class="text-xl font-bold my-2">{{ event.title }}</h3>
            <p class="my-1 font-light">{{ event.description }}</p>
            <p>{{ event.location }}</p>
            <p>{{ `${event.date} @ ${event.time}` }}</p>
        </div>
    </div>
</template>


<style scoped>

</style>