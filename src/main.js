// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import IndexPage from './page/Index.vue'

const routes = [
  {
    path: '/index',
    component: IndexPage
  },
  {
    path: '*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {Layout},
  template: '<Layout/>'
})
