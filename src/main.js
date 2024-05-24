import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import i18n from './i18n';


createApp(App).use(router).use(bootstrap).use(i18n).mount('#app')
