/*
 * @Author: crli
 * @Date: 2020-07-02 09:04:26
 * @LastEditors: crli
 * @LastEditTime: 2020-07-08 15:18:50
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '@/views/page2/app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: app
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/page2/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router