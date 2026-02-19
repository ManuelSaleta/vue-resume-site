<template>
  <v-chip v-bind="chipProps" target="_blank">
    <slot>{{ text }}</slot>
  </v-chip>
 </template>

<script lang="ts" setup>
import { computed } from 'vue'

interface ChipProps {
  color?: string
  textColor?: string
  outlined?: boolean
  disabled?: boolean
  small?: boolean
  large?: boolean
  close?: boolean
  label?: boolean
  rounded?: boolean | string
  elevation?: string | number
  filter?: boolean
  selected?: boolean
  activeClass?: string
  href?: string
  to?: unknown
  tag?: string
  ripple?: boolean
  size?: string | number
  variant?: string
  text?: string
  // allow additional v-chip props
  [key: string]: unknown
}

const props = defineProps<ChipProps>()
// const emit = defineEmits<{
//   (e: 'click', ev: MouseEvent): void
//   (e: 'close', ev: Event): void
// }>()

const text = props.text ?? ''

const chipProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { text: _, ...rest } = props as Record<string, unknown>
  return rest
})

// function emitClick(e: MouseEvent) {
//   emit('click', e)
// }

// function emitClose(e: Event) {
//   emit('close', e)
// }
</script>
