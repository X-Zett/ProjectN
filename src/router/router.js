import MainPage from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router"
import CartPage from "@/pages/CartPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/order',
        component: CartPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router