import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',
      name: "public-main",
      meta: { layout: "public" },
      component: () => import("../pages/public/MainView.vue"),
    },
    { path: '/admin',
      name: "admin-main",
      meta: { layout: "admin" },
      component: () => import("../pages/admin/MainView.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      meta: { layout: "empty" },
      component: () => import("../pages/NotFound.vue"),
    },
  ],
})

export default router;