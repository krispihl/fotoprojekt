import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/Photo.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/photo/:id',
    name: 'photo',
    component: Photo
  },
]

const router = new VueRouter({
  routes
})

export default router
