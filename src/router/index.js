import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/home'
import member from '@/components/tabbar/member'
import cart from '@/components/tabbar/cart'
import search from '@/components/tabbar/search'
import newslist from '@/components/news/newslist'
import photolist from '@/components/news/photolist'
import newsinfo from '@/components/news/newsinfo'
import photoinfo from '@/components/news/photoinfo'
import goodslist from '@/components/goods/goodslist'
import goodsinfo from '@/components/goods/goodsinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path : '/' ,redirect : 'home'},
    {path: '/home',component: home},
    {path: '/member',component: member},
    {path: '/cart', component: cart},
    {path: '/search',component: search},
    {path: '/newslist', component: newslist},
    {path: '/home/newsinfo/:id',component: newsinfo},
    {path: '/photolist', component: photolist},
    {path: '/home/photoinfo/:id', component : photoinfo },
    {path: '/home/goodslist', component : goodslist },
    {path: '/home/goodsinfo/:id', component : goodsinfo }
  ]
})
