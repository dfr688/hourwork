import Vue from 'vue'
import Router from 'vue-router'

// 解决vue router 报错： Uncaught (in promise) 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
      path: '/subsidy',
      name: 'subsidy',
      component: () => import('./views/stat/Subsidy')
    },
    {
      path: '/deduction',
      name: 'deduction',
      component: () => import('./views/stat/Deduction')
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
})
