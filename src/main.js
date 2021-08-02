import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 使用懒加载插件
import VuelazyLoad from 'vue-lazyload'
// 解决移动端延迟
import FastClick from 'fastclick'
// 自定义插件
import toast from 'components/common/toast'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)
// 安装懒加载插件
Vue.use(VuelazyLoad)
// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

