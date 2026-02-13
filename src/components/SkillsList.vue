<template>
  <div class="skills-list">
    <!-- Skills content will go here -->
    <ul>
      <li v-for="skill in skillsList" :key="skill.name">
        {{ skill.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { skills } from '@/assets/skills.json'
interface Skill {
  name: string
  // Add other properties as needed
}
const skillsList = ref<Skill[]>(skills)

// onMounted(async () => {
//   try {
//     const response = await fetch('/src/assets/skills.json')
//     skills.value = await response.json()
//   } catch (error) {
//     console.error('Error loading skills:', error)
//   }
// })
</script>

<style scoped>
.skills-list {
  /* Add your styles here */
}
</style>
