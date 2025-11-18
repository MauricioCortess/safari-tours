import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Importamos el archivo router.js

createApp(App)
  .use(router) // Usamos el router
  .mount('#app')

