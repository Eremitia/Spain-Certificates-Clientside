import { createRouter, createWebHistory } from 'vue-router'
import Error from '@/components/Error.vue'
import Success from '@/components/Success.vue'
import Home from '@/views/Home.vue'
import Solicitud from '@/views/Solicitud.vue'
import TermsAndConditions from '@/views/TermsAndConditions.vue'
import Policy from '@/views/Policy.vue'
import Cookies from '@/views/Cookies.vue'
import Declaration from '@/views/Declaration.vue'
import AvisoLegal from '@/views/AvisoLegal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/solicitud',
    name: 'solicitud',
    component: Solicitud
  },
  {
    path: '/checkout/success',
    name: 'success',
    component: Success,
    meta: { requiresCookie: true }
  },
  {
    path: '/checkout/error',
    name: 'error',
    component: Error,
    meta: { requiresCookie: true }
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsAndConditions
  },
  { path: '/policy', name: 'policy', component: Policy },
  { path: '/cookies-policy', name: 'Cookies', component: Cookies },
  { path: '/declarations', name: 'Declaration', component: Declaration },
  { path: '/legal', name: 'Legal', component: AvisoLegal },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLocalStorage)) {
    const formData = localStorage.getItem('formData');
    if (!formData) {
      next({ name: 'home' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
