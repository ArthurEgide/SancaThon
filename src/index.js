import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Login from '../components/Login.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/auth",
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requeresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      requeresAuth: false
    }
  },
  // {
  //   path: '/auth/login',
  //   name: 'Login',
  //   component: Login,
  //   meta: {
  //     requeresAuth: false
  //   }
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  console.log("Navegando de: " , from)
  console.log("Navegando para: " , to)
  if (to.name !== 'Login' && !currentUser) next({ name: 'Login' })
  if ((to.name == 'Login' || to.name == 'Register') && currentUser) next({ name: 'Home' })
  else next()
})

export default router