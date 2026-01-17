<template>
  <div
    class="about-me flex items-center gap-4 p-5 border-gray-300 border rounded-lg shadow-sm mb-6"
  >
    <img
      :src="profileAvatar"
      alt="Profile picture"
      class="w-24 h-24 rounded-full object-cover shadow-sm shrink-0"
      loading="lazy"
    />
    <span class="">|</span>
    <div class="about-me-text flex flex-col gap-2">
      <p class="text-xl font-bold mb-2 und">About Me</p>
      <p class="">
        <b>I find solutions</b>, I am a seasoned Full-Stack Engineer with close to a decade of
        experience in the field. My expertise lies in developing robust back-end systems, with a
        particular focus on creating microservice-style APIs using ASP.NET, .NET 9, and other C#
        tools. I design and build software with portability and extensibility at the forefront,
        leveraging Docker and Kubernetes for an efficient and streamlined build, deployment, and
        management process. I invite you to follow me on GitHub, where you can explore both my
        professional work and personal projects in depth.
      </p>
      <span>
        <SocialMedia></SocialMedia>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import profileAvatar from '@/assets/avatar.jpeg'
import SocialMedia from './SocialMedia.vue'
</script>
