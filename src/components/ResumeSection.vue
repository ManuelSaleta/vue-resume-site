<template>
  <v-card class="resume-section" variant="outlined">
    <v-card-item>
      <v-card-title class="section-title">
        {{ heading }}
      </v-card-title>
      <v-card-subtitle class="section-subtitle text-right">
        {{ subHeading }}
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <ul v-if="contributions.length" class="list-disc contributions">
        <li v-for="(contribution, index) in contributions" :key="index">
          {{ contribution }}
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const { heading, subHeading, contributions } = defineProps<{
  heading: string;
  subHeading: string;
  contributions: string[];
}>();

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
  font-weight: 700;
}

.section-content {
  padding-left: 1rem;
}

.contributions {
  list-style-position: inside;
  margin-top: 1rem;
}

.contributions li {
  font-size: medium;
  margin-bottom: 0.5rem;
}
</style>
