<template>
  <div class="site-base">
    <SkillsList></SkillsList>
    <SocialMedia></SocialMedia>
    <AboutMe></AboutMe>
    <Heading text="Professional Experience" size="h1"></Heading>
    <ResumeBase> </ResumeBase>
  </div>
</template>

<script setup lang="ts">
import AboutMe from "./AboutMe.vue";
import Heading from "./Heading.vue";
import ResumeBase from "./ResumeBase.vue";
import SkillsList from "./SkillsList.vue";
import SocialMedia from "./SocialMedia.vue";
</script>

<style scoped>
.site-base {
  padding: 2rem;
  max-width: 90%; /* Container max width */
  margin: 0 auto;
}
</style>
