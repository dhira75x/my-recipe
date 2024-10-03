import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from "vue-toastification";
// import { useStore } from './store/useStore'; 
import "vue-toastification/dist/index.css";


const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(createPinia())
app.use(router)
app.use(pinia)
app.use(PrimeVue, { ripple: true  })
app.use(Toast);
app.mount('#app')
