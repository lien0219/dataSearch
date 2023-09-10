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
    path: '/earth',
    component: () => import('@/views/earth/index.vue'),
    name: 'earth',
  },
  {
    path: '/panorama',
    component: () => import('@/views/three/panorama/index.vue'),
    name: 'panorama',
  },
  {
    path: '/model',
    component: () => import('@/views/three/model/index.vue'),
    name: 'model',
  },
  {
    path: '/modelInteraction',
    component: () => import('@/views/three/modelInteraction/index.vue'),
    name: 'modelInteraction',
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
      {
        path: '/screen',
        component: () => import('@/views/screen/index.vue'),
        name: 'screen',
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
