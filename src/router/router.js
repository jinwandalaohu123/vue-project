/* eslint-disable */
const routes=[
  {
    path: '/newtaobao',
    component:() => import('./taobao/newtaobao.vue'),
  },
  {
    path:'/jump',
    component:() => import('./taobao/jump/jump1.vue')
  }
]

export default routes
