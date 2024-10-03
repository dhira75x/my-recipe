<template>
  <div class="h-screen flex">
    <!-- Left Side - Image -->
    <div
      class="w-1/2 hidden lg:flex items-center justify-center bg-world bg-center"
    >
           
    </div>

    <!-- Right Side - Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div class="max-w-md w-full space-y-8">
        <h2 class="text-3xl font-bold text-center text-purple-900 animate-fade-in">
          Create an Account
        </h2>
        <form @submit.prevent="handleSubmit">
          <div class="space-y-4 pt-5">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Full Name</label
              >
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <input
                type="password"
                id="password"
                v-model="formData.password"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-900 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
  password: "",
});

const handleSubmit = () => {
  console.log("Form Data:", formData);
};
</script>

<style scoped>
.bg-world {
  background-image: url("/sign-up.jpg");
  background-size: cover;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

</style>
