<template>
  <Header />
  <section class="hero flex items-center justify-between p-10 bg-gray-100">
    <div class="hero-content max-w-lg">
      <div class="pb-12 pt-5">
        <button
          class="text-purple-800 border border-purple-700 pl-6 pr-6 pt-3 pb-3 rounded-md"
          @click="puzzle"
        >
          Puzzle Game
        </button>
      </div>
      <h1 class="text-5xl font-bold mb-4">
        Play a game of Recipes keep yourself, entertained and as you dive into
        the world of recipes
      </h1>
      <p class="text-lg mb-6 text-purple-950">
        "Discover the colorful trends in cooking!"
      </p>
    </div>
    <img
      src="/recipes.jpeg"
      alt="Delicious Food"
      class="hero-image max-w-lg rounded-lg"
    />
  </section>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-50"
  >
    <h1 class="text-4xl font-bold mb-6 text-purple-700">Jigsaw Puzzle Game</h1>

    <!-- Puzzle grid -->
    <div class="grid grid-cols-3 gap-2 mb-8">
      <div
        v-for="(piece, index) in shuffledPieces"
        :key="index"
        :style="pieceStyle(piece)"
        class="relative border-2 border-gray-300"
        draggable="true"
        @dragstart="startDrag(index)"
        @dragover.prevent
        @drop="dropPiece(index)"
      ></div>
    </div>

    <!-- Check result button -->
    <button
      @click="checkPuzzle"
      class="bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-700"
    >
      Check Puzzle
    </button>

    <!-- Result messages -->
    <p v-if="isCorrect" class="mt-4 text-lg text-green-600">
      Congratulations! You solved the puzzle!
    </p>
    <p v-else-if="isChecked && !isCorrect" class="mt-4 text-lg text-red-600">
      The puzzle isn't correct yet. Keep trying!
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./molecules/header.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
// Image path and grid setup
const imageURL = "/ginger.jpg"; // Accessing the image from the public folder
const gridSize = 3; // 5x5 grid
const pieceSize = 80; // Adjusted size of each piece in pixels for a 5x5 grid

// Generate an array of pieces based on grid size (0 to 24 for 5x5 grid)
const originalPieces = Array.from(
  { length: gridSize * gridSize },
  (_, index) => index
);
const shuffledPieces = ref([...originalPieces].sort(() => Math.random() - 0.5)); // Shuffle the pieces

// State for dragging pieces
let draggedIndex = null;

// Function to generate styles for each piece based on its position in the image
const pieceStyle = (piece) => {
  const row = Math.floor(piece / gridSize);
  const col = piece % gridSize;
  return {
    width: `${pieceSize}px`,
    height: `${pieceSize}px`,
    backgroundImage: `url(${imageURL})`,
    backgroundPosition: `-${col * pieceSize}px -${row * pieceSize}px`,
    backgroundSize: `${gridSize * pieceSize}px ${gridSize * pieceSize}px`,
  };
};

// Function to handle drag start
const startDrag = (index) => {
  draggedIndex = index;
};

// Function to handle dropping a piece
const dropPiece = (index) => {
  if (draggedIndex !== null) {
    // Swap the pieces
    const temp = shuffledPieces.value[index];
    shuffledPieces.value[index] = shuffledPieces.value[draggedIndex];
    shuffledPieces.value[draggedIndex] = temp;
    draggedIndex = null;
  }
};
const puzzle = () => {
  router.push({ name: "puzzle-up" });
};

// State for puzzle check
const isCorrect = ref(false);
const isChecked = ref(false);

// Function to check if the puzzle is solved correctly
const checkPuzzle = () => {
  isChecked.value = true;

  // Ensure the arrays are properly compared
  isCorrect.value = shuffledPieces.value.every((piece, index) => {
    return piece === originalPieces[index];
  });

  if (isCorrect.value) {
    console.log("Puzzle is solved correctly!");
  } else {
    console.log("Puzzle is incorrect. Keep trying!");
  }
};
</script>

<style scoped>
/* Basic styles for puzzle layout */
.grid {
  display: grid;
}
div[draggable="true"] {
  cursor: grab;
}
div[draggable="true"]:active {
  cursor: grabbing;
}
</style>
