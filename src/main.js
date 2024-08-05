import './assets/main.css'

import { createApp } from 'vue'
import '@/styles/element/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
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