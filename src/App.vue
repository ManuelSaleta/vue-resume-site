<script setup lang="ts">
import SiteBase from "./components/AppBase.vue";
import SiteNavigation from "./components/AppNavigation.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <v-app class="bg-gradient-to-br from-blue-500 to-purple-500">
    <v-main class="bg-gradient-to-br from-blue-500 to-purple-900">
      <SiteNavigation />
      <!-- If on home page, show SiteBase -->
      <SiteBase v-if="route.path === '/'" />
      <!-- Otherwise show routed pages -->
      <router-view v-else />
    </v-main>
  </v-app>
</template>
