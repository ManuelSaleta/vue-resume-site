<template>
  <button class="resume-download-btn">
    <a
      :href="resume"
      download="Manuel_Saleta_Resume.pdf"
      style="color: inherit; text-decoration: none"
      target="_blank"
    >
      Download Resume
    </a>
  </button>
</template>

<script lang="ts">
import resumePdf from '@/assets/Manuel_Saleta_Resume.pdf'
import { ref } from 'vue'

export default {
  setup() {
    const resume = ref<string>(resumePdf as string)
    return { resume }
  },
}
</script>

<style scoped>
.resume-download-btn {
  background-color: #4fc07f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  display: flex;
  justify-self: flex-end;
  margin-top: 1rem;
}
</style>
