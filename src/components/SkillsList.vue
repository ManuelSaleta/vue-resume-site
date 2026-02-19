<template>
  <div
    class="skills-list flex flex-wrap gap-2 border-2 border-gray-300 rounded-lg pt-4 pr-4 pb-4 pl-4 mb-8"
  >
    <span v-for="skill in skillsList" :key="skill.name">
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
