import { defineStore } from "pinia";
import router from "../router/index";
import { reactive, computed } from "vue";
import axios from "axios";

// ID generator function
const id = () => "_" + Math.random().toString(36).substr(2, 9);

const storeName = "phariphas-recipe-book-store";

// Initialize state with localStorage or default
const initialState = localStorage.getItem(storeName)
  ? JSON.parse(localStorage.getItem(storeName))
  : {
      ingredients: [],
      recipes: [],
    };

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    // User-related state
    token: localStorage.getItem("token") || null,
    user: null,
    isAuthenticated: false,
    allowedRoles: [],
    isAdmin: false,
    previousRoute: "",

    // Recipe book state
    ingredients: initialState.ingredients,
    recipes: initialState.recipes,
  }),

  actions: {
    // User-related actions
    async login(credentials) {
      const response = await axios.post("/api/auth/login", credentials);
      this.token = response.data.token;
      this.isAuthenticated = true;
      localStorage.setItem("token", this.token);
      const profileResponse = await axios.get("/api/auth/profile", {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      this.user = profileResponse.data;
      this.checkRole();
      this.syncLocalStorage();
    },

    logout() {
      this.isAuthenticated = false;
      this.isAdmin = false;
      this.token = null;
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem(storeName);
      router.push({ name: "login" });
    },

    // checkRole() {
    //   if (
    //     this.user &&
    //     this.user.role.toUpperCase() === "CUSTOMER SUPPORT SUPERVISOR"
    //   ) {
    //     this.isAdmin = true;
    //   }
    // },

    userHasRole(role) {
      return this.user && this.user.role.toLowerCase() === role.toLowerCase();
    },

    // Recipe book actions
    addIngredient(ingredient) {
      if (!ingredient || this.ingredients.some((i) => i.name === ingredient))
        return; // Prevent adding duplicates
      this.ingredients.push({ id: id(), name: ingredient });
      this.syncLocalStorage();
    },

    removeIngredient(ingredient) {
      if (
        this.recipes.some((recipe) =>
          recipe.ingredients.some((i) => i.id === ingredient.id)
        )
      )
        return; // Prevent removal if ingredient is in use
      this.ingredients = this.ingredients.filter((i) => i.id !== ingredient.id);
      this.syncLocalStorage();
    },

    addRecipe(recipe) {
      this.recipes.push({
        id: id(),
        ...recipe,
        ingredients: recipe.ingredients.map((i) => i.id),
      });
      this.syncLocalStorage();
    },

    removeRecipe(recipe) {
      this.recipes = this.recipes.filter((r) => r.id !== recipe.id);
      this.syncLocalStorage();
    },

    // Utility to sync state with localStorage
    syncLocalStorage() {
      localStorage.setItem(
        storeName,
        JSON.stringify({ ingredients: this.ingredients, recipes: this.recipes })
      );
    },

    async fetchRecipes() {
      const response = await axios.get("/api/recipes");
      this.recipes = response.data;
      this.syncLocalStorage();
    },

    async fetchIngredients() {
      const response = await axios.get("/api/ingredients");
      this.ingredients = response.data;
      this.syncLocalStorage();
    },
  },

  getters: {
    sortedIngredients() {
      return this.ingredients.sort((a, b) => a.name.localeCompare(b.name));
    },
    enrichedRecipes() {
      return this.recipes
        .map((recipe) => ({
          ...recipe,
          ingredients: recipe.ingredients.map((ingredientId) =>
            this.ingredients.find((i) => i.id === ingredientId)
          ),
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  },

  persist: {
    storage: localStorage,
    paths: [
      "isAuthenticated",
      "user",
      "token",
      "isAdmin",
      "previousRoute",
      "ingredients",
      "recipes",
    ],
  },
});
