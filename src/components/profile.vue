<template>
  <div class="pt-10 pl-8">
    <div
      @click="goHome"
      class="border flex space-x-2 cursor-pointer border-gray-300 rounded-3xl text-center pr-4 pl-4 pt-2 pb-2 w-24"
    >
      <img src="/left-arrow.svg" alt="" />
      <p class="text-sm">Back</p>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 py-6 relative">
    <img
      src="/profile1.jpg"
      alt="User Profile"
      class="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-gray-300"
    />

    <h1 class="text-3xl font-bold mb-4">My Recipe Profile</h1>

    <div class="mb-8">
      <h2 class="text-2xl font-semibold">Saved Recipes</h2>
      <ul class="mt-4 space-y-4">
        <li
          v-for="recipe in savedRecipes"
          :key="recipe.id"
          class="bg-gray-100 rounded-lg p-4 shadow flex items-center space-x-4"
        >
          <img
            :src="recipe?.image"
            :alt="recipe?.name"
            class="w-24 h-24 object-cover rounded-md"
          />
          <div>
            <h3 class="text-lg font-bold">{{ recipe?.name }}</h3>
            <p class="text-gray-600">{{ recipe?.description }}</p>
          </div>
          <div
            class="flex flex-row place-content-end items-end place-items-end justify-end"
          >
            <button
              @click="viewRecipe(recipe.id)"
              class="view-button text-red-500 border border-red-500 pl-5 pr-5 pt-1 pb-1 rounded transition hover:bg-red-500 hover:text-white"
            >
              View Recipe
            </button>
          </div>
        </li>
      </ul>
      <p v-if="savedRecipes.length === 0" class="text-gray-500">
        No saved recipes.
      </p>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-semibold">Added Recipes</h2>
      <ul class="mt-4 space-y-4">
        <li
          v-for="recipe in addedRecipes"
          :key="recipe.id"
          class="bg-gray-100 rounded-lg p-4 shadow flex items-center space-x-4"
        >
          <img
            :src="recipe?.image"
            :alt="recipe?.name"
            class="w-24 h-24 object-cover rounded-md"
          />
          <div>
            <h3 class="text-lg font-bold">{{ recipe?.name }}</h3>
            <p class="text-gray-600">{{ recipe?.description }}</p>
          </div>
          <div
            class="flex flex-row place-content-end items-end place-items-end justify-end"
          >
            <button
              @click="viewRecipe(recipe.id)"
              class="view-button text-red-500 border border-red-500 pl-5 pr-5 pt-1 pb-1 rounded transition hover:bg-red-500 hover:text-white"
            >
              View Recipe
            </button>
          </div>
        </li>
      </ul>
      <p v-if="addedRecipes.length === 0" class="text-gray-500">
        No added recipes.
      </p>
    </div>

    <div>
      <h2 class="text-2xl font-semibold">Messages</h2>
      <ul class="mt-4 space-y-4">
        <li
          v-for="message in messages"
          :key="message.id"
          class="bg-gray-100 rounded-lg p-4 shadow"
        >
          <p class="text-teal-400 font-semibold">{{ message.sender }}</p>
          <p class="text-gray-800">{{ message.content }}</p>
          <span class="text-sm text-gray-500">{{ message.date }}</span>
        </li>
      </ul>
      <p v-if="messages.length === 0" class="text-gray-500">No messages.</p>
      <div
        class="flex flex-row place-content-end items-end place-items-end justify-end pt-8"
      >
        <button
          @click="sendMessage"
          class="view-button text-indigo-500 border border-indigo-500 pl-5 pr-5 pt-1 pb-1 rounded transition hover:bg-violet-500 hover:text-white"
        >
          Send Message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Sample data for saved recipes with images
const savedRecipes = ref([
  {
    id: 25,
    name: "Chocolate Shortbread Cookies",
    description:
      "They are crisp and tender, richly chocolatey and buttery, with the perfect balance of sweetness. And when dipped in a dark chocolate finish they become a sophisticated cookie with exceptional flavor!",
    image: "/chocolate-shortbread.jpg",
  },
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with creamy sauce and pancetta.",
    image: "/spaghetti-carbonara.jpg",
  },
]);

// Sample data for added recipes with images
const addedRecipes = ref([
  {
    id: 4,
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta dish.",
    image: "/spaghetti-bolognese.jpg",
  },
  {
    id: 7,
    name: "Chicken Caesar Pasta Salad",
    description:
      "It is a delicious blend of two incredible side dishes, pasta salad meets a traditional green salad. It’s brimming with vibrant flavor, has a satisfying blend of textures.",
    image: "/chicken-caesar-pasta-salad.jpg",
  },
]);

// Sample data for messages
const messages = ref([
  {
    id: 1,
    sender: "Salima Yunus",
    content: "Your recipe has been approved!",
    date: "2024-10-01",
  },
  {
    id: 2,
    sender: "Chef Bibi",
    content: "Don't forget to check your saved recipes!",
    date: "2024-10-02",
  },
]);

const goHome = () => {
  router.push("/");
};
const viewRecipe = (id) => {
  router.push({ name: "view-recipes", params: { id } });
};
const sendMessage = (id) => {
  router.push({ name: "message", params: { id } });
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
