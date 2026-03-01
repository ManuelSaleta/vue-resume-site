<template>
  <div class="flex flex-wrap items-center gap-3 w-full">
    <div class="flex flex-wrap gap-2">
      <SkillPill
        v-for="link in contactLinks"
        :key="link.url"
        :href="link.url"
        :text="link.name"
        :prepend-icon="link.icon"
        textColor="primary"
        variant="elevated"
        outlined
        rounded
      />
    </div>

    <div class="hidden sm:block h-6 w-px bg-gray-300 mx-2"></div>

    <div class="flex gap-1">
      <v-tooltip
        v-for="social in iconLinks"
        :key="social.url"
        location="top"
        :text="social.name"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            :href="social.url"
            :icon="social.icon"
            target="_blank"
            variant="text"
            color="secondary"
            density="comfortable"
            class="social-btn"
          />
        </template>
      </v-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SkillPill from "./SkillPill.vue"; // Adjust path to your wrapper

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "manny2206@gmail.com",
    url: "mailto:manny2206@gmail.com",
    icon: "mdi-email-outline",
  },
  {
    name: "+1 (305) 773-8214",
    url: "tel:+3057738214",
    icon: "mdi-phone-outline",
  },
  {
    name: "Github",
    url: "https://github.com/ManuelSaleta",
    icon: "mdi-github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manuelsaleta/",
    icon: "mdi-linkedin",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@theseriousprofessional/videos",
    icon: "mdi-youtube",
  },
];

// Logic to split data: Chips (Contact) vs Buttons (Socials)
const contactLinks = computed(() => socialLinks.filter((l) => l.name !== ""));
const iconLinks = computed(() => socialLinks.filter((l) => l.name === ""));
</script>

<style scoped>
.social-btn {
  transition: all 0.2s ease-in-out;
}
.social-btn:hover {
  transform: translateY(-3px);
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
