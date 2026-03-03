<template>
  <div
    class="about-me flex items-center gap-2 border-2 border-gray-300 rounded-lg pt-4 pr-4 pb-4 pl-4 mb-8"
  >
    <img
      :src="profileAvatar"
      alt="Profile picture"
      class="w-68 h-68 rounded-full object-cover shadow-sm shrink-0"
      loading="lazy"
    />
    <!-- <span class="">|</span> -->
    <div class="h-80 ml-1 mr-1">
      <v-divider
        color="primary"
        opacity=".7"
        thickness="6"
        variant="solid"
        gradient
        vertical
      >
        <!-- AND -->
      </v-divider>
    </div>
    <div class="about-me-text flex flex-col gap-2">
      <!-- <p class="text-xl font-bold mb-2 und">About Me</p> -->
      <p>
        <b>I find solutions</b>, I am a seasoned Full-Stack Engineer with close
        to a decade of experience in the field. My expertise lies in developing
        robust back-end systems, with a particular focus on creating
        microservice-style APIs using ASP.NET, .NET 9, and other C# tools. I
        design and build software with portability and extensibility at the
        forefront, leveraging Docker and Kubernetes for an efficient and
        streamlined build, deployment, and management process. I invite you to
        follow me on GitHub, where you can explore both my professional work and
        personal projects in depth.
      </p>
      <span>
        <Heading text="Contact  Information" size="h4"></Heading>
        <SocialMedia></SocialMedia>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import profileAvatar from "@/assets/avatar.jpeg";
import SocialMedia from "./ContactInfo.vue";
</script>
