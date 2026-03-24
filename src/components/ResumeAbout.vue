<template>
  <div
    class="about-me flex items-center gap-2 border-2 border-gray-300 rounded-lg pt-4 pr-4 pb-4 pl-4 mb-8"
  >
    <img
      :src="profileAvatar"
      alt="Profile picture"
      class="w-98 h-98 rounded-full object-cover shadow-sm shrink-0"
      loading="lazy"
      sizes="(max-width: 600px) 400px, 800px"
    />
    <!-- <span class="">|</span> -->
    <div class="h-80 ml-1 mr-1">
      <v-divider
        style="color: red"
        color="secondary"
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
      <div
        class="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-8 pb-10 pt-10 pr-5 pl-5"
      >
        <p class="text-white/80">
          <b>I find solutions</b>, I am a seasoned Full-Stack Engineer with
          close to a decade of experience in the field. My expertise lies in
          developing robust back-end systems, with a particular focus on
          creating microservice-style APIs using ASP.NET, .NET 9, and other C#
          tools. I design and build software with portability and extensibility
          at the forefront, leveraging Docker and Kubernetes for an efficient
          and streamlined build, deployment, and management process. I invite
          you to follow me on GitHub, where you can explore both my professional
          work and personal projects in depth.
        </p>
        <span>
          <Heading text="Contact  Information" size="h4"></Heading>
          <SocialMedia></SocialMedia>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import profileAvatar from "@/assets/avatar.jpeg";
import SocialMedia from "./ContactInfo.vue";
</script>
