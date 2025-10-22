<template>
  <div class="mt-12 space-y-6 md:space-y-8">
    <figure v-for="(img, i) in images" :key="i" class="overflow-hidden rounded-md ring-1 ring-white/10">
      <img :src="img.src" :alt="img.alt || ''" class="w-full h-auto object-cover" loading="lazy" decoding="async" />
    </figure>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    default: () => [] // [{src:'/pictures/concert.png', alt:'...'}, ...]
  }
})
</script>
