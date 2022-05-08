import Vue from 'vue'
// 全局引入
import yumiUi from '../packages';
Vue.use(yumiUi)

// 局部引入
// import { ymLink } from '../packages';
// Vue.use(ymLink)

// cdn 引入
// import { ymLink } from '../lib/index.umd.min.js';
// import '../lib/index.css' // 引入样式
// Vue.use(ymLink)


import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
