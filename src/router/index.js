import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homeView',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutView',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/1basic/1template',
      name: '1template',
      component: () => import('../views/1.basic/1template.vue')
    }
  ]
})

export default router
