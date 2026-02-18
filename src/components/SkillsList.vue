<template>
  <div class="skills-list flex flex-wrap gap-2">
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
import { ref } from 'vue'
import { skills } from '@/assets/skills.json'
import SkillChip from './SkillChip.vue'
interface Skill {
  name: string
  color: string
  url: string
  icon: string
}
const skillsList = ref<Skill[]>(skills)
</script>
