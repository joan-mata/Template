import { createRouter, createWebHistory } from 'vue-router'
import BebidasView from '../views/BebidasView.vue'
import ColdbocView from '../views/ColdbocView.vue'
import EntrantesView from '../views/EntrantesView.vue'
import HotbocView from '../views/HotbocView.vue'
import InfoView from '../views/InfoView.vue'
import PostresView from '../views/PostresView.vue'
import PrimerosView from '../views/PrimerosView.vue'
import SegundosView from '../views/SegundosView.vue'
import TapasView from '../views/TapasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: InfoView
    },
    {
      path: '/info',
      name: 'info',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: InfoView
    },
    {
      path: '/tapas',
      name: 'tapas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TapasView
    },
    {
      path: '/entrantes',
      name: 'entrantes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EntrantesView
    },
    {
      path: '/primeros',
      name: 'primeros',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PrimerosView
    },
    {
      path: '/segundos',
      name: 'segundos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SegundosView
    },
    {
      path: '/hotboc',
      name: 'hotboc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HotbocView
    },
    {
      path: '/coldboc',
      name: 'coldboc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ColdbocView
    },
    {
      path: '/postres',
      name: 'postres',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PostresView
    },
    {
      path: '/bebidas',
      name: 'bebidas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BebidasView
    }
    // {
    //   path: '/INFORMACIÓN',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
