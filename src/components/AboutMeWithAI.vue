<template>
  <div>
    <!-- Component content here -->
  </div>
</template>

<script setup lang="ts">
  import { OpenAI } from "openai";
// Component logic here
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  organization: import.meta.env.VITE_OPENAI_ORG_ID,
  project: import.meta.env.VITE_OPENAI_PROJECT_ID,
  dangerouslyAllowBrowser: true,
});
</script>

<style scoped>
/* Component styles here */
</style>
