import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/homepage'
import Sales from '../components/sales'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/sales',
      name: 'Sales',
      component: Sales
    }
  ]
})
