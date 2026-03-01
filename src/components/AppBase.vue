<template>
  <div class="site-base">
    <!-- <SkillsList></SkillsList> -->
    <AboutMe></AboutMe>
    <Heading text="Relevant Skills" size="h2"></Heading>
    <SkillsList></SkillsList>

    <Heading text="Professional Experience" size="h2"></Heading>
    <ResumeBase> </ResumeBase>
  </div>
</template>

<script setup lang="ts">
import AboutMe from "./ResumeAbout.vue";
import Heading from "./Heading.vue";
import ResumeBase from "./ResumeBase.vue";
import SkillsList from "./SkillsList.vue";
import SocialMedia from "./ContactInfo.vue";
</script>

<style scoped>
/* The content's styles. Refer to main.css for base styles */
.site-base {
  padding: 2rem;
  max-width: 85%;
  margin: 0 auto;
}
</style>
