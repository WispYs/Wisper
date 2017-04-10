import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

const List = r => require.ensure([], () => r(require('../page/list/list')), 'list')

const Detail = r => require.ensure([], () => r(require('../page/detail/detail')), 'detail')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
