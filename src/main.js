import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import './index.css'  // or './main.css' depending on your setup

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
