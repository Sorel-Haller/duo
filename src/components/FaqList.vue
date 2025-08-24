<template>
  <div class="divide-y divide-white/10">
    <details v-for="(f,i) in items" :key="i" class="py-4" :open="!!f.open">
      <summary class="cursor-pointer flex items-center justify-between text-sm font-medium">
        {{ f.q }}
        <span class="ml-2 text-white/60">{{ f.open ? '✕' : '+' }}</span>
      </summary>
      <p v-if="f.a" class="mt-2 text-sm text-white/70">{{ f.a }}</p>
    </details>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] } // [{ q, a, open? }]
})
</script>
