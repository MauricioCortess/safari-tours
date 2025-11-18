import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import SafariPlaya from './pages/SafariPlaya.vue'
import SobreNosotros from './pages/SobreNosotros.vue'
import ExploraAfrica from './components/ExploraAfrica.vue'
import ContactoForm from './components/ContactoForm.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/explora', name: 'Explora', component: ExploraAfrica },
  { path: '/safari-playa', name: 'SafariPlaya', component: SafariPlaya },
  { path: '/reservar', name: 'Reservar', component: ContactoForm },
  { path: '/sobre-nosotros', name: 'SobreNosotros', component: SobreNosotros }
]

const router = createRouter({
  // AQUÍ ESTÁ LA SOLUCIÓN MÁGICA:
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router