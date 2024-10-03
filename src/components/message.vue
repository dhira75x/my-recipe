<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-6 text-cyan-600">ReciVoice</h1>

    <p class="pt-1 pb-1">Send a message to to receive swift replies</p>

    <div class="bg-gray-100 rounded-lg p-4 h-[600px] overflow-y-auto mb-4">
      <ul>
        <li
          v-for="(message, index) in messages"
          :key="message.id"
          :class="{
            'text-right': message.sender === 'user',
            'text-left': message.sender === 'admin',
          }"
          class="mb-4"
        >
          <div
            :class="{
              'bg-teal-500 text-white p-3 rounded-lg inline-block':
                message.sender === 'user',
              'bg-gray-300 p-3 rounded-lg inline-block':
                message.sender === 'admin',
            }"
          >
            <p>{{ message.content }}</p>
            <span class="text-sm text-gray-500 block">{{
              message.timestamp
            }}</span>
          </div>
        </li>
      </ul>
    </div>

    <form @submit.prevent="sendMessage" class="flex space-x-4">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type your message..."
        class="flex-grow border-2 border-gray-300 rounded-lg p-2"
      />
      <button
        type="submit"
        class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-violet-600"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Message data with auto-incrementing ID
const messages = ref([
  {
    id: 1,
    sender: "admin",
    content: "Welcome! How can we assist you?",
    timestamp: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    sender: "user",
    content: "I need help with a recipe.",
    timestamp: new Date().toLocaleTimeString(),
  },
]);

// New message input field
const newMessage = ref("");

// Track the next available message ID
let nextMessageId = 3;

// Function to handle sending a new message
const sendMessage = () => {
  if (newMessage.value.trim() === "") {
    return;
  }

  // Add new message to the messages array with a unique ID
  messages.value.push({
    id: nextMessageId++,
    sender: "user",
    content: newMessage.value.trim(),
    timestamp: new Date().toLocaleTimeString(),
  });

  // Clear the input field after sending
  newMessage.value = "";

  // Simulate a reply from admin after a short delay
  setTimeout(() => {
    messages.value.push({
      id: nextMessageId++,
      sender: "admin",
      content: "We are looking into your request. Thank you for reaching out!",
      timestamp: new Date().toLocaleTimeString(),
    });
  }, 1000); // Delay of 1 second to simulate a reply
};
</script>

<style scoped>
/* You can add custom styles for the messaging page here */
</style>
