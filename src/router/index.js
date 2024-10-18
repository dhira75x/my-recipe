import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login-page",
      component: LoginPage,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../components/home.vue"),
    },
    {
      path: "/ingredients",
      name: "ingredients",
      component: () => import("../components/ingredients.vue"),
    },
    {
      path: "/recipes",
      name: "recipes",
      component: () => import("../components/recipes.vue"),
    },
    {
      path: "/puzzle",
      name: "puzzle-up",
      component: () => import("../components/puzzleGame.vue"),
    },
    {
      path: "/recipes/:id",
      name: "view-recipes",
      component: () => import("../components/viewRecipe.vue"),
    },
    {
      path: "/explore-recipes",
      name: "explore-recipes",
      component: () => import("../components/exploreRecipe.vue"),
    },
    {
      path: "/land-recipes",
      name: "land-recipes",
      component: () => import("../components/recipeLanding.vue"),
    },
    {
      path: "/sign-up",
      name: "sign up",
      component: () => import("../components/SignUp.vue"),
    },
    {
      path: "/recipe-style",
      name: "recipe style",
      component: () => import("../components/recipeStyle.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../components/profile.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../components/message.vue"),
    },
  ],
});

export default router;
