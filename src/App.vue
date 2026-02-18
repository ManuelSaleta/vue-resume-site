<script setup lang="ts">
import SiteBase from "./components/SiteBase.vue";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<template>
  <v-app>
    <v-main>
      <!-- <v-app-bar :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Manuel Saleta</v-app-bar-title>

      </v-app-bar>
      <SiteBase /> -->
      <SiteNavigation></SiteNavigation>
      <SiteBase></SiteBase>
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
