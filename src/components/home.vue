<template>
  <Header />
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero flex items-center justify-between p-10 bg-gray-100">
      <div class="hero-content max-w-lg">
        <h1 class="text-5xl font-bold mb-4">Discover Delicious Recipes</h1>
        <p class="text-lg mb-6">
          Find the best recipes, explore new cuisines, and make every meal
          special.
        </p>
        <button
          @click="exploreRecipes"
          class="cta-button bg-red-500 text-white py-2 px-4 rounded transition hover:bg-red-600"
        >
          Explore Recipes
        </button>
      </div>
      <img
        src="/hero-image.webp"
        alt="Delicious Food"
        class="hero-image max-w-lg rounded-lg"
      />
    </section>

    <!-- Featured Recipes Section -->
    <section class="featured-recipes text-center p-10">
      <h2 class="text-3xl font-semibold mb-6">Featured Recipes</h2>
      <div
        class="recipes-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <div
          class="recipe-card border border-gray-300 rounded-lg p-4 hover:shadow-md transition"
          v-for="recipe in featuredRecipes"
          :key="recipe.id"
        >
          <img
            :src="recipe.image"
            :alt="recipe.name"
            class="recipe-image w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">{{ recipe.name }}</h3>
          <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
          <button
            @click="viewRecipe(recipe.id)"
            class="view-button text-red-500 border border-red-500 py-1 px-3 rounded transition hover:bg-red-500 hover:text-white"
          >
            View Recipe
          </button>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section bg-red-500 text-white text-center p-10">
      <h2 class="text-3xl font-semibold mb-4">Join Our Recipe Community</h2>
      <p class="mb-6">
        Sign up to save your favorite recipes and get personalized
        recommendations!
      </p>
      <button
        @click="signup"
        class="signup-button bg-white text-red-500 py-2 px-4 rounded transition hover:bg-gray-100"
      >
        Sign Up Now
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./molecules/header.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const featuredRecipes = ref([
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with creamy sauce and pancetta.",
    image: "/spaghetti-carbonara.jpg",
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    description: "A popular Indian dish with spicy and creamy tomato sauce.",
    image: "/chicken-tikka-masala.jpg",
  },
  {
    id: 3,
    name: "Vegan Buddha Bowl",
    description:
      "A healthy mix of grains, veggies, and protein for a balanced meal.",
    image: "/vegan-buddha-bowl.webp",
  },
]);

const exploreRecipes = () => {
  router.push({name: 'explore-recipes'})
};



const viewRecipe = (id) => {
  router.push({ name: 'view-recipes', params: { id } });
};

const signup = () => {
  router.push({ name: 'sign up'});
  console.log("Signing up...");
};
</script>

<style scoped>
/* Scoped CSS is not needed as Tailwind classes are used */
</style>
