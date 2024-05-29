<script setup>
import SignUpButton from "./SignUpButton.vue";
</script>
<template>
    <footer class="bg-gray-800 text-white p-5">
        <div class="md:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
                <h3 class="text-2xl font-bold">eventr</h3>
                <p class="my-5">Your ultimate platform for finding and organising events. 
                    Whether you're planning an event or looking for one to attend, Eventr makes it easy. 
                    Seamlessly manage, promote, and explore unforgettable experiences all in one place. 
                    <br>
                    <br>
                    Join Eventr today and elevate your event journey!
                </p>
                <SignUpButton class="text-lg px-7 py-2 ml-0" text="Get Started" />
            </div>
            <div>
                <h3 class="text-2xl font-bold">Quick Links</h3>
                <ul class="my-5">
                    <li>Home</li>
                    <li>Events</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3 class="text-2xl font-bold">Contact Us</h3>
                <p class="my-5">123 Eventr Street, Eventr City, Eventr Country</p>
                <p>
                    <a href="mailto:" class="hover:underline">Email: hello@eventr.com</a>
                </p>
                <p>
                    <a href="tel:" class="hover:underline">Phone: (+12) 34 567 8910</a>
                </p>
            </div>
        </div>
    </footer>
</template>