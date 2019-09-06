import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
	  cart,
	  products
	},
	state: {
		isLoading: 1,
		bg_class: "bg-test"
	},
	mutations: {
		changeBg(state, bg_class_value) {
			state.bg_class = bg_class_value
		}
	},
	actions: {
		changeBg({commit}, bg_class){
			commit('changeBg', bg_class)
		}

			 
	} 
})

export default store
