import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import NotFound from '../views/NotFound.vue'
import { authGuard } from './guards';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        name: 'Tab1',
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        name: 'Tab2',
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        name: 'Tab3',
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ],
    beforeEnter: authGuard
  }, 
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
    beforeEnter: authGuard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
