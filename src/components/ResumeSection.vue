<template>
  <section class="resume-section">
    <div class="section-header">
      <h2 class="section-title">{{ heading }}</h2>
      <p class="section-subtitle">{{ subHeading }}</p>
    </div>
    <div class="section-content">
      <slot></slot>
      <ul v-if="contributions.length" class="contributions">
        <li v-for="(contribution, index) in contributions" :key="index">
          {{ contribution }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const { heading, subHeading, contributions } = defineProps<{
  heading: string
  subHeading: string
  contributions: string[]
}>()

// component logic here — do NOT use `export default`
</script>

<style scoped>
.resume-section {
  margin-bottom: 2rem;
}

.section-header {
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #333;
  padding-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

.section-content {
  padding-left: 1rem;
}

.contributions {
  list-style-position: inside;
  margin-top: 1rem;
}

.contributions li {
  margin-bottom: 0.5rem;
}
</style>
