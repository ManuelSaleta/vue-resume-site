<template>
  <div class="flex flex-col gap-1">
    <Heading text="AI Agent: Ask Me About My Resume" size="h3"></Heading>
    <input
      v-model="question"
      placeholder="Ask me anything"
      class="mt-4 p-4 border border-gray-300 rounded-lg shadow-sm"
    />
    <button
      @click="aiResponse"
      class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      submit question
    </button>
    <div class="ai-response">
      <p v-if="question && response">{{ response }}</p>
      <p v-else class="text-gray-500">AI response will appear here...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Heading from './Heading.vue'
// import { fetchResponse } from '@/agent'

const question = ref<string>('')
const response = ref<string>('')
// const aiResponse = async () => {
//   response.value = (await fetchResponse(question.value))?.choices[0]?.message.content || ''
// }
</script>

<style scoped></style>
