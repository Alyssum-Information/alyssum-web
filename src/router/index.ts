/**
 * router/index.ts
 *
 * Single-page experience with smooth-scroll anchors.
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      const el = document.querySelector(to.hash)
      if (el) {
        return { el: to.hash, top: 80, behavior: 'smooth' }
      }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
