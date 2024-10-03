<template>
    <Header/>
  <main class="min-h-dvh md:flex  md:bg-eggshell p-7">
    <article
      class="bg-white md:my-20 md:py-8 pb-8 md:rounded-xl md:max-w-screen-md"
    >
      <picture> 
      <img
        :src="recipe.image"
        :alt="recipe.name"
        class="w-full max-w-lg rounded-lg mb-6 shadow-lg"
      />
      </picture>
      <div class="px-8 font-outfit text-wenge-brown">
        <h1 class="font-fancy text-4xl mt-8 text-dark-charcoal">
          {{recipe.name}}
        </h1>
        <p class="mt-6">{{ recipe.description }}</p>
        <article class="bg-rose-white mt-6 p-5 rounded-xl">
          <h2 class="text-dark-raspberry text-xl font-semibold ml-2">
            Preparation time
          </h2>
          <ul class="list-disc mt-3 ml-8 text-lg marker:text-dark-raspberry">
            <li class="pl-3">
              <p>
                <span class="font-semibold">Total: </span>{{ recipe.total }}</p>
            </li>
            <li class="mt-3 pl-3">
              <p><span class="font-semibold">Preparation: </span>{{recipe.preparation}}</p>
            </li>
            <li class="mt-3 pl-3">
              <p><span class="font-semibold">Cooking: </span>{{recipe.cooking}}</p>
            </li>
          </ul>
        </article>
        <div class="w-full h-px bg-light-gray mx-auto mt-8"></div>
        <div class="mt-8 p-6 bg-lime-200 rounded-xl">
          <h3 class="font-fancy text-3xl text-nutmeg">Ingredients</h3>
          <ul
            class="list-disc marker:text-nutmeg mt-4 ml-6 text-wenge-brown marker:align-middle"
          >
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient }}
        </li>
          </ul>
        </div>
        <div class="w-full h-px bg-light-gray mx-auto mt-8 border-slate-200 shadow-md border-b"></div>
        <div class="mt-8 border border-slate-100 p-6 bg-purple-200 rounded-xl">
          <h3 class="font-fancy text-3xl text-nutmeg">Instructions</h3>
          <ol
            class="marker:text-nutmeg marker:font-semibold marker:font-outfit list-decimal mt-4 ml-6"
          >
          <li v-for="(step, index) in recipe.method" :key="index">
          {{ step }}
        </li>
          </ol>
        </div>
        <div class="w-full h-px bg-light-gray mx-auto mt-8"></div>
        <div class="mt-8">
          <h3 class="font-fancy text-3xl text-nutmeg">Nutrition</h3>
          <p class="mt-4">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <ul class="mt-6">
            <li>
              <div class="flex">
                <p class="ml-8 text-lg w-full mr-auto">Calories</p>
                <p class="font-bold text-nutmeg text-lg w-full mr-auto">
                  {{recipe.calories}}
                </p>
              </div>
              <div class="w-full h-px bg-light-gray mx-auto mt-3"></div>
            </li>
            <li>
              <div class="flex mt-3">
                <p class="ml-8 text-lg w-full mr-auto">Carbs</p>
                <p class="font-bold text-nutmeg text-lg w-full mr-auto">{{recipe.carbs}}</p>
              </div>
              <div class="w-full h-px bg-light-gray mx-auto mt-3"></div>
            </li>
            <li>
              <div class="flex mt-3">
                <p class="ml-8 text-lg w-full mr-auto">Protein</p>
                <p class="font-bold text-nutmeg text-lg w-full mr-auto">{{ recipe.protein }}</p>
              </div>
              <div class="w-full h-px bg-light-gray mx-auto mt-3"></div>
            </li>
            <li>
              <div class="flex mt-3">
                <p class="ml-8 text-lg w-full mr-auto">Fat</p>
                <p class="font-bold text-nutmeg text-lg w-full mr-auto">{{recipe.fat}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Header from "./molecules/header.vue";
import { useRoute, useRouter } from "vue-router";

const recipe = ref(
  {
  id: 1,
  name: "Spaghetti Carbonara",
  description: "A classic Italian pasta dish with creamy sauce and pancetta.",
  image: "/spaghetti-carbonara.jpg",
  total: "Approximately 60 minutes",
  preparation: "Approximately 20 minutes",
 cooking: "Approximately 30 minutes",
  ingredients: [
    "200g spaghetti",
    "100g pancetta",
    "2 large eggs",
    "50g Pecorino cheese",
    "50g Parmesan cheese",
    "Freshly ground black pepper",
    "Salt",
    "2 cloves of garlic",
  ],
  method: [
    "Cook the spaghetti in salted boiling water until al dente.",
    "Meanwhile, fry the pancetta with the garlic until crispy.",
    "Beat the eggs in a bowl, then mix in the cheeses and pepper.",
    "Drain the spaghetti and add it to the pan with pancetta.",
    "Remove from heat, quickly add the egg mixture, and stir well.",
    "Serve immediately with extra cheese and pepper.",
  ],
  calories:"764kcal",
  carbs:"48g",
  protein:"15g",
  fat:"37g",
},
  {
  id: 5,
  name: "Simple Omelette ",
  description: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection.",
  image: "/image-omelette.jpeg",
  total: "Approximately 10 minutes",
  preparation: "Approximately 5 minutes",
 cooking: "Approximately 5 minutes",
  ingredients: [
    "2-3 large eggs",
    "Salt to Taste",
    "Pepper to Taste",
    "1 tbs of Butter or Oil",
    "10g Parmesan cheese",
    "Diced Vegetables",
    "Shredded Cooked Meat (optional)",
  ],
  method: [
    "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier.",
    "Place a non-stick frying pan over medium heat and add butter or oil..",
    "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.(optional only when filling is required)",
    "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    "Remove from heat.",
    "Serve hot, with additional salt and pepper if needed..",
  ],
  calories:"277kcal",
  carbs:"277kcal",
  protein:"20g",
  fat:"22g",
},
);

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>


<style scoped>
/* Add any component-specific styles here */
</style>
