<template>
  <Header />
  <div
    class="view-recipe md:p-10 bg-gray-50 min-h-screen lg:flex flex-col justify-between place-content-center items-center sm:p-16"
  >
    <section class="recipe-header flex flex-col items-center mb-10">
      <img
        :src="recipe.image"
        :alt="recipe.name"
        class="w-full max-w-lg rounded-lg mb-6 shadow-lg"
      />
      <h1 class="text-4xl font-bold mb-4 font-serif text-purple-900">
        {{ recipe.name }}
      </h1>
      <p class="text-gray-600 text-lg text-center font-serif">
        {{ recipe.description }}
      </p>
    </section>
    <div
      class="rounded-lg md:shadow-md md:pl-24 md:pr-24 md:pt-16 md:pb-16 bg-[#f3f0ef] md:w-[1500px] lg:flex flex-col justify-center place-content-center"
    >
      <!-- Preparation Time -->
      <section class="preparation mb-10 p-14 bg-slate-100 rounded-xl">
        <h2 class="text-2xl font-semibold mb-4">Preparation Time</h2>
        <ol class="list-decimal text-gray-800 text-lg">
          <li class="mt-2">
            <p class="flex gap-2">
              <span class="font-semibold ml-1">Total: </span>{{ recipe.total }}
            </p>
          </li>
          <li class="mt-2">
            <p class="flex gap-2">
              <span class="font-semibold ml-1">Preparation: </span
              >{{ recipe.preparation }}
            </p>
          </li>
          <li class="mt-2">
            <p class="flex gap-2">
              <span class="font-semibold ml-1">Cooking: </span
              >{{ recipe.cooking }}
            </p>
          </li>
        </ol>
      </section>

      <!-- Ingredients Section -->
      <section class="ingredients mb-10 p-14 bg-lime-100 rounded-xl">
        <h2 class="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul class="list-disc list-inside text-gray-800 gap-1 text-lg">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
      </section>

      <!-- Method Section -->
      <section class="method mb-10 p-14 bg-purple-100 rounded-xl">
        <h2 class="text-2xl font-semibold mb-4">Method</h2>
        <ol class="list-decimal list-inside text-gray-800 gap-2 text-lg">
          <li v-for="(step, index) in recipe.method" :key="index">
            {{ step }}
          </li>
        </ol>
      </section>

      <!-- Variations -->
      <section
        class="method mb-10 p-14 bg-blue-100 rounded-xl"
        v-if="recipe.variations && recipe.variations.length"
      >
        <h2 class="text-2xl font-semibold mb-4">Variations</h2>
        <ol class="list-decimal list-inside text-gray-800 gap-4 text-lg">
          <li v-for="(variation, index) in recipe.variations" :key="index">
            <strong>{{ variation.name }}:</strong> {{ variation.description }}
          </li>
        </ol>
      </section>

      <!-- Nutrition Table -->
      <section class="method mb-10 p-14 bg-slate-100 rounded-xl">
        <h2 class="text-2xl font-semibold mb-4">Nutrition</h2>
        <p class="mt-4 text-lg">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <ul class="text-gray-800 pt-6">
          <li>
            <div class="flex">
              <p class="ml-2 text-lg w-full mr-auto">Calories</p>
              <p class="font-bold text-nutmeg text-lg w-full mr-auto">
                {{ recipe.calories }}
              </p>
            </div>
            <div class="w-full h-px bg-light-gray mx-auto mt-3"></div>
          </li>
          <li>
            <div class="flex mt-3">
              <p class="ml-2 text-lg w-full mr-auto">Carbs</p>
              <p class="font-bold text-nutmeg text-lg w-full mr-auto">
                {{ recipe.carbs }}
              </p>
            </div>
            <div class="w-full h-px bg-light-gray mx-auto mt-3"></div>
          </li>
          <li>
            <div class="flex mt-3">
              <p class="ml-2 text-lg w-full mr-auto">Protein</p>
              <p class="font-bold text-nutmeg text-lg w-full mr-auto">
                {{ recipe.protein }}
              </p>
            </div>
            <div class="w-full h-px bg-light-gray mx-auto mt-3"></div>
          </li>
          <li>
            <div class="flex mt-3">
              <p class="ml-2 text-lg w-full mr-auto">Fat</p>
              <p class="font-bold text-nutmeg text-lg w-full mr-auto">
                {{ recipe.fat }}
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
  <!-- Back Button -->
  <div
    class="flex justify-end place-content-end items-end pl-10 pt-10 pb-20 pr-10 space-x-4"
  >
    <button
      @click="saveRecipe"
      class="back-button bg-red-500 text-white py-2 px-4 rounded transition hover:bg-red-600"
    >
      Save Recipe
    </button>
    <button
      @click="goBack"
      class="back-button bg-red-500 text-white py-2 px-4 rounded transition hover:bg-red-600"
    >
      Go Back
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "./molecules/header.vue";
import { useRoute, useRouter } from "vue-router";

