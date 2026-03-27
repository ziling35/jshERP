import { UserLayout, TabLayout, RouteView, BlankLayout, PageView } from '@/components/layouts'

/**
 * 走菜单，走权限控制
 * @type {[null,null]}
 */
export const asyncRouterMap = [

  {
    path: '/',
    name: 'dashboard',
    component: TabLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/analysis',
    children: [

    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      }
    ]
  },
  {
    path: '/dashboard',
    component: TabLayout,
    redirect: '/dashboard/analysis',
    children: [
      {
        path: 'analysis',
        name: 'analysis',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Analysis')
      }
    ]
  },
  {
    path: '/channel/order',
    name: 'channelOrder',
    hidden: true,
    meta: { title: '渠道订货端' },
    component: () => import('@/views/channel/ChannelOrder')
  },
  {
    path: '/channel/orders',
    name: 'channelOrders',
    hidden: true,
    meta: { title: '订单中心' },
    component: () => import('@/views/channel/OrderCenter')
  },
  {
    path: '/channel/order-detail',
    name: 'channelOrderDetail',
    hidden: true,
    meta: { title: '订单详情' },
    component: () => import('@/views/channel/OrderDetail')
  },
  {
    path: '/customer',
    name: 'customerPortal',
    component: () => import('@/components/layouts/CustomerLayout'),
    redirect: '/customer/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'customerDashboard',
        meta: { title: '仪表盘' },
        component: () => import('@/views/customer/Dashboard')
      },
      {
        path: 'products',
        name: 'customerProducts',
        meta: { title: '商品浏览' },
        component: () => import('@/views/customer/Products')
      },
      {
        path: 'cart',
        name: 'customerCart',
        meta: { title: '购物车' },
        component: () => import('@/views/customer/Cart')
      },
      {
        path: 'orders',
        name: 'customerOrders',
        meta: { title: '我的订单' },
        component: () => import('@/views/customer/Orders')
      },
      {
        path: 'order/:id',
        name: 'customerOrderDetail',
        meta: { title: '订单详情' },
        component: () => import('@/views/customer/OrderDetail')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
 
]

