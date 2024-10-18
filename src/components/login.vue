<template>
  <div class="h-screen flex">
    <!-- Left Side - Image -->
    <div
      class="w-1/2 hidden lg:flex items-center justify-center bg-world bg-center"
    ></div>

    <!-- Right Side - Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div class="max-w-md w-full space-y-8">
        <h2
          class="text-3xl font-bold text-center text-purple-900 animate-fade-in"
        >
          Login into Account
        </h2>
        <form @submit.prevent="handleLogin">
          <div class="space-y-4 pt-5">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                v-model="email"
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
                v-model="password"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                @click="login"
                type="submit"
                :disabled="loading"
                class="w-full flex flex-col justify-center items-center space-y-4 pt-4 text-slate-100"
              >
                <div
                  class="bg-purple-900 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-2 rounded-lg text-center w-full mx-10"
                >
                  {{ loading ? "Loading..." : "Login" }}
                </div>
              </button>
            </div>
            <div class="pb-14 flex justify-center pt-2">
              <p
                class="text-center cursor-pointer text-md shadow-sm font-extralight font-manrope w-2/3 text-purple-800"
              >
                <span @click="signup">Register</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMainStore } from "../store/userStore";
import { useRouter } from "vue-router";

const store = useMainStore();
const router = useRouter();
const loading = ref(false);
const email = ref("");
const password = ref("");

const handleLogin = async () => {
  await store.dispatch("login", {
    email: email.value,
    password: password.value,
  });
  router.push("/home");
};

const signup = () => {
  router.push({ name: "sign up" });
  console.log("Signing up...");
};
</script>

<style scoped>
.bg-world {
  background-image: url("/login.jpg");
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
