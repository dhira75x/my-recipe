<template>
  <Header />

  <section class="hero flex items-center justify-between p-10 bg-gray-100">
    <div class="hero-content max-w-lg">
      <h1 class="text-5xl font-bold mb-4">Ingredients</h1>
      <p class="text-lg mb-6">
        "Discover, Learn, and Elevate Your Cooking with the Right Ingredients!"
      </p>
      <p class="text-lg mb-6 text-purple-900 font-serif font-light">
        "Explore our comprehensive ingredients page where you'll find a diverse
        collection of essential cooking components, their uses, and the dishes
        that showcase them best. Whether you're a seasoned chef or just starting
        your culinary journey, this guide will inspire you to experiment with
        new flavors, enhance your recipes, and bring out the best in every meal.
        Dive into the world of ingredients and unlock the secrets to delicious,
        nutritious, and beautifully crafted dishes."
      </p>
    </div>
    <img
      src="/cooking-ingredients.webp"
      alt="Delicious Food"
      class="hero-image max-w-lg rounded-lg"
    />
  </section>

  <!-- Ingredients list -->
  <div class="p-8 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Ingredients List</h1>

    <!-- Display Ingredients -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(ingredient, index) in ingredients"
        :key="index"
        class="p-4 bg-white shadow-md rounded-lg"
      >
        <h2 class="text-xl font-semibold mb-2">{{ ingredient.name }}</h2>
        <img
          :src="ingredient.image"
          :alt="ingredient.name"
          class="mb-2 rounded-lg"
        />
        <p class="text-gray-700 mb-2">
          <span class="font-semibold">Uses:</span> {{ ingredient.uses }}
        </p>
        <p class="text-gray-700">
          <span class="font-semibold">Examples of Dishes:</span>
          {{ ingredient.examples }}
        </p>
      </div>
    </div>

    <!-- Button to Add New Ingredient -->
    <div class="flex justify-end place-content-end items-end pt-10">
      <button
        @click="showForm = true"
        class="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Add Ingredient
      </button>
    </div>

    <!-- Popup Form -->
    <div
      v-if="showForm"
      class="fixed left-0 top-0 z-50 grid h-screen w-screen place-items-center overflow-y-scroll bg-primary-black bg-opacity-30 px-40 py-24"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-full">
        <h2 class="text-2xl font-semibold mb-4">Add New Ingredient</h2>
        <form @submit.prevent="addIngredient">
          <div class="mb-4">
            <label class="block mb-2 font-semibold" for="name"
              >Ingredient Name</label
            >
            <input
              v-model="newIngredient.name"
              type="text"
              id="name"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-semibold" for="uses">Uses</label>
            <textarea
              v-model="newIngredient.uses"
              id="uses"
              required
              class="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-semibold" for="examples"
              >Examples of Dishes</label
            >
            <input
              v-model="newIngredient.examples"
              type="text"
              id="examples"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-semibold" for="image"
              >Upload Image</label
            >
            <input
              type="file"
              id="image"
              @change="onImageSelected"
              accept="image/*"
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div class="flex justify-end space-x-5 p-10">
            <button
              type="button"
              @click="showForm = false"
              class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./molecules/header.vue";

// Ingredients List
const ingredients = ref([
  {
    name: "Garlic",
    image: "/garlic.jpg",
    uses: "Adds flavor and aroma",
    examples: "Garlic Bread, Pasta, Roasted Chicken",
  },
  {
    name: "Tomato",
    image: "/tomatoes.jpg",
    uses: "Used in sauces, salads, and soups",
    examples: "Tomato Soup, Salad, Spaghetti",
  },
  {
    name: "Ginger",
    image: "/ginger.jpg",
    uses: "Used in sauces, salads, and soups",
    examples: "Tomato Soup, Salad, Spaghetti",
  },
  {
    name: "Habanero Pepper",
    image: "/habanero.jpg",
    uses: "Used in salsas and hot sauces, marinades, spicy dishes, chili and curries, and pickling",
    examples: "Habanero BBQ Sauce, Habanero Salsa Verde, Habanero Chicken Soup",
  },
  {
    name: "Soy Sauce",
    image: "/soy-sauce.webp",
    uses: "Used in  a dipping sauce , salt flavor in cooking, flavoring marinades, condiment, and sauce in salads, etc.",
    examples:
      "Tuna Noodle Casserole,  Chicken Nuggets, Spiced-Honey Glazed Chicken Wings , etc",
  },
]);

// Popup form logic
const showForm = ref(false);
const newIngredient = ref({
  name: "",
  uses: "",
  examples: "",
  image: "",
});

// Image handling function
function onImageSelected(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      newIngredient.value.image = reader.result; // Store base64 image URL
    };
    reader.readAsDataURL(file);
  }
}

// Add new ingredient to the list
function addIngredient() {
  if (
    newIngredient.value.name &&
    newIngredient.value.uses &&
    newIngredient.value.examples &&
    newIngredient.value.image
  ) {
    ingredients.value.push({ ...newIngredient.value });

    newIngredient.value.name = "";
    newIngredient.value.uses = "";
    newIngredient.value.examples = "";
    newIngredient.value.image = "";

    // Hide the form
    showForm.value = false;
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
