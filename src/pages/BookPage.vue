<template>
  div class="book-page">
  <div class="book-container">
    <div class="book-cover">hello</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.book-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.book-container {
  display: flex;
  gap: 3rem;
  max-width: 900px;
  align-items: center;
}

.book-cover img {
  width: 300px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.book-info h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.author {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.badge {
  display: inline-block;
  background: #ff6b6b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.release-date {
  margin-top: 1rem;
  color: #555;
}

.notify-btn {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.notify-btn:hover {
  background: #369970;
}
</style>
