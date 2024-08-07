import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';

import 'highlight.js/styles/default.css'; // 根据需要选择不同的主题
import 'ant-design-vue/dist/reset.css';

import Info from "@/components/Info.vue"
import CodeHighlight from '@/components/codeHighLight.vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd as any)

app.component("Info", Info); // 展示Info信息的组件
app.component("CodeHighlight", CodeHighlight); // 展示代码高亮的组件

app.mount('#app')
