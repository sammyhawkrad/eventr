<script setup>
import SignUpButton from "./SignUpButton.vue";

</script>
<template>
    <section class="md:flex items-center justify-start gap-10 my-[5rem]">
        <div class="md:max-w-[31rem]">
            <h1 class="text-5xl font-bold">Discover and Create Unforgettable Events with Eventr</h1>
            <p class="my-7">
                Your ultimate platform for finding and organizing events. 
                Whether you're planning an event or looking for one to attend, Eventr makes it easy. 
                Seamlessly manage, promote, and explore unforgettable experiences all in one place. 
                Join Eventr today and elevate your event journey!
            </p>
            <SignUpButton class="text-lg px-7 py-2 ml-0" text="Join eventr" />
        </div>
        <img class="md:h-[20rem]" src="/FloatDoodle.png" alt="">
    </section>
</template>
