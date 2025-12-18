<template>
  <div class="resume-base">
    <div class="resume-section" v-for="section in resume.experience" :key="section.id">
      <ResumeSection
        :heading="section.heading"
        :sub-heading="section.sub_heading"
        :contributions="section.contributions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ResumeSection from './ResumeSection.vue'
import resumeData from '@/assets/resume.json'

interface ResumeSection {
  id: number
  heading: string
  sub_heading: string
  contributions: string[]
}

interface Resume {
  experience: ResumeSection[]
}

const resume = ref<Resume>(resumeData as Resume)
</script>

<style scoped>
/* styles for ResumeBase */
</style>
