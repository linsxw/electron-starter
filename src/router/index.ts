import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/router/constants.ts'
import { createRouter, createWebHashHistory } from 'vue-router'

const fixedModules = import.meta.glob('./modules/**/*.ts', { eager: true })
// const isHash = import.meta.env.VITE_USE_HASH === 'true'
// 其他固定路由
const defaultRouterList: Array<RouteRecordRaw> = [
  // 首页
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index/index.vue'),
    meta: { title: '登录' },
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' },
  },
  // 重定向
  {
    path: '/redirect',
    name: 'Redirect',
    component: Layout,
    meta: { title: 'Redirect' },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'RedirectPage',
        component: () => import('@/views/redirect/index.vue'),
        meta: { title: 'Redirect', hidden: true },
      },
    ],
  },
]

export const fixedRouterList: Array<RouteRecordRaw> = mapModuleRouterList(fixedModules)

export const allRoutes = [...fixedRouterList, ...defaultRouterList]

// 固定路由模块转换为路由
export function mapModuleRouterList(modules: Record<string, unknown>): Array<RouteRecordRaw> {
  const routerList: Array<RouteRecordRaw> = []
  Object.keys(modules).forEach((key) => {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    const mod = modules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routerList.push(...modList)
  })
  return routerList
}

/**
 * 创建路由对象
 */
export const router = createRouter({
  history: createWebHashHistory('/'),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})

/**
 * 注册路由
 * @param app
 */
export function setupRouter(app: App) {
  app.use(router)
}
