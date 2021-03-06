import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '控制面板', icon: 'dashboard' }
    }]
  },

  {
    path: '/ModelManager',
    component: Layout,
    redirect: '/ModelManager/MyModel',
    name: 'ModelManager',
    meta: { title: '模型中心', icon: 'el-icon-menu' },
    children: [
      {
        path: 'MyModel',
        name: 'MyModel',
        component: () => import('@/views/ModelManager/MyModel/index'),
        meta: { title: '我的模型' }
      },
      {
        path: 'CreateModel',
        name: 'CreateModel',
        component: () => import('@/views/ModelManager/CreateModel/index'),
        meta: { title: '创建编辑模型' }
      },
      {
        path: 'TrainModel',
        name: 'TrainModel',
        component: () => import('@/views/ModelManager/TrainModel/index'),
        meta: { title: '训练模型' }
      },
      {
        path: 'TestModel',
        name: 'TestModel',
        component: () => import('@/views/ModelManager/TestModel/index'),
        meta: { title: '模型详情与校验' }
      },
    ]
  },

  {
    path: '/DataManager',
    component: Layout,
    redirect: '/DataManager/DataOverview',
    name: 'DataManager',
    meta: { title: '数据服务', icon: 'el-icon-document' },
    children: [
      {
        path: 'DataOverview',
        name: 'DataOverview',
        component: () => import('@/views/DataManager/DataOverview/index'),
        meta: { title: '数据总览' }
      },
      {
        path: 'DatasetCreate',
        name: 'DatasetCreate',
        component: () => import('@/views/DataManager/DatasetCreate/index'),
        meta: { title: '数据集创建' }
      },
      // {
      //   path: 'DataManage',
      //   name: 'DataManage',
      //   component: () => import('@/views/DataManager/DataManage/index'),
      //   meta: { title: '数据管理' }
      // },
    ]
  },

  // {
  //   path: '/FakeAudioGenerate',
  //   component: Layout,
  //   redirect: '/FakeAudioGenerate/RealTimeVoiceCloning',
  //   name: 'FakeAudioGenerate',
  //   meta: { title: '虚假语音生成', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'RealTimeVoiceCloning',
  //       name: 'RealTimeVoiceCloning',
  //       component: () => import('@/views/RealTimeVoiceCloning/index'),
  //       meta: { title: '实时语音生成', icon: 'table' }
  //     },
  //     {
  //       path: 'CycleGAN',
  //       name: 'CycleGAN',
  //       component: () => import('@/views/CycleGAN/index'),
  //       meta: { title: 'CycleGAN', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/FakeAudioDetection',
  //   component: Layout,
  //   redirect: '/FakeAudioDetection/Asvspoof',
  //   name: 'FakeAudioGenerate',
  //   meta: { title: '虚假语音检测', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'Asvspoof',
  //       name: 'Asvspoof',
  //       component: () => import('@/views/Asvspoof/index'),
  //       meta: { title: 'Asvspoof', icon: 'table' }
  //     },
  //     {
  //       path: 'Celebrity',
  //       name: 'Celebrity',
  //       component: () => import('@/views/Celebrity/index'),
  //       meta: { title: 'Celebrity', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
