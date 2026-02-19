<script setup lang="ts">
import SiteBase from "./components/AppBase.vue";
import SiteNavigation from "./components/AppNavigation.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <v-app>
    <v-main>
      <SiteNavigation />

      <!-- If on home page, show SiteBase -->
      <SiteBase v-if="route.path === '/'" />

      <!-- Otherwise show routed pages -->
      <router-view v-else />
    </v-main>
  </v-app>
</template>
