// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import 'amfe-flexible'
// import Cube from 'cube-ui'
import {post} from './axios/axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$post = post;

// Vue.use(Cube)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// // import Cube from 'cube-ui'
// import App from './App'
// import router from './router/index.js'
// import 'amfe-flexible'
// import {post} from './axios/axios'
// Vue.prototype.$post = post;
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
//
// Vue.use(VueAwesomeSwiper)
//
// Vue.config.productionTip = false
// // Vue.use(Cube)
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
