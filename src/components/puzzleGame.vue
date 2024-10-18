<template>
  <Header />
  <div class="p-10 background bg-opacity-90">
    <h1>Puzzle Game</h1>
    <p>Match the ingredients with the recipes!</p>

    <!-- Render the game when data is available -->
    <div
      v-for="recipe in recipes"
      :key="recipe._id"
      class="recipe-card bg-opacity-50"
    >
      <h3 class="pb-3">{{ recipe.name }}</h3>
      <ul class="ingredient-list flex flex-row gap-6 pt-6 pb-5">
        <li v-for="ingredient in ingredients" :key="ingredient._id">
          <button
            @click="checkMatch(recipe._id, ingredient)"
            class="ingredient-button rounded-xl"
          >
            {{ ingredient.name }}
          </button>
        </li>
      </ul>
      <!-- Feedback for each recipe -->
      <p
        v-if="selectedRecipe[recipe._id]"
        class="feedback"
        :class="matchFeedback[recipe._id]"
      >
        {{ feedbackMessage[recipe._id] }}
      </p>
    </div>

    <button @click="resetGame" class="reset-button">Reset Game</button>
  </div>
</template>

<script setup>
import Header from "./molecules/header.vue";
import { ref, computed } from "vue";
import { useGameStore } from "../store/gameStore"; // Import your Pinia store

const store = useGameStore();

// Ensure reactivity
const recipes = computed(() => store.recipes);
const ingredients = computed(() => store.ingredients);

// Track state for each recipe separately
const selectedRecipe = ref({});
const feedbackMessage = ref({});
const matchFeedback = ref({});

// Function to check if ingredient matches recipe
const checkMatch = (recipeId, ingredient) => {
  selectedRecipe.value[recipeId] = true;

  // Find the recipe by ID
  const recipe = recipes.value.find((r) => r._id === recipeId);

  // Check if the ingredient is part of the recipe
  if (recipe.ingredients.includes(ingredient._id)) {
    feedbackMessage.value[recipeId] =
      "Correct! This ingredient matches the recipe.";
    matchFeedback.value[recipeId] = "correct";
  } else {
    feedbackMessage.value[recipeId] = "Incorrect! Try again.";
    matchFeedback.value[recipeId] = "incorrect";
  }

  // Clear selection after a delay
  setTimeout(() => {
    selectedRecipe.value[recipeId] = false;
    feedbackMessage.value[recipeId] = "";
    matchFeedback.value[recipeId] = "";
  }, 3000);
};

// Reset game function
const resetGame = () => {
  selectedRecipe.value = {};
  feedbackMessage.value = {};
  matchFeedback.value = {};
};
</script>

<style scoped>
/* Style remains the same */
.recipe-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.ingredient-list {
  list-style-type: none;
  padding: 0;
}

.ingredient-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin: 4px 0;
}

.ingredient-button:hover {
  background-color: #0056b3;
}

.feedback {
  margin-top: 10px;
  font-weight: bold;
}

.correct {
  color: green;
}

.incorrect {
  color: red;
}

.reset-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reset-button:hover {
  background-color: #ff6b81;
}
.background {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-image: url("/recipes-paradise.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.p-10 {
  position: relative;
  z-index: 1;
}
</style>
