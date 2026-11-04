import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import Results from "../views/Results.vue";
import History from "../views/History.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: Quiz,
  },
  {
    path: "/results",
    name: "results",
    component: Results,
  },
  {
    path: "/history",
    name: "history",
    component: History,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
