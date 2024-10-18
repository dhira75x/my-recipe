import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const recipes = ref([
    {
      _id: 1,
      name: "Spaghetti Bolognese",
      ingredients: [1, 2, 3], // Store ingredient IDs
      description: "A classic Italian pasta dish with rich meat sauce.",
      image: "/spaghetti-bolognese.jpg",
    },
    {
      _id: 2,
      name: "Caesar Salad",
      ingredients: [4, 5], // Store ingredient IDs
      description: "A fresh salad with lettuce, croutons, and Caesar dressing.",
      image: "/caesar-salad.jpg",
    },
  ]);

  const ingredients = ref([
    { _id: 1, name: "Pasta" },
    { _id: 2, name: "Tomatoes" },
    { _id: 3, name: "Meat" },
    { _id: 4, name: "Lettuce" },
    { _id: 5, name: "Croutons" },
  ]);

  return { recipes, ingredients };
});
