import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Sign-in',
      name: 'Sign-in',
      // route level code-splitting
      // this generates a separate chunk (Sign-in.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Sign-in.vue')
    },    {
      path: '/netflix',
      name: 'netflix',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Netflix.vue')
    }
  ]
})

export default router
