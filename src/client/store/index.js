import { defineStore } from 'pinia';

export const useEventsStore = defineStore('event', {
    state: () => ({
        events: []
    }),
    getters: {
        getEvents(state) {
            return state.events;
        }
    },
    actions: {
        async fetchEvents() {
            const response = await fetch('/events');
            this.events = await response.json();
            console.log(this.events);
        }
    }
})