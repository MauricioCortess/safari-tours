import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import ExploraAfrica from './components/ExploraAfrica.vue'
import ContactoForm from './components/ContactoForm.vue'
import SafariPlaya from './pages/SafariPlaya.vue'
import SobreNosotros from './pages/SobreNosotros.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/explora', name: 'Explora', component: ExploraAfrica },
  { path: '/reservar', name: 'Reservar', component: ContactoForm },
  { path: '/safari-playa', name: 'SafariPlaya', component: SafariPlaya },
  { path: '/sobre-nosotros', name: 'SobreNosotros', component: SobreNosotros }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router