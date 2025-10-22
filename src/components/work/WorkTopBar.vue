<template>
  <div class="flex items-start justify-between gap-6">
    <RouterLink :to="backTo" class="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
      <span aria-hidden="true">←</span> {{ backLabel }}
    </RouterLink>

    <div class="hidden md:flex items-center gap-6 text-sm text-white/80">
      <span v-if="year">{{ year }}</span>
      <a v-if="website" :href="website" target="_blank" rel="noopener noreferrer"
         class="inline-flex items-center gap-2 hover:text-white">
        Visit Website <span aria-hidden="true">↗</span>
      </a>
    </div>
  </div>

  <div class="md:hidden grid gap-2 text-sm text-white/80 mt-4" v-if="year || website">
    <span v-if="year">{{ year }}</span>
    <a v-if="website" :href="website" target="_blank" rel="noopener noreferrer"
       class="inline-flex items-center gap-2 hover:text-white">
      Visit Website <span aria-hidden="true">↗</span>
    </a>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  backTo: { type: [String, Object], default: '/works' },
  backLabel: { type: String, default: 'Back to Work Page' },
  year: { type: [String, Number], default: '' },
  website: { type: String, default: '' }
})
</script>
