<template>
    <button class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
    text: String,
});

</script>