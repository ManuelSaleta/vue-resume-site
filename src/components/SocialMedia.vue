<template>
  <div class="flex gap-1 justify-around">
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.url"
      :aria-label="social.name"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
    >
      <i :class="social.icon">{{ social.name }}</i>
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
    name: 'GitHub',
    url: 'https://github.com/ManuelSaleta',
    icon: 'fa fa-github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manuelsaleta/',
    icon: 'fab fa-linkedin',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com', // Replace with actual URL
    icon: 'fab fa-youtube',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com', // Replace with actual URL
    icon: 'fab fa-twitter',
  },
]
</script>

<style scoped>
.social-link {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #0066cc;
}
</style>
