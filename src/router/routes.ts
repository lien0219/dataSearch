// 常量路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
    name: 'register',
  },
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    redirect: '/retrieval',
    children: [
      {
        path: '/retrieval',
        component: () => import('@/views/retrieval/index.vue'),
        name: 'retrieval',
      },
      {
        path: '/theCharts',
        component: () => import('@/views/theCharts/index.vue'),
        name: 'theCharts',
      },
      {
        path: '/authorLibrary',
        component: () => import('@/views/authorLibrary/index.vue'),
        name: 'authorLibrary',
      },

      {
        path: '/authorLibrary/detail',
        component: () => import('@/views/detail/index.vue'),
        name: 'detail',
      },
      {
        path: '/topicLibrary',
        component: () => import('@/views/topicLibrary/index.vue'),
        name: 'topicLibrary',
      },
      {
        path: '/book',
        component: () => import('@/views/book/index.vue'),
        name: 'book',
      },
      {
        path: '/wordCloudDetail',
        component: () => import('@/views/wordCloudDetail/index.vue'),
        name: 'wordCloudDetail',
      },
      {
        path: '/reader',
        component: () => import('@/views/reader/index.vue'),
        name: 'reader',
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    // 任意路由
    path: '/:pathMatch(.*)*',
    redirect: '404',
    name: 'Any',
  },
]
