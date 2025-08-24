<template>
  <RouterLink :to="to" class="group overflow-hidden rounded-md bg-card ring-1 ring-white/10 block">
    <div class="aspect-[16/9] w-full overflow-hidden">
      <img :src="image" :alt="alt" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
    </div>
    <div class="p-5">
      <div class="flex items-start justify-between gap-4">
        <h3 class="font-semibold">{{ title }}</h3>
        <div class="hidden sm:flex gap-2" v-if="tags?.length">
          <span v-for="t in tags" :key="t" class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">{{ t }}</span>
        </div>
      </div>
      <p v-if="excerpt" class="mt-1 text-sm text-white/70 line-clamp-2">{{ excerpt }}</p>
      <div class="sm:hidden mt-3 flex gap-2" v-if="tags?.length">
        <span v-for="t in tags" :key="t" class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">{{ t }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: { type: [String, Object], required: true },
  image: { type: String, required: true },
  alt: { type: String, default: '' },
  title: { type: String, required: true },
  excerpt: { type: String, default: '' },
  tags: { type: Array, default: () => [] }
})
</script>
