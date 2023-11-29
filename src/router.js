import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import FirstPage from "./components/FirstPage.vue";
import AddEmployee from "./components/AddEmployee.vue";
import store from "./store";


const routes = [
  {
    path: '/',
    component: LoginPage,
    // meta: { requiresAuth: true }
  },
  {
    path: "/firstpage",
    component: FirstPage,
    // meta: { requiresAuth: true }
  },
  {
    path: '/addemployee',
    component: AddEmployee,
    // meta: { requiresAuth: true }
  },
  // {
  //   path: '/employeedetails',
  //   component: AddEmployee,
  //   // meta: { requiresAuth: true }
  // }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ path: '/' }) // Redirect to the home page if not authenticated
  } else {
    next()
  }
});
export default router;