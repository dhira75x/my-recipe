<template>
  <Header />

  <section class="hero flex items-center justify-between p-10 bg-gray-100">
    <div class="hero-content max-w-lg">
      <h1 class="text-5xl font-bold mb-4">Share Delicious Recipes</h1>
      <p class="text-lg mb-6">
        Share delicious recipes, find the best recipes, explore new cuisines,
        and make every meal special.
      </p>
      <button
        @click="exploreRecipes"
        class="cta-button bg-red-500 text-white py-2 px-4 rounded transition hover:bg-red-600"
      >
        Explore Recipes
      </button>
    </div>
    <img
      src="/landing.jpg"
      alt="Delicious Food"
      class="hero-image max-w-lg rounded-lg"
    />
  </section>
  <div class="landing-page p-10">
    <!-- Search Section -->
    <div class="mb-6 flex items-center justify-between pt-15">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search for recipes..."
        class="w-2/3 p-3 border border-gray-300 rounded"
      />
      <button
        @click="showAddRecipeForm = !showAddRecipeForm"
        class="bg-blue-500 text-white px-4 py-2 rounded ml-4"
      >
        {{ showAddRecipeForm ? "Close" : "Add Recipe" }}
      </button>
    </div>

    <!-- Add Recipe Form -->
    <div v-if="showAddRecipeForm" class="mb-8 p-6 bg-gray-100 rounded">
      <h2 class="text-lg font-bold mb-4">Add New Recipe</h2>
      <form @submit.prevent="addNewRecipe">
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name">Recipe Name</label>
          <input
            v-model="newRecipe.name"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name">Description</label>
          <input
            v-model="newRecipe.description"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name">Total Time</label>
          <input
            v-model="newRecipe.total"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name"
            >Preparation Time</label
          >
          <input
            v-model="newRecipe.preparation"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name"
            >Cooking Time</label
          >
          <input
            v-model="newRecipe.cooking"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="ingredient"
            >Ingredients</label
          >
          <ul class="mx-4 mb-4 list-decimal">
            <li v-for="(ingredient, index) in newInput.ingredient" :key="index">
              <input
                v-model="newInput.ingredient[index]"
                type="text"
                :id="'field' + index"
                :name="'field' + index"
                required
                class="w-full border border-gray-500 p-2 mt-2"
              />
            </li>
          </ul>
          <div class="mr-10 flex flex-row items-end justify-end">
            <div class="my-2 font-bold text-black">+</div>
            <route-link to="">
              <button
                @click="addIngredientField"
                class="my-2 font-bold text-black underline"
              >
                More Ingredients
              </button>
            </route-link>
            <button
              v-if="newInput.ingredient.length > 1 || index > 0"
              @click="removeIngredientField(index)"
              class="ml-4 p-2 text-white bg-[#0072d5] rounded"
              aria-label="Remove"
              type="button"
            >
              <img src="/trash.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="image"
            >Upload Image</label
          >
          <input
            @change="handleImageUpload"
            type="file"
            id="image"
            accept="image/*"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="method"
            >Steps (Method)</label
          >
          <ul class="mx-4 mb-4 list-decimal">
            <li v-for="(step, index) in newInput.method" :key="index">
              <input
                v-model="newInput.method[index]"
                type="text"
                :id="'method' + index"
                required
                class="w-full border border-gray-500 p-2 mt-2"
              />
            </li>
          </ul>
          <div class="flex items-center justify-between">
            <button
              @click="addMethodField"
              type="button"
              class="my-2 font-bold text-black underline"
            >
              More Steps
            </button>
            <button
              v-if="newInput.method.length > 1"
              @click="removeMethodField(newInput.method.length - 1)"
              class="ml-4 p-2 text-white bg-red-500 rounded"
              type="button"
            >
              <img src="/trash.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name">Calories</label>
          <input
            v-model="newRecipe.calories"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name">Carbs</label>
          <input
            v-model="newRecipe.carbs"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name">Protein</label>
          <input
            v-model="newRecipe.protein"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-semibold" for="name">Fat</label>
          <input
            v-model="newRecipe.fat"
            type="text"
            id="name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button type="submit" class="bg-teal-500 text-white px-4 py-2 rounded">
          Add New Recipe
        </button>
      </form>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-10"
    >
      <div
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        class="border border-gray-300 rounded p-4"
      >
        <img
          :src="recipe.image"
          :alt="recipe.name"
          class="recipe-image w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 class="text-xl font-semibold mb-2">{{ recipe.name }}</h3>
        <p class="text-sm text-gray-600 mb-2">
          Ingredients: {{ recipe.ingredients }}
        </p>
        <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
        <button
          @click="viewRecipe(recipe.id)"
          class="view-button text-red-500 border border-red-500 py-1 px-3 rounded transition hover:bg-red-500 hover:text-white"
        >
          View Recipe
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useRecipeStore } from "@/store/recipeStore";
import Header from "./molecules/header.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useRecipeStore();

const searchTerm = ref("");
const showAddRecipeForm = ref(false);

const newRecipe = reactive({
  name: "",
  total: "",
  preparation: "",
  cooking: "",
  calories: "",
  protein: "",
  fat: "",
  carbs: "",
  ingredients: [],
  image: "",
  description: "",
  method: [],
});

const newInput = reactive({
  ingredient: [""],
  method: [""],
});

const filteredRecipes = computed(() => {
  if (!searchTerm.value) return store.recipes;
  return store.recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const addNewRecipe = () => {
  if (
    newRecipe.name.trim() &&
    newRecipe.description.trim() &&
    newRecipe.total.trim() &&
    newRecipe.preparation.trim() &&
    newRecipe.cooking.trim() &&
    newRecipe.calories.trim() &&
    newRecipe.protein.trim() &&
    newRecipe.fat.trim() &&
    newRecipe.carbs.trim() &&
    newInput.ingredient.length > 0 &&
    newInput.ingredient.every((ingredient) => ingredient.trim()) &&
    newInput.method.length > 0 &&
    newInput.method.every((step) => step.trim()) &&
    newRecipe.image.trim()
  ) {
    newRecipe.ingredients = [...newInput.ingredient];
    newRecipe.method = [...newInput.method];

    store.addRecipe({ ...newRecipe });

    newRecipe.name = "";
    newRecipe.description = "";
    newRecipe.total = "";
    newRecipe.preparation = "";
    newRecipe.cooking = "";
    newRecipe.calories = "";
    newRecipe.protein = "";
    newRecipe.fat = "";
    newRecipe.carbs = "";
    newInput.ingredient = [""];
    newInput.method = [""];
    newRecipe.image = "";

    showAddRecipeForm.value = false;
  } else {
    alert("Please fill in all required fields before submitting.");
  }
};

const viewRecipe = (id) => {
  router.push({ name: "view-recipes", params: { id } });
};

const exploreRecipes = () => {
  router.push({ name: "explore-recipes" });
};

const addIngredientField = () => {
  if (newInput.ingredient.length < 5) {
    newInput.ingredient.push("");
  }
};

const removeIngredientField = (index) => {
  if (newInput.ingredient.length > 1) {
    newInput.ingredient.splice(index, 1);
  }
};

const addMethodField = () => {
  if (newInput.method.length < 5) {
    newInput.method.push("");
  }
};

const removeMethodField = (index) => {
  if (newInput.method.length > 1) {
    newInput.method.splice(index, 1);
  }
};

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      newRecipe.image = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>

<style scoped></style>
