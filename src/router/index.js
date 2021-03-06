import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import i18n
import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:`/${i18n.locale}`
  },
  {
    path:'/:lang',
    component:{
      render(c){return c('router-view')}
    },
    children:[
        {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'aboutUs',
        name: 'AboutUs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
      },
      {
        path: 'example',
        name: 'Example',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Example.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
