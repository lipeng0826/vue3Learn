import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Info from "@/components/Info.vue"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("Info", Info);

app.mount('#app')
