import Vue from 'vue/dist/vue.js'
import router from './router'
import store from './store'
import VueResource      from 'vue-resource'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueResource)

Vue.directive('focus', {
	// 当绑定元素插入到 DOM 中。
	inserted: function(el) {
		// 聚焦元素
		el.focus()
	}
})






Vue.component('togglebutton', {
	props: ['label', 'name'],
	template: `<div class="togglebutton-wrapper" v-bind:class="isactive ? 'togglebutton-checked' : ''">
      <label v-bind:for="name">
        <span class="togglebutton-label">{{ label }}</span>
        <span class="tooglebutton-box"></span>
      </label>
      <input v-bind:id="name" type="checkbox" v-bind:name="name" v-model="isactive" v-on:change="onToogle">
  </div>`,
	model: {
		prop: 'checked',
		event: 'change'
	},
	data: function() {
		return {
			isactive: false
		}
	},
	methods: {
		onToogle: function() {
			this.$emit('clicked', this.isactive)
		},
		
	}
});



new Vue({
	el: '#app',
	router,
	store,
	data: {
		test: 'test for data'
	},
	render: h => h(App)
})
