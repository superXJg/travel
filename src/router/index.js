import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/city',
      component: () => import('@/pages/city/city')
    },
    {
      path: '/detail/:id',
      component: () => import('@/pages/detail/detail')
    }
  ]
})
