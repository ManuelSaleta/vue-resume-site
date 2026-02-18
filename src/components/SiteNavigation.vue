<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-app-bar-title>My Portfolio</v-app-bar-title>
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
  { label: "Home", to: "/" },
  { label: "Check out my book", to: "/Test" },
  // Add more pages here
];
</script>

<style scoped>
/* Add optional styling overrides here */
</style>
