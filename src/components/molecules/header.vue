<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="h-8 w-8 bg-white"
              src="/recipe-paradise.svg"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                href="/"
                class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
                >Dashboard</a
              >
              <a
                href="/ingredients"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Ingredients</a
              >
              <a
                href="/recipes"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Recipes</a
              >
              <a
                href="/land-recipes"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Adventure</a
              >
              <a
                href="/blog"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Blog</a
              >
            </div>
          </div>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Notification Icon with Badge -->
          <div class="relative">
            <button
              @click="toggleNotifications"
              class="relative z-10 text-gray-400 hover:text-white"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 22s-8 0-8-5.5 8-10.5 8-10.5 8 5.5 8 10.5z"
                ></path>
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                ></circle>
              </svg>

              <!-- Notification Badge -->
              <span
                v-if="unreadMessages > 0"
                class="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white"
              >
                {{ unreadMessages }}
              </span>
            </button>

            <!-- Dropdown Messages -->
            <div
              v-show="isNotificationsOpen"
              @click.away="isNotificationsOpen = false"
              class="absolute right-0 top-10 mt-2 w-48 overflow-hidden rounded-lg bg-white shadow-xl"
            >
              <div
                v-for="message in notificationMessages"
                :key="message.id"
                class="border-b p-2"
              >
                {{ message.content }}
              </div>
            </div>
          </div>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <button
              @click="toggleProfileDropdown"
              type="button"
              class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>

            <!-- Conditionally render the profile dropdown -->
            <div
              v-show="isProfileDropdownOpen"
              @click.away="isProfileDropdownOpen = false"
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <a
                href="../profile"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a
          href="/"
          class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
          >Dashboard</a
        >
        <a
          href="/ingredients"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Ingredients</a
        >
        <a
          href="/recipes"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Recipes</a
        >
        <a
          href="/land-recipes"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Adventure</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Notification data
const notificationMessages = ref([
  { id: 1, content: "New message 1" },
  { id: 2, content: "New message 2" },
  // ... more notification messages
]);

// State for notification dropdown
const isNotificationsOpen = ref(false);

const toggleNotifications = () => {
  isNotificationsOpen.value = !isNotificationsOpen.value;
};

const isProfileDropdownOpen = ref(false);
const toggleProfileDropdown = () => {
  isProfileDropdownOpen.value = !isProfileDropdownOpen.value;
};

// Dummy data for unread messages badge
const unreadMessages = ref(notificationMessages.value.length);
</script>

<style scoped>
/* Add any additional styling here */
</style>
