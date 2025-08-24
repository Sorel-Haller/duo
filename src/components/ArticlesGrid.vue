<template>
  <div class="grid gap-6 md:grid-cols-3">
    <article v-for="(a,i) in articles" :key="i" class="rounded-md bg-card ring-1 ring-white/10 overflow-hidden">
      <img :src="a.image" alt="" class="h-48 w-full object-cover">
      <div class="p-5">
        <div class="mb-3 flex flex-wrap gap-2 text-xs">
          <span v-for="(t,ti) in a.tags" :key="ti" class="rounded bg-base2 px-2 py-1">{{ t }}</span>
          <span v-if="a.readTime" class="rounded bg-base2 px-2 py-1">{{ a.readTime }}</span>
        </div>
        <RouterLink v-if="a.href" :to="a.href" class="font-semibold hover:underline">{{ a.title }}</RouterLink>
        <h3 v-else class="font-semibold">{{ a.title }}</h3>
        <p class="mt-1 text-sm text-white/70">{{ a.excerpt }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  articles: { type: Array, default: () => [] }
})
</script>
