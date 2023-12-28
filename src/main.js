import { createApp } from 'vue'
import { setupStore } from './store'
import './style.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(setupStore())
app.use(router)
app.mount('#app')

