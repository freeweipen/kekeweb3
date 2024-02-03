//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [

  {
   
    path: '/',
    component: () => import('@/views/html/index.vue'),
    name: 'index',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
   
  },

]
