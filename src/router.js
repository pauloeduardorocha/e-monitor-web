import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  // mode: 'history',
  routes: [
    // Páginas
    {path: '/', component: () => import('./pages/Index.vue')},
    {path: '/paciente', component: () => import('./pages/Paciente/Lista.vue')},
    {path: '/paciente/:id', component: () => import('./pages/Paciente/View.vue')},
    {path: '/404', component: () => import('./pages/404.vue')},
    {path: '/403', component: () => import('./pages/403.vue')},

    // Recirecionamentos
    // {path: '/login',component: () => import('./pages/login.vue')}, // redirecionar para Air Base
    {path: '*', redirect: '/404'}
  ]
})
