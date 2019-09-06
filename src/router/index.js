import Router from 'vue-router'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import TodoList from '../components/TodoList.vue'
import BitCoin from '../components/BitCoin.vue'
import ShoptingCartExample from '../components/ShoppingCartExample.vue'
import Vue from 'vue/dist/vue.js'

const routes = [{
		path: '/',
		component: Foo
	},
	{
		path: '/foo',
		component: Foo
	},
	{
		path: '/bar',
		component: Bar
	},
	{
		path: '/todo',
		component: TodoList
	},
	{
		path: '/bitcoin',
		component: BitCoin
	},
	{
		path: '/shopping-cart-example',
		component: ShoptingCartExample
	}
]

const router = new Router({
	routes // short for `routes: routes`
})

Vue.use(Router)

export default router
