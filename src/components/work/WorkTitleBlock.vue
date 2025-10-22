<template>
  <div class="max-w-2xl">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">{{ title }}</h1>

    <div v-if="tags?.length" class="mt-4 flex flex-wrap gap-2">
      <WorkTag v-for="t in tags" :key="t">{{ t }}</WorkTag>
    </div>

    <p v-if="intro" class="mt-4 text-white/70 text-sm leading-relaxed md:max-w-xl">
      {{ intro }}
    </p>
  </div>
</template>

<script setup>
import WorkTag from './WorkTag.vue'

defineProps({
  title: { type: String, required: true },
  tags:  { type: Array,  default: () => [] },
  intro: { type: String, default: '' }
})
</script>
