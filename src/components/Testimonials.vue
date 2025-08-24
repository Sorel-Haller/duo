<template>
  <div>
    <h2 v-if="title" class="text-center text-2xl md:text-3xl font-semibold">
      {{ title }}
    </h2>

    <!-- GRID-variant (nagu sul enne) -->
    <div v-if="layout === 'grid'" class="mt-10 grid gap-6 md:grid-cols-3">
      <div
        v-for="(t,i) in items"
        :key="i"
        class="rounded-md bg-card p-6 ring-1 ring-white/10"
      >
        <p class="text-sm text-white/80">“{{ t.quote }}”</p>
        <div class="mt-4 flex items-center gap-3">
          <img
            v-if="t.avatar"
            :src="t.avatar"
            :alt="t.author"
            class="h-10 w-10 rounded-full object-cover"
            loading="lazy" decoding="async"
          />
          <div
            v-else
            class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm"
            :aria-label="t.author"
          >
            {{ initials(t.author) }}
          </div>
          <div>
            <p class="font-semibold text-sm">{{ t.author }}</p>
            <p v-if="t.role" class="text-xs text-white/60">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SLIDER-variant (valikuline, kui kunagi vaja) -->
    <div v-else class="mt-8 relative">
      <div
        class="flex transition-transform duration-500 will-change-transform"
        :style="{ transform: `translateX(-${index*100}%)` }"
      >
        <figure v-for="(t,i) in items" :key="i" class="min-w-full px-2">
          <blockquote class="rounded-2xl p-6 ring-1 ring-white/10 bg-white/10">
            “{{ t.quote }}”
          </blockquote>
          <figcaption class="mt-4 flex items-center gap-3 text-sm opacity-90">
            <img
              v-if="t.avatar"
              :src="t.avatar"
              :alt="t.author"
              class="h-8 w-8 rounded-full object-cover"
              loading="lazy" decoding="async"
            />
            <div v-else class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
              {{ initials(t.author) }}
            </div>
            <span class="font-medium">{{ t.author }}</span>
            <span v-if="t.role" class="text-white/60">· {{ t.role }}</span>
          </figcaption>
        </figure>
      </div>
      <div class="mt-6 flex items-center justify-center gap-4">
        <button @click="prev" class="rounded-full border border-white/30 px-3 py-2 hover:bg-white/10" aria-label="Prev">‹</button>
        <button @click="next" class="rounded-full border border-white/30 px-3 py-2 hover:bg-white/10" aria-label="Next">›</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  // [{ quote, author, role?, avatar? }]
  items: { type: Array, default: () => [] },
  // 'grid' (nagu sinu varasem markup) või 'slider'
  layout: { type: String, default: 'grid' }
})

const index = ref(0)
function prev(){ index.value = (index.value - 1 + props.items.length) % props.items.length }
function next(){ index.value = (index.value + 1) % props.items.length }

function initials(name){
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()
}
</script>
