import { defineStore } from 'pinia';

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: []
    }),
    getters: {
        getEvents() {
            return this.events;
        }
    },
    actions: {
        async fetchEvents() {
            const response = await fetch('/events');
            this.events = await response.json();
        }
    }
})