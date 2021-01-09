import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index'
import Category from '../view/category'
import Detail from '../view/detail'
import Shopcart from '../view/shopcart'
import Order from '../view/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category/:id?',
      name: 'Category',
      component: Category
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
