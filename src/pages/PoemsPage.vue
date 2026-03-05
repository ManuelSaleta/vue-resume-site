<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Slice of Life Poems</h1>
    <div v-if="loading" class="text-center text-gray-500">Loading poems...</div>
    <div v-else class="space-y-8">
      <div
        v-for="poem in poems"
        :key="poem.number"
        class="poem border rounded-lg p-4 bg-white shadow-sm"
      >
        <h2 class="text-xl font-semibold mb-2">{{ poem.title }}</h2>
        <pre class="whitespace-pre-wrap text-gray-700">{{ poem.body }}</pre>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { db, type Poem } from "@/firebase"; // Import the interface too
import {
  collection,
  query,
  orderBy,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";

// Explicitly type the ref as an array of Poems
const poems = ref<Poem[]>([]);
const loading = ref<boolean>(true);

onMounted(async () => {
  try {
    const poemCollection = collection(db, "poems");
    const q = query(poemCollection, orderBy("number", "asc"));

    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    // Map the data and cast it to our Poem interface
    poems.value = querySnapshot.docs.map((doc) => doc.data() as Poem);
  } catch (error) {
    console.error("Firestore Fetch Error:", error);
  } finally {
    loading.value = false;
  }
});
</script>
