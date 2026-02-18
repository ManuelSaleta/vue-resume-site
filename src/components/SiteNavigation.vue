<template>
  <v-app-bar color="#f5f5f5" app>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-app-bar-title>Manuel Saleta | Let's build together</v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item v-for="link in links" :key="link.to" :to="link.to" link>
        {{ link.label }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);

const links = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Book", to: "/src/pages/BookPage" },
  // Add more pages here
];
</script>

<style scoped>
/* Add optional styling overrides here */
</style>
