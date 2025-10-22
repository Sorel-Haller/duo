<template>
  <div class="mt-8 overflow-hidden rounded-md ring-1 ring-white/10 bg-card">
    <img :src="src" :alt="alt" class="w-full h-auto object-cover" />
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' }
})
</script>
