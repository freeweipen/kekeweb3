//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [

  {
   
    path: '/',
    component: () => import('@/views/page/index.vue'),
    name: 'index',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
   
  },

  {
   
    path: '/login',
    component: () => import('@/views/page/login.vue'),
    name: 'login',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
   
  },

  {
   
    path: '/register',
    component: () => import('@/views/page/register.vue'),
    name: 'register',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
   
  },

  {
   
    path: '/paymentvip',
    component: () => import('@/views/page/paymentvip.vue'),
    name: 'paymentvip',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
   
  },





  {
   
    path: '/',
    component: () => import('@/views/page/index.vue'),
    name: 'index',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
   
  },

  
  {
   
    path: '/sign-in',
    component: () => import('@/views/html/sign-in.vue'),
    name: 'sign-in',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
   
  },


]
