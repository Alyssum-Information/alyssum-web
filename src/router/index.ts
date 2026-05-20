/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import AboutPage from '@/pages/AboutPage.vue'
import CasesPage from '@/pages/CasesPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import HomePage from '@/pages/index.vue'
import ServicesPage from '@/pages/ServicesPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior () {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
    },
    {
      path: '/cases',
      name: 'cases',
      component: CasesPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
})

export default router
