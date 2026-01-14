<template>
  <div class="social-media">
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.url"
      :aria-label="social.name"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
    >
      <i :class="social.icon"></i>
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
    name: 'GitHub',
    url: 'https://github.com/ManuelSaleta',
    icon: 'fab fa-github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'fab fa-linkedin',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: 'fab fa-youtube',
  },
]
</script>

<style scoped>
.social-media {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #0066cc;
}
</style>
