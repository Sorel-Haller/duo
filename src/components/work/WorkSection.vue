<template>
  <div class="grid md:grid-cols-[220px_1fr] gap-6">
    <h2 class="text-xl md:text-2xl font-semibold">{{ title }}</h2>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true }
})
</script>
