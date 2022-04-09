import Vue from 'vue'
import App from './App.vue'

// import VueHtml2Canvas from 'vue-html2canvas'
// Vue.use(VueHtml2Canvas)


// 导入组件库
import vuePoster from '../packages'
// 注册组件库
Vue.use(vuePoster)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')