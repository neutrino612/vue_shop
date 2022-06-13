import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
//导入字体图标
import './assets/fonts/iconfont.css'
//配置请求的根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config=>{
  console.log(config)
    //在config返回之前的，在请求体header中要给它添加一个字段，
  config.headers.Authorization=window.sessionStorage.getItem('token')
    //在最后必须return config   config 是一个请求对象
  return config
})
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
