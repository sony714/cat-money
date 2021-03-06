
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0)
}

if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机浏览以保证浏览效果')
  // const image = document.createElement('img')
  // image.src = 'src/website.png';
  // image.style.position = 'fixed';
  // image.style.left = '50%';
  // image.style.top = '50%';
  // image.style.transform = 'translate(-50%,-50%)'
  // image.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)'
  // document.body.appendChild(image)
}