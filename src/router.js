import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home/Home')
    },
    {
      path: '/stat',
      name: 'stat',
      component: () => import('./views/stat/Stat')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/my/My')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/Login')
    },
    {
      path: '/modify',
      name: 'modify',
      component: () => import('./views/my/Modify')
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: () => import('./views/my/Suggest')
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
})
