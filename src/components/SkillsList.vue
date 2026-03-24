<template>
  <div class="skills-list flex flex-wrap gap-2 pt-4 pr-4 pb-4 pl-4 mb-8">
    <div
      class="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-8 pb-10 pt-10 pr-5 pl-5"
    >
      <span class="text-white/80" v-for="skill in skillsList" :key="skill.name">
        <SkillChip
          :text="skill.name"
          :href="skill.url"
          :color="skill.color"
          :prepend-icon="`mdi-${skill.icon}`"
          textColor="primary"
          variant="elevated"
          outlined
          rounded
        ></SkillChip>
      </span>
      <span>
        <Heading text="Contact  Information" size="h4"></Heading>
        <SocialMedia></SocialMedia>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { skills } from "@/assets/skills.json";
import SkillChip from "./SkillPill.vue";
interface Skill {
  name: string;
  color: string;
  url: string;
  icon: string;
}
const skillsList = ref<Skill[]>(skills);
</script>
