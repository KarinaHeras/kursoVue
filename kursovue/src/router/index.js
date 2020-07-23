import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'


Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Editar.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/agregar',
    name: 'addPost',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Addpost.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
    router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
    // esta ruta requiere autenticación, verifique si inició sesión
    // si no, redirige a la página de inicio de sesión.
        const usuario = auth.currentUser
        console.log(usuario)
    
        if (!usuario) {
          next({
            path: '/login'
          })
        } else {
          next()
        }
    
      } else {
        next()
      }
    })
    

export default router
