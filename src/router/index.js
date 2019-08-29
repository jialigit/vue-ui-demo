import Router from 'vue-router'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Vue from 'vue/dist/vue.js'

const routes = [
  { path: '/', component: Foo },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new Router({
  routes // short for `routes: routes`
})

Vue.use(Router)

export default router