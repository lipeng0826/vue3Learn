import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Props from '@/views/6.event/01_props/Father.vue'
import Event from '@/views/6.event/02_custom-event/Father.vue'
import Bus from '@/views/6.event/03_mitt/Father.vue'
import Model from '@/views/6.event/04_v-model/Father.vue'
import AttrsListeners from '@/views/6.event/05_$attrs/Father.vue'
import RefChildrenParent from '@/views/6.event/06_$refs-$parent/Father.vue'
import ProvideInject from '@/views/6.event/07_provide-inject/Father.vue'
import Pinia from '@/views/6.event/08_pinia/Father.vue'
import Slot from '@/views/6.event/09_slot/Father.vue'


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
      path: '/1basic/1basicUse',
      name: '1basicUse',
      component: () => import('../views/1.basic/1basicUse.vue')
    },
    {
      path: '/1basic/animation',
      name: 'animation',
      component: () => import('../views/1.basic/animation-test.vue')
    },
    {
      path: '/1basic/2basicUse',
      name: '2basicUse',
      component: () => import('../views/1.basic/2basicUse.vue')
    },
    {
      path: '/1basic/3basicUse',
      name: '3basicUse',
      component: () => import('../views/1.basic/3basicUse.vue')
    },
    {
      path: '/1basic/4toRefs',
      name: '4toRefs',
      component: () => import('../views/1.basic/4toRefs.vue')
    },
    {
      path: '/1basic/5computed',
      name: '5computed',
      component: () => import('../views/1.basic/5computed.vue')
    },
    {
      path: '/1basic/6watch',
      name: '6watch',
      component: () => import('../views/1.basic/6watch.vue')
    },
    {
      path: '/1basic/7watchEffect',
      name: '7watchEffect',
      component: () => import('../views/1.basic/7watchEffect.vue')
    },
    // ---------------
    {
      path: '/2senior/1ref',
      name: '1ref',
      component: () => import('../views/2.senior/1ref.vue')
    },
    {
      path: '/2senior/2props',
      name: '2props',
      component: () => import('../views/2.senior/2props/App.vue')
    },
    {
      path: '/2senior/3lifeCycle',
      name: '3lifeCycle',
      component: () => import('../views/2.senior/3lifeCycle/App.vue')
    },
    {
      path: '/2senior/4hooks',
      name: '4hooks',
      component: () => import('../views/2.senior/4自定义hooks/App.vue')
    },
    // ---------------
    {
      path: '/3+ts/1basic',
      name: 'tsBasic',
      component: () => import('../views/3.+ts/1basic.vue')
    },
    // ---------------
    {
      path: '/4router/2params',
      name: 'routerParams',
      component: () => import('../views/4.router/2params.vue')
    },
    // ---------------
    {
      path: '/5pinia/1basicUse',
      name: '/5pinia/1basicUse',
      component: () => import('../views/5.pinia/1baiscUse/App.vue')
    },
    // ---------------
    {
      path: '/6event',
      name: '6event',
      children: [
        {
          path: '/6event/props',
          component: Props
        },
        {
          path: '/6event/event',
          component: Event
        },
        {
          path: '/6event/mitt',
          component: Bus
        },
        {
          path: '/6event/model',
          component: Model
        },
        {
          path: '/6event/attrs',
          component: AttrsListeners
        },
        {
          path: '/6event/ref-parent',
          component: RefChildrenParent
        },
        {
          path: '/6event/provide-inject',
          component: ProvideInject
        },
        {
          path: '/6event/pinia',
          component: Pinia
        },
        {
          path: '/6event/slot',
          component: Slot
        },
      ]
    },
    {
      path: '/7vuex/1demo',
      name: 'vuexDemo',
      component: () => import('../views/7.vuex使用/1demo/vuex-demo.vue')
    },
  ]
})

export default router
