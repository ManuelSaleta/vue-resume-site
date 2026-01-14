<template>
  <div class="about-me flex items-center gap-4 p-5">
    <img
      :src="profileAvatar"
      alt="Profile picture"
      class="w-24 h-24 rounded-full object-cover shadow-sm shrink-0"
      loading="lazy"
    />
    <div class="about-me-text flex flex-col gap-2">
      <h1 class="text-xl font-semibold mb-2">About Me</h1>
      <p class="">
        <b>I find solutions</b>, I am a seasoned Full-Stack Engineer with close to a decade of
        experience in the field. My expertise lies in developing robust back-end systems, with a
        particular focus on creating microservice-style APIs using ASP.NET, .NET 9, and other C#
        tools. I design and build software with portability and extensibility at the forefront,
        leveraging Docker and Kubernetes for an efficient and streamlined build, deployment, and
        management process. I invite you to follow me on GitHub, where you can explore both my
        professional work and personal projects in depth.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import profileAvatar from '@/assets/avatar.jpeg'
</script>
