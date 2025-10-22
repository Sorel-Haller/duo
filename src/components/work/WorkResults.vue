<template>
  <WorkSection title="Results">
    <div class="space-y-6">
      <div v-for="(m, i) in metrics" :key="i" class="flex items-baseline gap-6 md:gap-10">
        <div class="text-5xl md:text-6xl font-extrabold tracking-tight tabular-nums">{{ m.value }}</div>
        <div class="text-white/80">{{ m.label }}</div>
      </div>
    </div>
  </WorkSection>
</template>

<script setup>
import WorkSection from './WorkSection.vue'

defineProps({
  metrics: {
    type: Array,
    default: () => [] // [{ value:'120%', label:'Increase in Conversations' }, ...]
  }
})
</script>
