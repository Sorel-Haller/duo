<template>
  <ul class="flex flex-col items-center gap-8 opacity-80">
    <li v-for="(p,i) in partners" :key="i">
      <img
        :src="typeof p === 'string' ? p : p.src"
        :alt="typeof p === 'string' ? 'Partner logos' : (p.alt || 'Partner logos')"
        class="h-12 md:h-16 w-auto object-contain"
        loading="lazy" decoding="async"
      />
    </li>
  </ul>
</template>

<script setup>
defineProps({ partners: { type: Array, default: () => [] } })
</script>