const recipes = ref([
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
    calories: "764kcal",
    carbs: "48g",
    protein: "15g",
    fat: "37g",
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    description: "A popular Indian dish with spicy and creamy tomato sauce.",
    image: "/chicken-tikka-masala.jpg",
    total: "Approximately 50 minutes",
    preparation: "Approximately 20 minutes",
    cooking: "Approximately 30 minutes",
    ingredients: [
      "500g chicken breast, cut into bite-sized pieces",
      "1 cup plain yogurt",
      "1 tablespoon lemon juice",
      "2 teaspoons ground cumin",
      "2 teaspoons ground coriander",
      "2 teaspoons paprika",
      "1 teaspoon turmeric",
      "1 teaspoon garam masala",
      "1 teaspoon ground ginger",
      "4 cloves garlic, minced",
      "1 large onion, chopped",
      "400g can of diced tomatoes",
      "1 cup heavy cream",
      "2 tablespoons vegetable oil",
      "1 teaspoon cayenne pepper (optional, for heat)",
      "Salt and pepper to taste",
      "Fresh cilantro, chopped (for garnish)",
      "Steamed rice or naan bread (for serving)",
    ],
    method: [
      "In a bowl, combine yogurt, lemon juice, cumin, coriander, paprika, turmeric, garam masala, and half of the minced garlic. Add chicken pieces, mix well, and marinate for at least 30 minutes (or overnight for better flavor).",
      "Heat vegetable oil in a large skillet over medium heat. Add chopped onion and sauté until soft and golden brown.",
      "Add the remaining garlic and ground ginger, cooking for another 2 minutes until fragrant.",
      "Add the marinated chicken pieces to the skillet. Cook until the chicken is browned on all sides.",
      "Pour in the diced tomatoes, including their juices. Add cayenne pepper if you prefer the dish spicier.",
      "Simmer the mixture for about 15 minutes or until the chicken is fully cooked through.",
      "Stir in the heavy cream and simmer for an additional 5 minutes until the sauce thickens and becomes creamy.",
      "Season with salt and pepper to taste. Garnish with fresh chopped cilantro.",
      "Serve hot with steamed rice or naan bread.",
    ],
    calories: "370kcal",
    carbs: "12g",
    protein: "30g",
    fat: "22g",
  },
  {
    id: 3,
    name: "Vegan Buddha Bowl",
    description:
      "A healthy mix of grains, veggies, and protein for a balanced meal.",
    image: "/vegan-buddha-bowl.webp",
    total: "Approximately 40 minutes",
    preparation: "Approximately 20 minutes",
    cooking: "Approximately 20 minutes",
    ingredients: [
      "1 cup quinoa or brown rice, cooked",
      "1 cup chickpeas, drained and rinsed",
      "1 cup baby spinach or kale",
      "1 cup roasted sweet potatoes, cubed",
      "1/2 cup cucumber, sliced",
      "1/2 cup cherry tomatoes, halved",
      "1/2 avocado, sliced",
      "1/4 cup shredded carrots",
      "2 tablespoons olive oil",
      "1 tablespoon tahini",
      "1 tablespoon lemon juice",
      "1 teaspoon maple syrup or agave",
      "1 teaspoon soy sauce or tamari",
      "1/2 teaspoon ground cumin",
      "Salt and pepper to taste",
      "Sesame seeds and chopped fresh herbs (optional, for garnish)",
    ],
    method: [
      "Preheat the oven to 400°F (200°C). Toss the sweet potato cubes with 1 tablespoon of olive oil, ground cumin, salt, and pepper. Spread on a baking sheet and roast for 20 minutes, or until tender and lightly browned.",
      "While the sweet potatoes are roasting, cook the quinoa or brown rice according to package instructions.",
      "In a small bowl, whisk together the tahini, lemon juice, maple syrup, soy sauce, and 1 tablespoon of olive oil to make the dressing. Adjust the seasoning with salt and pepper.",
      "In a large bowl, toss the chickpeas with a pinch of salt and pepper. You can sauté them in a pan with a little olive oil for added flavor, if desired.",
      "Assemble the Buddha bowl: start with a base of cooked quinoa or brown rice, then layer with roasted sweet potatoes, chickpeas, baby spinach, cucumber, cherry tomatoes, shredded carrots, and avocado slices.",
      "Drizzle the tahini dressing over the bowl. Garnish with sesame seeds and chopped fresh herbs if desired.",
      "Serve immediately and enjoy a balanced, nutritious meal.",
    ],
    calories: "450kcal",
    carbs: "55g",
    protein: "12g",
    fat: "20g",
  },
  {
    id: 4,
    name: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with rich meat sauce.",
    image: "/spaghetti-bolognese.jpg",
    total: "Approximately 1 hour",
    preparation: "Approximately 15 minutes",
    cooking: "Approximately 45 minutes",
    ingredients: [
      "400g spaghetti",
      "2 tablespoons olive oil",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 carrot, finely chopped",
      "1 celery stick, finely chopped",
      "500g ground beef",
      "1/2 cup red wine (optional)",
      "800g canned tomatoes (or passata)",
      "2 tablespoons tomato paste",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "Grated Parmesan cheese (for serving)",
      "Fresh basil leaves (for garnish)",
    ],
    method: [
      "Heat the olive oil in a large pan over medium heat. Add the chopped onion, garlic, carrot, and celery. Cook until the vegetables are softened, about 5-7 minutes.",
      "Add the ground beef to the pan, breaking it up with a spoon. Cook until browned all over.",
      "If using, pour in the red wine and let it simmer for a few minutes until mostly evaporated.",
      "Stir in the canned tomatoes, tomato paste, dried oregano, and dried basil. Season with salt and pepper.",
      "Reduce the heat to low and let the sauce simmer gently for 30-40 minutes, stirring occasionally, until thickened and flavorful.",
      "While the sauce simmers, cook the spaghetti in a large pot of boiling salted water according to the package instructions. Drain and set aside.",
      "Serve the Bolognese sauce over the cooked spaghetti. Top with grated Parmesan cheese and fresh basil leaves.",
    ],
    calories: "580kcal",
    carbs: "75g",
    protein: "25g",
    fat: "20g",
  },
  {
    id: 5,
    name: "Simple Omelette ",
    description:
      "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection.",
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
    calories: "277kcal",
    carbs: "1g",
    protein: "20g",
    fat: "22g",
  },
  {
    id: 6,
    name: "Italian Pasta Salad",
    description:
      "Loaded and refreshing Italian Pasta Salad! Made with tender pasta, smoked salami, fresh veggies and herbs, two types of cheese, and a tangy homemade Italian dressing.",
    image: "/italian-pasta-salad.jpeg",
    total: "Approximately 25 minutes",
    preparation: "Approximately 15 minutes",
    cooking: "Approximately 10 minutes",
    ingredients: [
      "300g pasta (penne or rotini)",
      "100g smoked salami, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 cup black olives, sliced",
      "1/2 red bell pepper, diced",
      "1/2 yellow bell pepper, diced",
      "1 small red onion, thinly sliced",
      "1 lemon",
      "1/2 cup cucumber, diced",
      "1/4 cup fresh parsley, chopped",
      "1/4 cup fresh basil, chopped",
      "1/2 cup mozzarella cheese, cubed",
      "1/2 cup provolone cheese, cubed",
      "Salt and pepper to taste",
    ],
    method: [
      "Cook the pasta in a large pot of salted boiling water until al dente, according to package instructions. Drain and rinse under cold water to cool.",
      "In a large bowl, combine the cooled pasta, smoked salami, cherry tomatoes, black olives, bell peppers, red onion, cucumber, parsley, basil, mozzarella, and provolone cheese.",
      "In a small bowl, whisk together the dressing ingredients: 1/3 cup olive oil, 3 tablespoons red wine vinegar, 1 tablespoon Dijon mustard, 1 teaspoon honey, 1 teaspoon dried oregano, 1/2 teaspoon garlic powder, salt, and pepper.",
      "Pour the dressing over the pasta salad and toss well to coat all ingredients evenly.",
      "Season with additional salt and pepper if needed. Chill in the refrigerator for at least 30 minutes before serving for best flavor.",
    ],
    calories: "350kcal",
    carbs: "40g",
    protein: "15g",
    fat: "15g",
  },
  {
    id: 7,
    name: "Chicken Caesar Pasta Salad",
    description:
      "A delicious blend of two incredible side dishes, pasta salad meets a traditional Caesar salad. It’s brimming with vibrant flavor, has a satisfying blend of textures, and makes a hearty meal or side.",
    image: "/chicken-caesar-pasta-salad.jpeg",
    total: "Approximately 30 minutes",
    preparation: "Approximately 15 minutes",
    cooking: "Approximately 15 minutes",
    ingredients: [
      "300g pasta (rotini or penne)",
      "2 cups cooked chicken breast, diced or shredded",
      "1/2 cup Caesar dressing",
      "5 tbs mayonnaise",
      "2 tbs dijon mustard",
      "2 tbs worcestershire sauce",
      "1 cup cherry tomatoes, halved",
      "1 small lemon, halved and squeezed",
      "1/2 cup grated Parmesan cheese",
      "1/2 cup croutons",
      "Salt & pepper to Taste",
      "1/2 cup croutons",
      "1/4 cup red onion, thinly sliced",
      "1/4 cup black olives, sliced",
      "1/4 cup fresh parsley, chopped",
      "fresh sliced romaine lettuce",
      "1/2 teaspoon garlic powder",
      "Salt and pepper to taste",
      "1 tablespoon olive oil (for cooking chicken if not pre-cooked)",
    ],
    method: [
      "Cook the pasta in a large pot of salted boiling water until al dente, according to package instructions. Drain and rinse under cold water to cool.",
      "If using raw chicken, heat olive oil in a skillet over medium heat. Season chicken with salt, pepper, and garlic powder, then cook until fully cooked and no longer pink in the center. Set aside to cool, then dice or shred.",
      "In a large bowl, combine the cooled pasta, cooked chicken, cherry tomatoes, Parmesan cheese, croutons, red onion, black olives, and fresh parsley.",
      "Pour Caesar dressing over the salad and toss well to coat all ingredients evenly.",
      "Optional add to caesar dressing: Add in mayonnaise, lemon juice, parmesan, dijon mustard, Worcestershire sauce, garlic, and salt and pepper to taste. Whisk to blend.Chill in fridge until ready to use.",
      "Season with additional salt and pepper if needed. Chill in the refrigerator for at least 20 minutes before serving for best flavor.",
    ],
    calories: "420kcal",
    carbs: "45g",
    protein: "25g",
    fat: "18g",
  },
  {
    id: 8,
    name: "Thai Chicken Lettuce Wraps",
    description:
      "Thai Chicken Lettuce Wraps are a flavorful Asian dish made with lean protein, veggies, a sweet and savory sauce, and a variety of satisfying garnishes.",
    image: "/thai-lettuce-wraps.jpg",
    total: "Approximately 25 minutes",
    preparation: "Approximately 10 minutes",
    cooking: "Approximately 15 minutes",
    ingredients: [
      "500g ground chicken",
      "1 tablespoon vegetable oil",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, minced",
      "1 red bell pepper, diced",
      "1 cup water chestnuts, chopped",
      "1 cup mushrooms, finely chopped",
      "3 tablespoons soy sauce",
      "2 tablespoons hoisin sauce",
      "1 tablespoon rice vinegar",
      "1 tablespoon brown sugar",
      "1/2 teaspoon sesame oil",
      "1/4 teaspoon crushed red pepper flakes (optional)",
      "1 bunch fresh cilantro, chopped",
      "1/4 cup chopped peanuts (optional)",
      "1 head of lettuce (e.g., Romaine or Butter Lettuce), leaves separated",
    ],
    method: [
      "Heat the vegetable oil in a large skillet over medium heat.",
      "Add the chopped onion, minced garlic, and minced ginger. Cook until the onion is translucent and fragrant, about 3-4 minutes.",
      "Add the ground chicken to the skillet. Cook, breaking it up with a spoon, until it is fully cooked and no longer pink, about 6-8 minutes.",
      "Stir in the diced red bell pepper, chopped water chestnuts, and chopped mushrooms. Cook for an additional 3-4 minutes until the vegetables are tender.",
      "In a small bowl, mix together the soy sauce, hoisin sauce, rice vinegar, brown sugar, and sesame oil. Pour this mixture over the cooked chicken and vegetables, stirring well to combine.",
      "Cook for another 2 minutes until everything is heated through and the sauce is well distributed.",
      "Stir in the crushed red pepper flakes if using. Remove from heat and stir in chopped cilantro.",
      "Serve the chicken mixture in lettuce leaves. Garnish with chopped peanuts if desired.",
    ],
    calories: "280kcal",
    carbs: "15g",
    protein: "30g",
    fat: "12g",
  },
  {
    id: 9,
    name: "Hot Honey Chicken",
    description:
      "Sweet and spicy Chicken strips that are breaded in crushed cornflakes, then oven-baked until tender. Finished with a prominently flavored fiery hot honey sauce that will leave your taste buds craving more!",
    image: "/hot-honey-chicken.jpg",
    total: "Approximately 45 minutes",
    preparation: "Approximately 15 minutes",
    cooking: "Approximately 30 minutes",
    ingredients: [
      "500g chicken breast, cut into strips",
      "1 cup crushed cornflakes",
      "1/2 cup all-purpose flour",
      "1/2 teaspoon paprika",
      "1/2 teaspoon garlic powder",
      "1/2 teaspoon onion powder",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 large egg, beaten",
      "2 tablespoons vegetable oil",
      "1/4 cup honey",
      "2 tablespoons hot sauce (adjust to taste)",
      "1 tablespoon soy sauce",
      "1 tablespoon apple cider vinegar",
      "1 teaspoon red pepper flakes (optional, for extra heat)",
    ],
    method: [
      "Preheat your oven to 400°F (200°C) and line a baking sheet with parchment paper or lightly grease it.",
      "In a shallow bowl, mix together the crushed cornflakes, flour, paprika, garlic powder, onion powder, salt, and black pepper.",
      "Dip each chicken strip into the beaten egg, then coat thoroughly with the cornflake mixture. Place the breaded chicken strips on the prepared baking sheet.",
      "Drizzle the chicken strips with vegetable oil.",
      "Bake in the preheated oven for 25-30 minutes, or until the chicken is cooked through and crispy on the outside.",
      "While the chicken is baking, prepare the hot honey sauce. In a small saucepan over medium heat, combine honey, hot sauce, soy sauce, and apple cider vinegar. Bring to a simmer and cook for 2-3 minutes, stirring occasionally.",
      "Remove the sauce from heat and stir in red pepper flakes if using.",
      "Once the chicken is done baking, brush or drizzle the hot honey sauce over the chicken strips.",
      "Serve hot, with extra sauce on the side if desired.",
    ],
    calories: "320kcal",
    carbs: "30g",
    protein: "25g",
    fat: "12g",
  },
  {
    id: 10,
    name: "Chicken Alfredo",
    description:
      "A hearty dish made with fettuccine pasta, a creamy Parmesan white sauce, and garlicky pan-seared chicken.",
    image: "/chicken-alfredo.jpg",
    total: "Approximately 35 minutes",
    preparation: "Approximately 10 minutes",
    cooking: "Approximately 25 minutes",
    ingredients: [
      "2 large chicken breasts",
      "Salt and black pepper, to taste",
      "1 tablespoon olive oil",
      "8 oz fettuccine pasta",
      "3 tablespoons unsalted butter",
      "2 cloves garlic, minced",
      "1 cup heavy cream",
      "1 cup grated Parmesan cheese",
      "1/4 cup chopped fresh parsley (optional, for garnish)",
      "1/2 teaspoon dried Italian seasoning (optional)",
      "1/4 teaspoon nutmeg (optional)",
    ],
    method: [
      "Season the chicken breasts with salt and black pepper.",
      "Heat olive oil in a large skillet over medium-high heat. Add the chicken breasts and cook for 6-7 minutes on each side, or until cooked through and golden brown. Remove from the skillet and let rest before slicing into strips.",
      "While the chicken is cooking, bring a large pot of salted water to a boil. Cook the fettuccine pasta according to package instructions until al dente. Drain and set aside.",
      "In the same skillet used for the chicken, reduce the heat to medium and melt the butter. Add the minced garlic and cook for about 1 minute, until fragrant but not browned.",
      "Pour in the heavy cream and bring to a gentle simmer. Cook for 2-3 minutes, stirring occasionally, until the cream has slightly thickened.",
      "Gradually add the grated Parmesan cheese, stirring continuously until the sauce is smooth and creamy. If using, stir in the Italian seasoning and nutmeg.",
      "Add the cooked fettuccine pasta to the sauce and toss to coat evenly.",
      "Slice the cooked chicken breasts and place on top of the pasta. Garnish with chopped parsley if desired.",
      "Serve immediately and enjoy!",
    ],
    calories: "600kcal",
    carbs: "50g",
    protein: "35g",
    fat: "30g",
  },
  {
    id: 11,
    name: "Chicken Alfredo Pizza",
    description:
      "A soft and chewy pizza crust is topped with creamy Alfredo sauce, tender chicken pieces, rich mozzarella, and flavorful bacon. All the best flavors coming together to create something undeniably delicious in pizza form!",
    image: "/chicken-alfredo-pizza.jpg",
    total: "Approximately 45 minutes",
    preparation: "Approximately 15 minutes",
    cooking: "Approximately 30 minutes",
    ingredients: [
      "1 pizza dough (store-bought or homemade)",
      "1 cup Alfredo sauce",
      "1 1/2 cups cooked chicken, shredded or diced",
      "1 cup shredded mozzarella cheese",
      "1/2 cup cooked bacon, crumbled",
      "1/4 cup grated Parmesan cheese",
      "1/4 cup chopped fresh parsley (optional, for garnish)",
      "1 teaspoon olive oil",
      "1/2 teaspoon dried oregano",
      "1/4 teaspoon garlic powder",
      "Salt and black pepper, to taste",
    ],
    method: [
      "Preheat your oven to 475°F (245°C) or as per the instructions for your pizza dough.",
      "Roll out the pizza dough on a floured surface to your desired thickness. Transfer the dough to a pizza stone or baking sheet lined with parchment paper.",
      "Spread the Alfredo sauce evenly over the pizza dough, leaving a small border around the edges for the crust.",
      "Evenly distribute the cooked chicken pieces over the Alfredo sauce.",
      "Sprinkle the shredded mozzarella cheese over the chicken, followed by the crumbled bacon.",
      "Sprinkle the grated Parmesan cheese on top, along with the dried oregano, garlic powder, salt, and black pepper.",
      "Drizzle a small amount of olive oil over the top of the pizza for added flavor and to help with browning.",
      "Bake the pizza in the preheated oven for 15-20 minutes, or until the crust is golden brown and the cheese is bubbly and melted.",
      "Remove from the oven and let it cool for a few minutes before slicing.",
      "Garnish with chopped fresh parsley if desired and serve hot.",
    ],
    calories: "800kcal",
    carbs: "70g",
    protein: "45g",
    fat: "35g",
  },
  {
    id: 13,
    name: "Overnight Oats (5 ways)",
    description:
      "Overnight oats are rich, creamy, and perfect as a hearty and satisfying breakfast on the go. Learn how to make the best overnight oats that you can customize with your favorite toppings and add-ins. Plus, 5 delicious flavor variations!",
    image: "/overnight-oats.jpg",
    total: "5 minutes (plus overnight chilling)",
    preparation: "5 minutes",
    cooking: "Approximately 10 minutes",
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup milk (dairy or non-dairy)",
      "1/4 cup Greek yogurt",
      "1 tablespoon chia seeds (optional, for extra thickness)",
      "1 tablespoon sweetener (honey, maple syrup, or your choice, optional)",
      "1/4 teaspoon vanilla extract (optional)",
      "Toppings and mix-ins of your choice",
    ],
    method: [
      "In a jar or container, combine the rolled oats, milk, Greek yogurt, chia seeds (if using), sweetener, and vanilla extract.",
      "Stir well to ensure everything is combined.",
      "Seal the jar or container with a lid and refrigerate overnight or for at least 4 hours.",
      "In the morning, stir the oats, add a little extra milk if needed, and top with your favorite toppings and mix-ins.",
      "Enjoy cold or warmed up.",
    ],
    variations: [
      {
        name: "1. Banana Nut",
        ingredients: [
          "Sliced banana",
          "Chopped nuts (walnuts or almonds)",
          "Dash of cinnamon",
        ],
        description:
          "Add sliced banana, chopped nuts, and a dash of cinnamon before eating.",
      },
      {
        name: "2. Berry Delight",
        ingredients: ["Fresh or frozen mixed berries", "Chia seeds"],
        description:
          "Add mixed berries and a sprinkle of chia seeds for a burst of antioxidants.",
      },
      {
        name: "3. Chocolate Peanut Butter",
        ingredients: [
          "1 tablespoon peanut butter",
          "1 teaspoon cocoa powder",
          "Chocolate chips (optional)",
        ],
        description:
          "Mix in peanut butter, cocoa powder, and top with chocolate chips for a decadent treat.",
      },
      {
        name: "4. Apple Cinnamon",
        ingredients: [
          "Diced apple",
          "Dash of cinnamon",
          "1 teaspoon maple syrup",
        ],
        description:
          "Add diced apple, a dash of cinnamon, and drizzle with maple syrup.",
      },
      {
        name: "5. Tropical Paradise",
        ingredients: ["Pineapple chunks", "Coconut flakes", "Mango slices"],
        description:
          "Top with pineapple chunks, coconut flakes, and mango slices for a tropical twist.",
      },
    ],
    calories: "250kcal",
    carbs: "40g",
    protein: "10g",
    fat: "6g",
  },
  {
    id: 14,
    name: "Tofu Scramble",
    description:
      "Made with protein-rich tofu, tender crisp sautéed bell peppers, and nutritious fresh spinach. It’s a tasty alternative to scrambled eggs yet equally as delicious!",
    image: "/tofu-scramble.jpg",
    total: "25 minutes",
    preparation: "10 minutes",
    cooking: "Approximately 15 minutes",
    ingredients: [
      "1 block (14 oz) firm tofu, drained and crumbled",
      "1 tablespoon olive oil or other preferred cooking oil",
      "1 small onion, diced",
      "1 red bell pepper, diced",
      "1 yellow bell pepper, diced",
      "2 cups fresh spinach, chopped",
      "2 cloves garlic, minced",
      "1/2 teaspoon turmeric powder",
      "1/2 teaspoon cumin powder",
      "1/4 teaspoon paprika",
      "Salt and black pepper to taste",
      "Optional toppings: sliced avocado, cherry tomatoes, chopped green onions, hot sauce",
    ],
    method: [
      "Prepare the Tofu: Drain and crumble the tofu into small pieces resembling scrambled eggs using your hands or a fork. Set aside.",
      "Sauté Vegetables: In a large skillet, heat olive oil over medium heat. Add diced onion and cook until softened, about 3-4 minutes. Add bell peppers and cook for another 3-4 minutes until they start to soften.",
      "Add Garlic and Spices: Stir in the minced garlic, turmeric, cumin, and paprika. Cook for about 1 minute until fragrant.",
      "Add Tofu: Add the crumbled tofu to the skillet, mixing well to incorporate the spices and vegetables. Cook for 5-7 minutes, stirring occasionally, until the tofu is heated through and slightly golden.",
      "Add Spinach: Add the chopped spinach to the skillet, stirring until wilted, about 2-3 minutes. Season with salt and black pepper to taste.",
      "Serve: Serve hot with optional toppings like sliced avocado, cherry tomatoes, chopped green onions, or a dash of hot sauce.",
    ],
    calories: "180kcal",
    protein: "14g",
    fat: "10g",
    carbs: "15g",
  },
  {
    id: 15,
    name: "Chinese Chicken Salad",
    description:
      "A colorful Asian salad made with crisp cabbage, tender roasted chicken, sweet bell pepper, and a rich and tangy peanut-sesame dressing.",
    image: "/chinese-chicken-salad.jpg",
    total: "Approximately 25 minutes",
    preparation: "Approximately 25 minutes",
    ingredients: [
      "4 cups napa cabbage, thinly sliced",
      "2 cups cooked chicken breast, shredded",
      "1 red bell pepper, thinly sliced",
      "1 carrot, julienned",
      "3 green onions, sliced",
      "1/4 cup chopped fresh cilantro",
      "1/4 cup sliced almonds, toasted",
      "1/4 cup crispy wonton strips (optional)",
      "For the dressing:",
      "3 tablespoons peanut butter",
      "2 tablespoons soy sauce",
      "2 tablespoons rice vinegar",
      "1 tablespoon sesame oil",
      "1 tablespoon honey",
      "1 clove garlic, minced",
      "1 teaspoon grated ginger",
      "1 tablespoon water (to thin, if needed)",
    ],
    method: [
      "In a large bowl, combine napa cabbage, shredded chicken, bell pepper, carrot, green onions, and cilantro.",
      "In a separate small bowl, whisk together the peanut butter, soy sauce, rice vinegar, sesame oil, honey, minced garlic, and grated ginger until smooth. If the dressing is too thick, add water 1 tablespoon at a time until it reaches your desired consistency.",
      "Pour the dressing over the salad ingredients and toss well to combine.",
      "Top the salad with toasted almonds and crispy wonton strips, if using.",
      "Serve immediately, or chill for up to 1 hour for flavors to meld.",
    ],
    calories: "350kcal",
    carbs: "20g",
    protein: "30g",
    fat: "18g",
  },
  {
    id: 16,
    name: "Sheet Pan Eggs",
    description:
      "Sheet Pan Eggs are an incredibly simple, highly adaptable, crowd-friendly recipe made with a few staple ingredients.",
    image: "/sheet-pan-eggs.jpg",
    total: "Approximately 20 minutes",
    preparation: "5 minutes",
    cooking: "15 minutes",
    ingredients: [
      "12 large eggs",
      "1/4 cup milk",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1/2 cup shredded cheese (cheddar, mozzarella, or your choice)",
      "1/2 cup diced bell peppers",
      "1/4 cup chopped green onions",
      "1/4 cup diced tomatoes",
      "1/4 cup chopped spinach (optional)",
      "Non-stick cooking spray or parchment paper",
    ],
    method: [
      "Preheat your oven to 375°F (190°C). Line a rimmed sheet pan with parchment paper or lightly grease with non-stick cooking spray.",
      "In a large bowl, whisk together the eggs, milk, salt, and pepper until well combined.",
      "Pour the egg mixture onto the prepared sheet pan.",
      "Sprinkle the shredded cheese, bell peppers, green onions, tomatoes, and spinach evenly over the egg mixture.",
      "Bake in the preheated oven for 15-18 minutes or until the eggs are set and cooked through.",
      "Let the eggs cool for a few minutes before slicing them into squares or rectangles.",
      "Serve warm as a breakfast dish, in sandwiches, or as a meal prep option for the week.",
    ],
    calories: "150kcal per serving",
    carbs: "2g",
    protein: "10g",
    fat: "10g",
  },
  {
    id: 17,
    name: "Glazed Carrots",
    description:
      "Made with fresh sliced carrots, sweet brown sugar or honey, and a few dabs of rich butter. This recipe is proof that it doesn’t take much to upgrade a simple vegetable and make it beautifully shine, both in taste and presentation!",
    image: "/glazed-carrots.jpg",
    total: "Approximately 20 minutes",
    preparation: "5 minutes",
    cooking: "15 minutes",
    ingredients: [
      "1 pound carrots, peeled and sliced into 1/4-inch rounds",
      "3 tablespoons butter",
      "2 tablespoons brown sugar or honey",
      "1/4 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 tablespoon fresh parsley, chopped (optional for garnish)",
    ],
    method: [
      "Place the sliced carrots in a medium saucepan and add enough water to cover them.",
      "Bring the water to a boil over medium-high heat, then reduce the heat to medium and simmer for about 5-7 minutes, or until the carrots are tender but not mushy. Drain the water.",
      "Return the carrots to the saucepan and add the butter, brown sugar or honey, salt, and black pepper.",
      "Cook over medium heat, stirring occasionally, until the butter is melted and the sugar has dissolved, coating the carrots in a glossy glaze, about 5 minutes.",
      "Remove from heat and garnish with chopped fresh parsley, if desired.",
      "Serve warm as a side dish to your favorite main course.",
    ],
    calories: "120kcal per serving",
    carbs: "15g",
    protein: "1g",
    fat: "7g",
  },
  {
    id: 18,
    name: "Tabbouleh",
    description:
      "This Easy Tabbouleh Recipe is a vibrant, filling side dish! Soft yet chewy bulgur wheat combines with fresh veggies, bright herbs, and a rich olive oil dressing.",
    image: "/tabbouleh.jpg",
    total: "Approximately 30 minutes",
    preparation: "15 minutes",
    cooking: "15 minutes",
    ingredients: [
      "1/2 cup bulgur wheat",
      "1 cup boiling water",
      "1 cup finely chopped parsley",
      "1/2 cup finely chopped mint",
      "1/2 cup diced tomatoes",
      "1/4 cup diced cucumber",
      "1/4 cup finely chopped red onion",
      "1/4 cup fresh lemon juice",
      "1/4 cup extra-virgin olive oil",
      "1 teaspoon salt",
      "1/2 teaspoon black pepper",
    ],
    method: [
      "Place the bulgur wheat in a medium bowl and pour the boiling water over it. Cover the bowl and let it sit for about 15 minutes, or until the bulgur is tender and has absorbed the water. Fluff with a fork.",
      "In a large mixing bowl, combine the chopped parsley, mint, tomatoes, cucumber, and red onion.",
      "Add the cooked bulgur to the bowl with the vegetables and herbs.",
      "In a small bowl, whisk together the lemon juice, olive oil, salt, and black pepper.",
      "Pour the dressing over the bulgur and vegetable mixture. Toss well to combine all the ingredients evenly.",
      "Let the tabbouleh sit for about 10 minutes to allow the flavors to meld. Serve chilled or at room temperature as a side dish or light main.",
    ],
    calories: "150kcal per serving",
    carbs: "20g",
    protein: "3g",
    fat: "7g",
  },
  {
    id: 19,
    name: "Baked Oats (6 Ways)",
    description:
      "This simple recipe is made with whole grain oats blitzed in a blender with a handful of ingredients, then poured into individual ramekins with mix-ins added, and oven baked.",
    image: "/baked-oats.jpg",
    total: "Approximately 30 minutes",
    preparation: "10 minutes",
    cooking: "20 minutes",
    ingredients: [
      "1 cup rolled oats",
      "1/2 cup milk of choice (almond, oat, dairy, etc.)",
      "1 banana, mashed",
      "1 egg",
      "1/2 teaspoon baking powder",
      "1/2 teaspoon vanilla extract",
      "1 tablespoon sweetener of choice (honey, maple syrup, etc.)",
      "Pinch of salt",
    ],
    method: [
      "Preheat your oven to 350°F (175°C) and grease individual ramekins or a baking dish.",
      "In a blender, combine the rolled oats, milk, banana, egg, baking powder, vanilla extract, sweetener, and salt. Blend until the mixture is smooth and resembles a batter.",
      "Pour the batter into prepared ramekins or a baking dish.",
      "Add your desired mix-ins such as chocolate chips, berries, nuts, or spices and gently stir to incorporate.",
      "Bake in the preheated oven for 20 minutes, or until the tops are golden and a toothpick inserted into the center comes out clean.",
      "Allow to cool slightly before serving. Enjoy warm, straight from the oven, or store leftovers in the fridge and reheat as needed.",
    ],
    variations: [
      {
        name: "1. Berry Bliss",
        ingredients: ["Add 1/4 cup of mixed berries"],
        description:
          "Top with mixed berries like strawberries, blackberries etc.",
      },
      {
        name: "2. Chocolate Chip",
        ingredients: ["2 tablespoons of chocolate chips"],
        description: "Top with chocolate chips.",
      },
      {
        name: "3. Nutty Banana",
        ingredients: ["2 tablespoons of walnut", "Cinnamon powder"],
        description:
          "Mix in 2 tablespoons of chopped walnuts and a sprinkle of cinnamon.",
      },
      {
        name: "4. Peanut Butter Swirl",
        ingredients: ["Peanut butter"],
        description: "Add 1 tablespoon of peanut butter to the batter.",
      },
      {
        name: "5. Apple Cinnamon",
        ingredients: ["Apples", "Cinnamon"],
        description: "Stir in 1/4 cup of diced apples and a pinch of cinnamon.",
      },
      {
        name: "6. Coconut Delight",
        ingredients: ["Shredded coconut", "Mixed nuts"],
        description:
          "Mix in 2 tablespoons of shredded coconut and 1 tablespoon of chopped nuts.",
      },
    ],
    calories: "220kcal per serving",
    carbs: "35g",
    protein: "6g",
    fat: "7g",
  },
  {
    id: 20,
    name: "Cherry Tomatoes Pasta",
    description:
      "Made with an abundance of sweet cherry tomatoes, highly aromatic fresh basil, rich silky olive oil, and just enough bold garlic and parmesan cheese.",
    image: "/cherry-tomato-pasta.jpg",
    total: "Approximately 25 minutes",
    preparation: "10 minutes",
    cooking: "15 minutes",
    ingredients: [
      "12 oz pasta (spaghetti or your choice)",
      "2 cups cherry tomatoes, halved",
      "1/4 cup olive oil",
      "3 cloves garlic, thinly sliced",
      "1/4 teaspoon red pepper flakes (optional for heat)",
      "1/4 cup fresh basil leaves, torn",
      "1/2 cup grated parmesan cheese",
      "Salt and black pepper, to taste",
    ],
    method: [
      "Cook pasta according to package instructions in salted water until al dente. Reserve 1 cup of pasta water, then drain the rest.",
      "While the pasta cooks, heat the olive oil in a large skillet over medium heat. Add the garlic and red pepper flakes (if using) and sauté for 1-2 minutes until fragrant but not browned.",
      "Add the cherry tomatoes to the skillet and cook for 5-7 minutes, stirring occasionally, until the tomatoes are soft and begin to burst.",
      "Add the drained pasta to the skillet with the tomatoes, along with a splash of the reserved pasta water to help create a sauce.",
      "Toss everything together, then stir in the torn basil leaves and grated parmesan cheese. Season with salt and black pepper to taste.",
      "Serve immediately, garnished with additional parmesan and basil if desired.",
    ],
    calories: "400kcal per serving",
    carbs: "60g",
    protein: "12g",
    fat: "14g",
  },
  {
    id: 21,
    name: "Creamy Pesto Pasta",
    description:
      "This pasta is coated in a luxurious sauce speckled generously with minced fresh basil, infused with garlic and parmesan, and it’s completely easy to make. It’s like a fusion of creamy Alfredo sauce mingled with fresh pesto pasta.",
    image: "/creamy-pesto-pasta.jpg",
    total: "Approximately 25 minutes",
    preparation: "10 minutes",
    cooking: "15 minutes",
    ingredients: [
      "12 oz pasta (penne, fusilli, or your choice)",
      "1 cup heavy cream",
      "1/2 cup pesto sauce (store-bought or homemade)",
      "1/4 cup grated parmesan cheese",
      "2 cloves garlic, minced",
      "1/4 teaspoon red pepper flakes (optional for heat)",
      "1/4 cup fresh basil, chopped",
      "1 tablespoon olive oil",
      "Salt and black pepper, to taste",
    ],
    method: [
      "Cook pasta according to package instructions in salted water until al dente. Reserve 1 cup of pasta water, then drain the rest.",
      "In a large skillet, heat the olive oil over medium heat. Add the minced garlic and red pepper flakes (if using), and sauté for 1-2 minutes until fragrant.",
      "Pour in the heavy cream and bring to a gentle simmer. Cook for 3-4 minutes, stirring occasionally, until slightly thickened.",
      "Stir in the pesto sauce and grated parmesan cheese, and cook for another 2-3 minutes until the sauce is well combined and creamy.",
      "Add the cooked pasta to the skillet and toss to coat in the sauce. If the sauce is too thick, add a bit of the reserved pasta water until you reach your desired consistency.",
      "Stir in the chopped fresh basil and season with salt and black pepper to taste.",
      "Serve immediately, garnished with additional parmesan cheese and fresh basil if desired.",
    ],
    calories: "500kcal per serving",
    carbs: "55g",
    protein: "12g",
    fat: "26g",
  },
  {
    id: 22,
    name: "Korean Beef Bowls",
    description:
      "These Korean Beef Bowls are so easy to make and taste undeniably delicious! Ground beef is browned in a hot skillet and finished with a simple, yet flavorful sauce.",
    image: "/korean-beef-bowls.jpg",
    total: "Approximately 20 minutes",
    preparation: "5 minutes",
    cooking: "15 minutes",
    ingredients: [
      "1 lb ground beef",
      "1/4 cup soy sauce (low sodium preferred)",
      "1/4 cup brown sugar",
      "2 cloves garlic, minced",
      "1 tablespoon sesame oil",
      "1 teaspoon fresh ginger, grated",
      "1/4 teaspoon red pepper flakes (optional for heat)",
      "1 tablespoon vegetable oil",
      "1 bunch green onions, sliced (reserve some for garnish)",
      "Cooked rice, for serving",
      "Sesame seeds, for garnish",
    ],
    method: [
      "Heat the vegetable oil in a large skillet over medium-high heat.",
      "Add the ground beef and cook, breaking it apart with a spatula, until browned and cooked through, about 5-7 minutes. Drain excess fat if necessary.",
      "In a small bowl, whisk together the soy sauce, brown sugar, minced garlic, sesame oil, grated ginger, and red pepper flakes.",
      "Pour the sauce over the browned beef and stir to coat evenly. Let it simmer for 2-3 minutes until the sauce slightly thickens.",
      "Stir in the sliced green onions (reserving some for garnish) and cook for an additional minute.",
      "Serve the Korean beef over cooked rice and garnish with reserved green onions and sesame seeds.",
    ],
    calories: "400kcal per serving",
    carbs: "20g",
    protein: "25g",
    fat: "22g",
  },
  {
    id: 23,
    name: "Summery Chicken Pasta Salad",
    description:
      "Made with fun mini bowtie pasta, a lemony herb flecked dressing, sharp cheddar, crisp veggies, flavor-rich bacon, and tender rotisserie chicken.",
    image: "/chicken-pasta-salads.jpg",
    total: "Approximately 25 minutes",
    preparation: "10 minutes",
    cooking: "15 minutes",
    ingredients: [
      "8 oz mini bowtie pasta",
      "2 cups rotisserie chicken, shredded",
      "1 cup sharp cheddar cheese, cubed",
      "1 cup cherry tomatoes, halved",
      "1/2 cup cucumber, diced",
      "1/4 cup red onion, finely chopped",
      "1/4 cup fresh parsley, chopped",
      "1/2 cup bacon, cooked and crumbled",
      "1/4 cup olive oil",
      "2 tablespoons fresh lemon juice",
      "1 tablespoon Dijon mustard",
      "1 teaspoon honey",
      "1 clove garlic, minced",
      "Salt and black pepper, to taste",
    ],
    method: [
      "Cook the mini bowtie pasta according to package instructions until al dente. Drain and rinse under cold water to cool.",
      "In a large bowl, combine the cooked pasta, shredded chicken, cheddar cheese, cherry tomatoes, cucumber, red onion, parsley, and crumbled bacon.",
      "In a small bowl, whisk together the olive oil, lemon juice, Dijon mustard, honey, minced garlic, salt, and black pepper to make the dressing.",
      "Pour the dressing over the pasta salad and toss to combine, ensuring all ingredients are well coated.",
      "Serve immediately or chill in the refrigerator for 30 minutes to allow flavors to meld. Enjoy as a light lunch or side dish.",
    ],
    calories: "350kcal per serving",
    carbs: "28g",
    protein: "20g",
    fat: "18g",
  },
  {
    id: 24,
    name: "Couscous Salad",
    description:
      "Simple and refreshing Couscous Salad! It’s brimming with crisp veggies, fresh herbs, tangy feta, and tossed with a vibrant lemon dressing.",
    image: "/couscous-salad.jpg",
    total: "Approximately 20 minutes",
    preparation: "10 minutes",
    cooking: "10 minutes",
    ingredients: [
      "1 cup couscous",
      "1 cup boiling water",
      "1/2 cup cucumber, diced",
      "1/2 cup cherry tomatoes, halved",
      "1/4 cup red bell pepper, diced",
      "1/4 cup red onion, finely chopped",
      "1/4 cup fresh parsley, chopped",
      "1/4 cup fresh mint, chopped",
      "1/4 cup feta cheese, crumbled",
      "1/4 cup olive oil",
      "2 tablespoons fresh lemon juice",
      "1 teaspoon lemon zest",
      "1 clove garlic, minced",
      "Salt and black pepper, to taste",
    ],
    method: [
      "Place the couscous in a large bowl and pour boiling water over it. Cover and let sit for 5-10 minutes until the couscous absorbs the water. Fluff with a fork.",
      "In a large mixing bowl, combine the cooked couscous, cucumber, cherry tomatoes, bell pepper, red onion, parsley, and mint.",
      "In a small bowl, whisk together the olive oil, lemon juice, lemon zest, minced garlic, salt, and black pepper to make the dressing.",
      "Pour the dressing over the couscous mixture and toss to combine.",
      "Add the crumbled feta cheese and gently mix. Adjust seasoning if needed.",
      "Serve immediately or refrigerate for 30 minutes to let the flavors meld. Enjoy as a light meal or side dish.",
    ],
    calories: "220kcal per serving",
    carbs: "30g",
    protein: "6g",
    fat: "10g",
  },
  {
    id: 25,
    name: "Chocolate Shortbread Cookies",
    description:
      "They are crisp and tender, richly chocolatey and buttery, with the perfect balance of sweetness. And when dipped in a dark chocolate finish they become a sophisticated cookie with exceptional flavor!",
    image: "/chocolate-shortbread.jpg",
    total: "Approximately 2 hours",
    preparation: "30 minutes",
    cooking: "16 minutes / Chill - 1 hour",
    ingredients: [
      "1 3/4 cups (248g) all-purpose flour (scoop and level to measure)",
      "6 Tbsp (36g) unsweetened cocoa powder or Dutch process cocoa (sift if clumpy)",
      " 1/4 tsp salt",
      "1 1/4 cups (150g) powdered sugar",
      "1 1/2 tsp vanilla extract",
      "10 oz. semi-sweet chocolate, finely chopped, melted*",
    ],
    method: [
      "In a mixing bowl whisk together flour, cocoa powder, and salt.",
      "In the bowl of an electric stand mixer cream together butter and powdered sugar on low speed until combined. Increase to medium speed and beat until light and fluffy, about 2 minutes.",
      "Scrape down bowl then blend in vanilla extract.",
      "Add flour mixture and blend on fairly low speed until it comes together in clumps (it will look sandy at first) then increase speed slightly and mix until dough comes together.",
      "Knead dough a few times by hand then divide into two equal portions.",
      "Compress and roll each portion into a 5 1/2-inch log. Wrap in parchment paper or plastic wrap and chill 1 hour.",
      "During last 15 minutes of chilling preheat oven to 350 degrees. Line two 18 by 13-inch baking sheets with parchment paper.",
      "Remove one log of dough from fridge and cut into 1/3-inch thick slices. Align on baking sheet spacing 1 1/2-inches apart.",
      "Bake in center of preheated oven until cookies are set, about 11 to 13 minutes.",
      "Cool on pan 10 minutes then transfer to a wire rack, leave parchment paper on pans.",
      "Once cool, working with one cookie at a time dip half into melted chocolate, shake and let excess chocolate run back into bowl (can scrape bottom of cookie along edge of bowl to remove some chocolate so it's not too thick of a layer). Transfer to cookie sheet lined with parchment and let chocolate set.",
      "If desired you can finish with sprinkles but add these shortly after dipping in chocolate before it begins to set an harden. If you used tempered chocolate to dip cookies let the chocolate set at room temperature if you used untempered chocolate let the chocolate coated cookies set in the fridge.",
      "****NOTES****",
      " To melt chocolate you can melt in a double boiler or in the microwave in a microwave safe dish in 30 second intervals at 50% power. Stir well between each until melted and smooth. For chocolate that doesn't bloom follow a tempering method such as this.",
      "For peppermint chocolate shortbread use 1/2 tsp peppermint extract and 1 tsp vanilla extract. Sprinkle melted chocolate finish with crushed candy canes.",
    ],
    calories: "162kcal per serving",
    carbs: "18g",
    protein: "2g",
    fat: "10g",
  },
  {
    id: 26,
    name: "Bulgogi",
    description:
      "it’s made with tender pieces of steak that have been soaked in a flavorful bulgogi marinade sauce, and it’s quickly pan seared in a cast iron skillet in batches until perfectly browned.",
    image: "/bulgogi.jpg",
    total: "Approximately 1 hour 20 minutes",
    preparation: "15 minutes",
    cooking: "5 minutes / Freeze - 1 hour",
    ingredients: [
      "1 1/4 lbs top sirloin steak,* or tenderloin or ribeye",
      "1/3 cup grated pear, or sweet apple",
      "1/3 cup thinly sliced green onions light portion only, reserve sliced greens for serving",
      "1 Tbsp minced garlic (3 cloves)",
      "1/4 cup red bell pepper, diced",
      "2 tsp minced fresh ginger",
      "3 Tbsp soy sauce",
      "1 Tbsp rice wine or mirin",
      "1 Tbsp toasted sesame oil",
      "2 Tbsp granulated sugar",
      "1/2 tsp black pepper",
      "4 tsp vegetable oil",
      "Toasted sesame seeds, for garnish (optional)",
    ],
    method: [
      "Freeze steak for 1 to 2 hours for easier slicing. Slice the steak into long strips (if steak isn't already narrow) about 1 to 1 1/2-inches wide. Then thinly slice beef against the grain about 1/8-inch thick, cut slices into 2-inch pieces.",
      "In a mixing bowl whisk together pear, green onion light portion (1/3 cup), garlic, ginger, soy sauce, rice wine, sesame oil, sugar, and black pepper.",
      "Toss beef with marinade mixture. Cover bowl then transfer to fridge and let steak marinade for at least 1 hour and up to 24 hours.",
      "Heat a cast iron skillet over moderately high heat. Once skillet is just smoking add 2 tsp vegetable oil then carefully tilt pan (using hot pads) to coat bottom surface with oil.",
      "Quickly add half of the steak and spread out even (be sure pieces aren't overlapping or they won't cook). Let sear until browned on bottom about 30 to 60 seconds. Quickly flip pieces and sear on opposite side until browned about 30 to 60 seconds longer.",
      "Transfer beef to a plate. Using a few paper towels that have been balled up and lightly dampened with water wipe skillet clean. Return to moderately high heat and let heat again.",
      "Add remaining 2 tsp vegetable oil and remaining half of beef and repeat cooking process.",
      "Serve steak right away garnished with a few tablespoons of sliced green onion greens and toasted sesame seeds to taste.",
      "****Notes****",
      "Look for top sirloin steak with good fat marbling throughout for the most tender result. Prime grade will be your best bet, I find it at a decent price at Costco.",
      "For a spicier bulgogi you can add 1 tsp red pepper flakes to marinade.",
    ],
    calories: "309kcal per serving",
    carbs: "13g",
    protein: "34g",
    fat: "13g",
  },
  {
    id: 27,
    name: "Chicken Stir Fry",
    description:
      "A tasty chicken dinner packed with nutritious veggies and coated in a tasty stir-fry sauce. Ready in nearly 30 minutes and a great way to pack lots of vegetables in one meal.",
    image: "/chicken-stir-fry.jpg",
    total: "Approximately 35 minutes",
    preparation: "20 minutes",
    cooking: "15 minutes / Freeze - 1 hour",
    ingredients: [
      "2 Tbsp soy sauce",
      "4 tsp cornstarch depending on the serving",
      "3/4 cup low-sodium chicken broth",
      "1 Tbsp oyster sauce",
      "1 tsp toasted sesame oil",
      "1 Tbsp honey or brown sugar",
      "1 lb. boneless skinless chicken breasts*, cut into 1-inch pieces",
      "2 Tbsp vegetable oil or light olive oil",
      "1 1/2 cups sliced carrots (about 3 medium, cut about 1/6-inch thick)",
      "1 small yellow onion, sliced (1 small)",
      "2 1/2 cups broccoli florets, chopped into bite size pieces, rinsed and leave water that clings to broccoli",
      "1 medium bell pepper of each, seeded and sliced into 1 1/2-inch long strips",
      "1 1/2 cups sugar snap peas, sliced into halves if larger",
      "1 Tbsp peeled and finely minced fresh ginger",
      "3 cloves garlic, minced",
    ],
    method: [
      "In a small mixing bowl whisk together soy sauce with cornstarch, then whisk in chicken broth, oyster sauce, sesame oil and honey. Set aside.",
      "Heat 1 Tbsp oil in a non-stick 12-inch skillet (that's deep, or use a saute pan or wok) over medium-high heat.",
      "Dab chicken dry with paper towels, season with a pinch of salt. Add chicken to skillet spacing pieces apart in an even layer.",
      "Cook chicken through, turning halfway through cooking, about 6 minutes total (center should be 165 degrees and should no longer be pink). Transfer to a plate or sheet of foil, leaving oil in skillet.",
      "Add another 1 Tbsp oil to skillet. Add in carrots and onions and saute 4 minutes.",
      "Add in broccoli, bell pepper, peas, ginger and garlic and saute until nearly tender about 4 minutes.",
      "Whisk soy sauce mixture once more, then pour into pan and cook, tossing constantly, until sauce has thickened and veggies are tender, about 1 - 2 minutes. ",
      "Toss in chicken. Season with more soy sauce to taste if desired.",
      "Serve immediately over white or brown rice. If desired sprinkle with red pepper flakes or sesame seeds or drizzle with sriracha.",
      "****Notes****",
      "Boneless skinless chicken thighs will work great too. Add a few extra minutes to cook time as needed.",
      "For a sweeter stir-fry honey or brown sugar can be doubled or even tripled.",
      "You can use other vegetables you may have on hand in this stir-fry. Good options include mushrooms, cabbage, zucchini, green beans, bok choy, baby corn, and bean sprouts. Just remember to add crisper vegetables first with the onions and carrots.",
      "Recipe originally published March 10, 2015. Recipe modified to omit the marinating step to simplify the recipe, also mushrooms have been omitted to cut down on ingredients.",
    ],
    calories: "251kcal per serving",
    carbs: "19g",
    protein: "24g",
    fat: "9g",
  },
  {
    id: 28,
    name: "Ramen Noodle Salad",
    description:
      "A fresh and flavorful salad with such a satisfying crunch! Made with two types of cabbage, thin cut almonds, crisp ramen noodles and a sweet and tangy dressing. ",
    image: "/ramen-noodle-salad.jpg",
    total: "Approximately 26 minutes",
    preparation: "20 minutes",
    cooking: "6 minutes",
    ingredients: [
      "2 (3 oz) pkgs. dry ramen, broken into small pieces,* seasoning packet discarded",
      "1 cup Fisher Sliced Almonds",
      "6 cups thinly sliced green cabbage** (13 oz)",
      "2 cups thinly sliced red cabbage (5 oz)",
      "2 cups matchstick carrots",
      "2/3 cup chopped green onions",
      "*****Dressing*****",
      "1/2 cup light olive oil",
      "1/4 cup rice vinegar",
      "1/4 cup honey (can use more or less to taste)",
      "1 Tbsp peeled and minced fresh ginger",
      "1 tsp minced garlic",
      "1/2 tsp toasted sesame oil",
      "1 Tbsp peeled and finely minced fresh ginger",
      "Salt and freshly ground black pepper, to taste",
    ],
    method: [
      "For the dressing: In a mixing bowl whisk together light olive oil, rice vinegar, honey, ginger, garlic, sesame oil and season with salt and pepper to taste. Refrigerate while preparing salad ingredients.",
      "For the salad: Preheat oven to 400 degrees. Spread almonds and ramen onto a rimmed 18 by 13-inch baking sheet.",
      "Toast in preheated oven 3 minutes, remove from oven and toss mixture and then spread out even. Return to oven and toast until golden brown about 3 - 4 minutes longer. Let cool.",
      "To a large salad bowl add green cabbage, red cabbage, carrots, green onions, and ramen almond mixture.",
      "Stir dressing then pour over salad. Toss well and serve.",
      "****NOTES****",
      "The fastest way to break the ramen is to leave in the package (unopened) and crush with a rolling pin, just be careful not to crush into tiny little bits. For more uniform size you can break it up by hand.",
      "8 cups (1 lb) napa cabbage works great too. If you want a less crunchy salad it's a great option.",
      "I use 3/4 tsp salt and 1/2 tsp pepper (not included in nutrition estimate)",
    ],
    calories: "361kcal per serving",
    carbs: "33g",
    protein: "6g",
    fat: "24g",
  },
  {
    id: 29,
    name: "Hawaiian Fried Rice",
    description:
      " It's a blend of coconut rice with that delicious ham and pineapple combo.",
    image: "/hawaiian-fried-rice.jpg",
    total: "Approximately 35 minutes",
    preparation: "15 minutes",
    cooking: "20 minutes",
    ingredients: [
      "1 1/3 cups jasmine rice, rinsed well and drained well",
      "1 1/4 cups coconut milk",
      "1 1/4 cups coconut water or water",
      "1/4 tsp salt",
      "1 1/2 Tbsp olive oil, divided",
      "1 tsp sesame oil, divided",
      "1 red bell pepper, diced (1 1/4 cups)",
      "1/3 cup green onions, light portion, sliced",
      "2 tsp minced garlic (2 cloves)",
      "2 tsp peeled and minced fresh ginger",
      "2 cups diced ham",
      "2 cups diced fresh pineapple",
      "3 large eggs",
      "1/2 cup green onions, green portion, sliced",
      "3 Tbsp minced fresh cilantro",
      "1 Tbsp soy sauce, or more to taste",
    ],
    method: [
      "In a medium saucepan bring coconut milk, coconut water and salt to a boil over medium-high heat.",
      "Add in rice, cover and reduce heat to low. Let simmer until liquid has been absorbed, about 15 - 18 minutes.",
      "Remove rice from heat and let rest off heat 10 minutes.",
      "While rice is resting, heat 1 Tbsp olive oil and 1/2 tsp sesame oil in 12-inch (and deep) skillet or saute pan over medium-high heat.",
      "Add bell pepper and light green onions to skillet and saute until peppers are tender, about 4 minutes.",
      "Stir in garlic and ginger, then toss in ham and pineapple and let cook until heated through, about 1 minute.",
      "Scoot everything in pan to one far side. Add remaining 1/2 Tbsp olive oil and 1/2 tsp sesame oil to now empty side of skillet.",
      "Add eggs, season lightly with salt and scramble and cook until just set.",
      "Add in rice, green portion of green onions and cilantro and drizzle in soy sauce and toss everything.",
      "Serve warm with sriracha if desired.",
    ],
    calories: "485kcal per serving",
    carbs: "56g",
    protein: "18g",
    fat: "22g",
  },
  {
    id: 30,
    name: "Thai Basil Beef",
    description:
      "s a flavorful meal that’s even better than takeout! Thin pieces of tender steak are seared in a hot skillet, then bright fresh veggies are sautéed and you’ll toss the two together along with a deliciously flavorful sauce.",
    image: "/thai_basil_beef_bowls.jpg",
    total: "Approximately 25 minutes",
    preparation: "15 minutes",
    cooking: "10 minutes",
    ingredients: [
      "1 1/4 cups jasmine rice or long-grain white rice for serving",
      "1 lb top sirloin steak, ribeye steak or flank steak, sliced against the grain into thin strips",
      "1 tsp cornstarch",
      "2 Tbsp + 1 tsp vegetable oil",
      "1 red bell pepper, cored and seeded, diced into 2-inch strips",
      "1/2 large yellow onion, thinly sliced",
      "1 1/2 Tbsp minced garlic",
      "1 cup matchstick carrots",
      "1 cup fresh Thai basil or Italian basil leaves (roughly chop larger leaves), plus more for garnish",
      "Sesame seeds (optional)",
      "****SAUCE****",
      "1 1/2 tsp cornstarch",
      "1/3 cup water",
      "1 1/2 Tbsp fish sauce",
      "1 Tbsp oyster sauce",
      "2 Tbsp packed brown sugar",
      "1 Tbsp fresh lime juice",
      "1 Tbsp Sambal Oelek, or more to taste (optional)",
    ],
    method: [
      "Prepare rice: Cook rice according to directions listed on package.",
      "For the sauce: In a small mixing bowl whisk together soy sauce and cornstarch until smooth. Stir in water, fish sauce, oyster sauce, brown sugar, lime juice and Sambal Oelek if using, set aside.",
      "For the beef: Toss beef with 1 Tbsp oil and 1 tsp cornstarch. Heat 1 Tbsp oil in a large skillet over moderately high heat. Add half of the beef and cook until browned on both sides but still slightly under-cooked in the center. Transfer beef to a plate while leaving oil in skillet and repeat with remaining 1 Tbsp oil and remaining half of the beef.",
      "For the veggies: Reduce heat slightly, add bell pepper, onions and garlic and saute until crisp tender, about 2 - 3 minutes (if needed you can add another 1 tsp of oil to the skillet). Add carrots and whisk sauce mixture once more then pour into skillet. ",
      "Allow sauce to simmer, stirring frequently, until thickened, about 1 minute. Return beef to skillet along with basil leaves, toss until basil has just wilted.",
      "Serve immediately over cooked rice garnished with small basil leaves and sesame seeds if desired.",
    ],
    calories: "500kcal per serving",
    carbs: "61g",
    protein: "30g",
    fat: "13g",
  },
]);

const route = useRoute();
const router = useRouter();
const recipe = computed(() => {
  return (
    recipes.value.find((rec) => rec.id === Number(route.params.id)) ||
    recipes.value[0]
  );
});

const saveRecipe = () => {
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  savedRecipes.push(recipe.value);
  localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  alert("Recipe saved successfully!");
};

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped></style>
