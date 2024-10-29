import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import("../pages/public/MainView.vue"), },
  { path: '/about/', component: () => import("../pages/admin/MainView.vue") },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;