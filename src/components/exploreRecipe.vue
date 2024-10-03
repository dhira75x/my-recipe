<template>
  <div class="explore-recipes p-10">
    <div
      @click="goHome"
      class="border flex space-x-2 cursor-pointer border-gray-300 rounded-3xl text-center pr-4 pl-4 pt-2 pb-2 w-24"
    >
      <img src="/left-arrow.svg" alt="" />
      <p class="text-sm">Back</p>
    </div>
    <h1 class="text-4xl font-bold mb-8 pt-8 text-purple-900">
      Explore Recipes
    </h1>
    <div
      class="recipes-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <div
        class="recipe-card border border-gray-300 rounded-lg p-4 hover:shadow-md transition"
        v-for="recipe in recipes"
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const recipes = ref([
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
  {
    id: 4,
    name: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with rich meat sauce.",
    image: "/spaghetti-bolognese.jpg",
  },
  {
    id: 5,
    name: "Simple Omelette",
    description:
      "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection.",
    image: "/image-omelette.jpeg",
  },
  {
    id: 6,
    name: "Italian Pasta Salad",
    description:
      "Loaded and refreshing Italian Pasta Salad! Made with tender pasta, smoked salami, fresh veggies and herbs, two types of cheese, and a tangy homemade Italian dressing.",
    image: "/italian-pasta-salad.jpeg",
  },
  {
    id: 7,
    name: "Chicken Caesar Pasta Salad",
    description:
      "It is a delicious blend of two incredible side dishes, pasta salad meets a traditional green salad. It’s brimming with vibrant flavor, has a satisfying blend of textures.",
    image: "/chicken-caesar-pasta-salad.jpg",
  },
  {
    id: 8,
    name: "Thai Chicken Lettuce Wraps",
    description:
      "Thai Chicken Lettuce Wraps are a flavorful Asian dish made with lean protein, veggies, a sweet and savory sauce and a variety of satisfying garnishes.",
    image: "/thai-lettuce-wraps.jpg",
  },
  {
    id: 9,
    name: "Hot Honey Chicken",
    description:
      "Sweet and spicy Chicken strips that are breaded in crushed cornflakes then oven baked until tender, then they’re finished with a prominently flavored fiery hot honey sauce that will leave your taste buds craving more!",
    image: "/hot-honey-chicken.jpg",
  },
  {
    id: 10,
    name: "Chicken Alfredo",
    description:
      "It’s a hearty dish made with fettuccine pasta, a creamy parmesan white sauce, and garlicky pan seared chicken.",
    image: "/chicken-alfredo.jpg",
  },
  {
    id: 11,
    name: "Chicken Alfredo Pizza",
    description:
      "A soft and chewy pizza crust is topped with creamy alfredo sauce, tender chicken pieces, rich mozzarella, and flavorful bacon. All the best flavors coming together to create something undeniably delicious in pizza form!",
    image: "/chicken-alfredo-pizza.jpg",
  },
  {
    id: 12,
    name: "Avocado Salsa",
    description:
      "Made with creamy avocados, bright tomatoes, crisp onions, herby cilantro and a bright lime dressing. It’s the ultimate tortilla chip dip or main dish topping!",
    image: "/avocado-salsa.jpg",
  },
  {
    id: 13,
    name: "Overnight Oats (5 ways)",
    description:
      "Overnight oats are rich, creamy, and perfect as a hearty and satisfying breakfast on the go. Learn how to make the best overnight oats that you can customize with your favorite toppings and add-ins. Plus, 5 delicious flavor variations!",
    image: "/overnight-oats.jpg",
  },
  {
    id: 14,
    name: "Tofu Scramble",
    description:
      "Made with protein rich tofu, tender crisp sautéed bell peppers, and nutritious fresh spinach. It’s a tasty alternative to scrambled eggs yet I’d dare say equally as delicious!",
    image: "/tofu-scramble.jpg",
  },
  {
    id: 15,
    name: "Chinese Chicken Salad",
    description:
      "A colorful Asian salad made with crisp cabbage, tender roasted chicken, sweet bell pepper, and a rich and tangy peanut-sesame dressing.",
    image: "/chinese-chicken-salad.jpg",
  },
  {
    id: 16,
    name: "Sheet Pan Eggs",
    description:
      "Sheet Pan Eggs are an incredibly simple, highly adaptable, crowd-friendly recipe made with a few staple ingredients.",
    image: "/sheet-pan-eggs.jpg",
  },
  {
    id: 17,
    name: "Glazed Carrots",
    description:
      "Made with fresh sliced carrots, sweet brown sugar or honey and a few dabs of rich butter. This recipe is proof that it doesn’t take much to upgrade a simple vegetable and make it beautifully shine, both in taste and presentation!",
    image: "/glazed-carrots.jpg",
  },
  {
    id: 18,
    name: "Tabbouleh",
    description:
      "This Easy Tabbouleh Recipe is a vibrant, filling side dish! Soft yet chewy bulgur wheat combines with fresh veggies, bright herbs, and a rich olive oil dressing.",
    image: "/tabbouleh.jpg",
  },
  {
    id: 19,
    name: "Baked Oats (6 Ways)",
    description:
      "his simple recipe is made with whole grain oats blitzed in a blender with a handful of ingredients, then poured into individual ramekins with mix-ins added, and oven baked.",
    image: "/baked-oats.jpg",
  },
  {
    id: 20,
    name: "Cherry  Tomatoes Pasta",
    description:
      "Made with an abundance of sweet cherry tomatoes, highly aromatic fresh basil, rich silky olive oil, and a just enough bold garlic and parmesan cheese.",
    image: "/cherry-tomato-pasta.jpg",
  },
  {
    id: 21,
    name: "Creamy Pesto Pasta",
    description:
      "This pasta is coated in a luxurious sauce that’s speckled generously with minced fresh basil, infused with garlic and parmesan, and it’s completely easy to make. It’s like a fusion of creamy Alfredo sauce mingled with fresh pesto pasta.",
    image: "/creamy-pesto-pasta.jpg",
  },
  {
    id: 22,
    name: "Korean Beef Bowls",
    description:
      "These Korean Beef Bowls are so easy to make and taste undeniably delicious! Ground beef is browned in a hot skillet and finished with a simple, yet flavorful sauce.",
    image: "/korean-beef-bowls.jpg",
  },
  {
    id: 23,
    name: "Summery Chicken Pasta Salad",
    description:
      "Made with fun mini bowtie pasta, a lemony herb flecked dressing, sharp cheddar, crisp veggies, flavor rich bacon, and tender rotisserie chicken.",
    image: "/chicken-pasta-salads.jpg",
  },
  {
    id: 24,
    name: "Couscous Salad",
    description:
      "Simple and refreshing Couscous Salad! It’s brimming with crisp veggies, fresh herbs, tangy feta and tossed with a vibrant lemon dressing.",
    image: "/couscous-salad.jpg",
  },
  {
    id: 25,
    name: "Chocolate Shortbread Cookies",
    description:
      "They are crisp and tender, richly chocolatey and buttery, with the perfect balance of sweetness. And when dipped in a dark chocolate finish they become a sophisticated cookie with exceptional flavor!",
    image: "/chocolate-shortbread.jpg",
  },
  {
    id: 26,
    name: "Bulgogi",
    description:
      "it’s made with tender pieces of steak that have been soaked in a flavorful bulgogi marinade sauce, and it’s quickly pan seared in a cast iron skillet in batches until perfectly browned.",
    image: "/bulgogi.jpg",
  },
  {
    id: 27,
    name: "Chicken Stir Fry",
    description:
      "This Chicken Stir-Fry is packed with nutritious veggies and coated in a flavorful stir-fry sauce. It’s easy to make and great way to use up all those veggies in the fridge. I first did this recipe nearly 4 years ago but it’s one of those classics I don’t want you to miss out on so decided it’s worth recreating.",
    image: "/chicken-stir-fry.jpg",
  },
  {
    id: 28,
    name: "Ramen Noodle Salad",
    description:
      "A fresh and flavorful salad with such a satisfying crunch! Made with two types of cabbage, thin cut almonds, crisp, toasted ramen noodles and a sweet and tangy dressing. ",
    image: "/ramen-noodle-salad.jpg",
  },
  {
    id: 29,
    name: "Hawaiian Fried Rice",
    description:
      "A classic fried rice gets a tropical twist including coconut rice, ham, pineapple, bell pepper and vibrant fresh herbs. It’s an exciting summery recipe you’ll want to make all year long!",
    image: "/hawaiian-fried-rice.jpg",
  },
  {
    id: 30,
    name: "Thai Basil Beef",
    description:
      "s a flavorful meal that’s even better than takeout! Thin pieces of tender steak are seared in a hot skillet, then bright fresh veggies are sautéed and you’ll toss the two together along with a deliciously flavorful sauce.",
    image: "/thai_basil_beef_bowls.jpg",
  },
]);

const viewRecipe = (id) => {
  router.push({ name: "view-recipes", params: { id } });
};
// const viewRecipe = (id) => {
//   router.push({ name: "recipe style", params: { id } });
// };

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
/* Scoped CSS is not needed as Tailwind classes are used */
</style>
