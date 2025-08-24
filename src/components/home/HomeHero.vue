<template>
  <section class="relative text-center">
    <div class="absolute inset-0 -z-10">
      <img :src="bg" alt="" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <div class="container py-20 md:py-28">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-wide" v-html="title"></h1>
      <div class="mt-8 flex justify-center gap-3">
        <RouterLink :to="primaryHref" class="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-base hover:brightness-110">
          {{ primaryLabel }}
        </RouterLink>
        <RouterLink :to="secondaryHref" class="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">
          {{ secondaryLabel }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  bg: { type: String, required: true },
  title: { type: String, required: true }, 
  primaryLabel: { type: String, default: 'Primary' },
  primaryHref: { type: String, default: '#' },
  secondaryLabel: { type: String, default: 'Secondary' },
  secondaryHref: { type: String, default: '#' }
})
</script>
