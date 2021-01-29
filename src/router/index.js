import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/pythonLessons/intro.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/progress.vue')
  },
  {
    path: '/pythonLessons/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/pythonLessons/lesson1',
    name: 'Lesson 1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pythonLessons/lesson1.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },


]

const pythons = [
  {
    path: '/pythonLessons/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/pythonLessons/lesson1',
    name: 'Lesson 1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pythonLessons/lesson1.vue')
  },

]

const router = new VueRouter({
  routes,
  pythons
})

export default router
