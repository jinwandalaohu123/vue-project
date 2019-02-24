import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import routes from './router'
Vue.use(Router)
const PostIn = params => axios.post("/user_api/is_login",params)
export default new Router({
  PostIn,
  routes
})
