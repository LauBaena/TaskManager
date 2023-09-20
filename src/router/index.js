import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addTask',
    name: 'addTask',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddTask.vue')
  },
  {
    path: "/modifyTask/:name",
    name: "modifyTask",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ModifyTask.vue"),
    props: (route) => {
      const name = route.params.name;
      return name ? { name } : { name: "" };
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
