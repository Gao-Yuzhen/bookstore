import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Login from "@/components/pages/Login.vue";
import Register from"@/components/pages/Register.vue";
import BookDetail from"@/components/pages/BookDetail.vue";
import ShopCart from"@/components/pages/ShopCart.vue";
import Collect from"@/components/pages/Collect.vue";
import BookPage from"@/components/pages/BookPage.vue";
import Order from"@/components/pages/Order.vue";
import Store from"@/components/pages/Store.vue";

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: "/login",
      name:'Login',
      component: Login
    },
    {
      path: '/', 
      redirect: '/home' 
    },
    {
      path: "/register",
      name:'Register',
      component: Register
    },
    {
      path: "/detail",
      name:'BookDetail',
      component: BookDetail
    },
    {
      path: "/shoppingCart",
      name:'ShopCart',
      component: ShopCart
    },
    {
      path: "/myFavorite",
      name:'Collect',
      component: Collect
    },
    {
      path: "/book",
      name:'BookPage',
      component: BookPage
    },
    {
      path: "/myOrder",
      name:'Order',
      component: Order
    },
    {
      path: "/store",
      name:'Store',
      component: Store
    }


  ]
})
