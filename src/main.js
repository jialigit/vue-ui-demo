import Vue from 'vue/dist/vue.js'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false



Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
new Vue({
 // el: '#app',
  router,
  template: '<App/>',
  components: { App }
  
}).$mount('#app')
