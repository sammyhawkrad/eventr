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
            const response = await fetch('/events-data');
            this.events = await response.json();
        }
    }
})