<template>
  <div class="site-base">
    <SocialMedia></SocialMedia>
    <AboutMe></AboutMe>
    <ResumeBase> </ResumeBase>
  </div>
</template>

<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import ResumeBase from './ResumeBase.vue'
import SocialMedia from './SocialMedia.vue'
</script>

<style scoped>
.site-base {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>
