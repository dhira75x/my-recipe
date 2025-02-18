<template>
  <Header />
  <section class="hero flex items-center justify-between p-8 bg-gray-100">
    <img
      src="/food-blogg.svg"
      alt="Food Blog"
      class="hero-image rounded-lg"
    />
  </section>
  <div class="container mx-auto px-4 pt-10">
    <h1 class="text-3xl font-bold mb-6 text-center place-content-center">
      Food Blogging
    </h1>
    <p class="text-lg font-light mb-6 text-center place-content-center">
      Experience and see food in a whole new prospective
    </p>

    <div class="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search articles..."
        class="border rounded-l-lg p-2 w-1/2"
      />
      <button class="bg-green-600 text-white px-4 py-2 rounded-r-lg">
        Search
      </button>
    </div>

    <div class="flex flex-row w-full gap-8">
      <div class="space-y-4 pt-10 w-8/12">
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="p-4 border rounded-lg shadow-sm flex items-center"
        >
          <img
            :src="blog.image"
            :alt="blog.title"
            class="w-24 h-24 object-cover rounded-lg mr-4"
          />
          <div>
            <h2 class="text-xl font-semibold">{{ blog.title }}</h2>
            <p class="text-gray-500 text-sm">{{ blog.author }} - {{ blog.date }}</p>
            <p class="text-gray-600">{{ blog.description }}</p>
            <a :href="blog.link" class="text-blue-500 hover:text-blue-700"
              >Read more</a
            >
          </div>
        </div>
      </div>
      <div class="space-y-4 pt-10 w-3/12">
        <h1
          class="text-lg font-semibold mb-6 text-gray-700 place-content-center"
        >
          Featured Recipes
        </h1>
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="p-4 border rounded-lg shadow-sm flex items-center"
        >
          <img
            :src="blog.image"
            :alt="blog.title"
            class="w-24 h-24 object-cover rounded-lg mr-4"
          />
          <div>
            <h2 class="text-xl font-semibold">{{ blog.title }}</h2>
            <p class="text-gray-500 text-sm">{{ blog.author }} - {{ blog.date }}</p>
            <p class="text-gray-600">{{ blog.description }}</p>
            <a :href="blog.link" class="text-blue-500 hover:text-blue-700"
              >Read more</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="pt-16 pb-10 pl-16 pr-16">
      <div class="flex justify-center pt-10 space-x-2">
         <button class="px-3 py-2 bg-gray-200 rounded">1</button>
         <button class="px-3 py-2 bg-gray-200 rounded">2</button>
         <button class="px-3 py-2 bg-gray-200 rounded">3</button>
      </div>
    </div>
   
   <div class="p-12">
    <div
      class="mt-6 p-12 rounded-xl text-center text-gray-800 bg-green-600 bg-cover bg-center"
      style="background-image: url('/discover.svg')" 
    >
      <h2 class="text-2xl font-semibold">Deliciousness to your inbox</h2>
      <p class="text-gray-500">Subscribe to get weekly recipes and tips.</p>
      <div class="mt-4 flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          class="border border-gray-500 bg-gray-400 bg-opacity-20 text-black placeholder-gray-300 rounded-l-lg p-2 w-1/2 outline-none"
        />
        <button
          class="bg-green-200 text-green-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
   
   </div>
  </div>
  <footer class="mt-12 bg-gray-200 py-6 text-center text-gray-600">
      © 2024 RecipeVilla. Powered by Vue & Tailwind CSS.
    </footer>
</template>

<script setup>
import Header from "./molecules/header.vue";
const blogs = [
  {
    id: 1,
    title: "Tony Recipes",
    description: "Delicious recipes to your inbox.",
    link: "/blog/tony-recipes",
    image: "/hot-honey-chicken.jpg",
    author: 'Admin', 
    date: 'September 24, 2024',
  },
  {
    id: 2,
    title: "Fair Guide to Searching in Professional Care",
    description: "A comprehensive guide to professional care.",
    link: "/blog/fair-guide",
    image: "/korean-beef-bowls.jpg",
    author: 'Adama Abubakar', 
    date: 'October 19, 2024',
  },
  {
    id: 3,
    title: "Purchase and Write Sequential of Words",
    description: "Learn how to write sequentially.",
    link: "/blog/purchase-write",
    image: "/creamy-pesto-pasta.jpg",
    author: 'Chef Josh', 
    date: 'December 28, 2024',
  },
];
</script>

<style scoped>
/* Add any custom styles here */
</style>
