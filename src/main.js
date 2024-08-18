import './assets/main.css'

import { createApp } from 'vue'
import '@/styles/element/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css';
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";
import App from './App.vue'
import router from "@/router/router.js";
import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            cartItems: [],
            pizzaData: [],
            totalPrice: 0
        };
    },
    mutations: {
        setCartItems(state, payload) {
            const {items, data, price} = payload
            state.cartItems = items
            state.pizzaData = data
            state.totalPrice = price
        },
    },
});

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')

// createApp(App).mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    const el = document.documentElement;

    // Get CSS var
    console.log(getComputedStyle(el).getPropertyValue('--el-color-primary'));

    // Set CSS var
    el.style.setProperty('--el-color-primary', '#ffdd55');

    // Verify change
    console.log(getComputedStyle(el).getPropertyValue('--el-color-primary'));
});