import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/main/HomeView.vue'
import AboutView from '../views/main/AboutView.vue'
import ContactView from '../views/main/ContactView.vue'
import EventsView from '../views/main/EventsView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/events', component: EventsView },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router