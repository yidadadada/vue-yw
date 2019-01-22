// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from '../node_modules/axios/dist/axios'
axios.defaults.baseURL = 'http://localhost:5000/'
 
import moment from 'moment'
  // 定义时间过滤器
Vue.filter('datefmt',function(data, arg ='YYYY-MM-DD hh:mm:ss'){
 return  moment(data).format(arg)
})

Vue.prototype.$http = axios
import 'animate.css/animate.css'

import { NavBar,Tabbar, TabbarItem ,Swipe, SwipeItem,Lazyload,Row, Col ,List,Card, Button,Tab, Tabs ,Stepper} from 'vant';
Vue
.use(NavBar)
.use(Tabbar).use(TabbarItem)
.use(Swipe).use(SwipeItem)
.use(Lazyload)
.use(Row).use(Col)
.use(List)
.use(Card)
.use(Button)
.use(Tab).use(Tabs)
.use(Stepper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
