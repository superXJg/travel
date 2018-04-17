import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
})
