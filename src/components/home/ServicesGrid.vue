<!-- src/components/home/ServicesGrid.vue -->
<template>
  <div class="grid gap-5 md:grid-cols-3">
    <div v-for="(s,i) in items" :key="i" class="rounded-md bg-card p-6 ring-1 ring-white/10">
      <div class="mb-3">
        <img v-if="s.img" :src="s.img" :alt="`${s.title} icon`" class="h-12 w-12" />
        <div v-else class="text-2xl">{{ s.icon }}</div>
      </div>
      <h3 class="font-semibold">{{ s.title }}</h3>
      <p class="mt-1 text-sm text-white/70">{{ s.desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>
