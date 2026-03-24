<template>
  <v-card class="mb-8 shadow-md rounded-xl overflow-hidden border-none">
    <v-card-item class="pb-0">
      <div class="flex flex-col">
        <v-card-title
          class="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 py-1"
        >
          {{ heading }}
        </v-card-title>

        <v-card-subtitle
          class="text-right text-sm text-gray-500 font-bold uppercase tracking-widest -mt-1"
        >
          {{ subHeading }}
        </v-card-subtitle>
      </div>

      <div class="h-px w-full bg-gray-100 mt-4"></div>
    </v-card-item>

    <v-card-text class="pt-4">
      <ul v-if="contributions.length" class="space-y-3">
        <li
          v-for="(contribution, index) in contributions"
          :key="index"
          class="text-gray-700 text-md leading-relaxed"
        >
          -
          <span class="ml-[-0.5rem]">{{ contribution }}</span>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const { heading, subHeading, contributions } = defineProps<{
  heading: string;
  subHeading: string;
  contributions: string[];
}>();
</script>
