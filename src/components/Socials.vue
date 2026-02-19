<template>
  <div class="flex flex-row justify-around mb-2">
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.url"
      :aria-label="social.name"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
    >
      <i :class="[social.icon, '']">{{ social.name }}</i>
    </a>
  </div>
</template>

<script setup lang="ts">
interface SocialLink {
  name: string
  url: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'manny2206@gmail.com',
    url: 'mailto:manny2206@gmail.com',
    icon: '',
  },
  {
    name: '+1 (305) 773-8214',
    url: 'tel:+3057738214',
    icon: '',
  },
  {
    name: '',
    url: 'https://github.com/ManuelSaleta',
    icon: 'fa fa-github',
  },
  {
    name: '',
    url: 'https://www.linkedin.com/in/manuelsaleta/',
    icon: 'fab fa-linkedin',
  },
  {
    name: '',
    url: 'https://www.youtube.com/@theseriousprofessional/videos',
    icon: 'fab fa-youtube',
  },
]
</script>

<style scoped>
.social-link {
  color: #333;
  font-family: 'Roboto', sans-serif;
}

.social-link:hover {
  color: #0066cc;
}
</style>
