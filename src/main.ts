import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App)
app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.mount('#app')
