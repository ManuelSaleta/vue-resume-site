<template>
  <div class="site-base">
    <!-- <Heading text="Contact" size="h1"></Heading> -->
    <SocialMedia></SocialMedia>
    <!-- <Heading text="About Me" size="h1"></Heading> -->
    <AboutMe></AboutMe>

    <Heading text="Professional Experience" size="h1"></Heading>
    <ResumeBase> </ResumeBase>
  </div>
</template>

<script setup lang="ts">
import AboutMe from './AboutMe.vue'
import Heading from './Heading.vue'
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
