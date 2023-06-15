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
      name: '控制台',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '控制台', icon: 'dashboard' }
    }]
  },
  {
    path: '/homeBanner',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'homeBanner',
        component: () => import('@/views/homeBanner/index'),
        meta: { title: '首页标语', icon: 'form' }
      }
    ]
  },
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog',
    name: 'blog',
    meta: { title: '文章管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/blog/blogType',
        name: 'blogType',
        component: () => import('@/views/blogType/index'),
        meta: { title: '文章类型', icon: 'table' }
      },
      {
        path: '/blog/blogList',
        name: 'blogList',
        component: () => import('@/views/blogList/index'),
        meta: { title: '文章列表', icon: 'tree' }
      },
      {
        path: '/blog/addBlog',
        name: 'addBlog',
        component: () => import('@/views/addBlog/index'),
        meta: { title: '添加文章', icon: 'tree' }
      }
    ]
  },

  {
    path: '/project',
    component: Layout,
    redirect: '/project',
    name: 'blog',
    meta: { title: '项目管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/project/addProject',
        name: 'addProject',
        component: () => import('@/views/addProject/index'),
        meta: { title: '添加项目', icon: 'table' }
      },
      {
        path: '/project/projectList',
        name: 'projectList',
        component: () => import('@/views/projectList/index'),
        meta: { title: '项目列表', icon: 'table' }
      }
    ]
  },

  {
    path: '/message',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '留言板',
        component: () => import('@/views/message/index'),
        meta: { title: '留言板', icon: 'form' }
      }
    ]
  },
  {
    path: '/commentManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'commentManage',
        component: () => import('@/views/commentManage/index'),
        meta: { title: '评论管理', icon: 'form' }
      }
    ]
  },
  {
    path: '/aboutMe',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'aboutMe',
        component: () => import('@/views/aboutMe/index'),
        meta: { title: '关于我', icon: 'form' }
      }
    ]
  },
  {
    path: '/setup',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'setup',
        component: () => import('@/views/setUp/index'),
        meta: { title: '设置', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

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
