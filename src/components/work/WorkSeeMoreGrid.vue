<template>
  <div class="mt-16">
    <h2 class="mb-6 text-2xl md:text-3xl font-semibold">{{ heading }}</h2>
    <div class="grid gap-6 md:grid-cols-2">
      <WorkSeeMoreCard
        v-for="(card, i) in cards"
        :key="i"
        :to="card.to"
        :image="card.image"
        :alt="card.alt || ''"
        :title="card.title"
        :excerpt="card.excerpt"
        :tags="card.tags"
      />
    </div>
  </div>
</template>

<script setup>
import WorkSeeMoreCard from './WorkSeeMoreCard.vue'

defineProps({
  heading: { type: String, default: 'See More Works' },
  cards: { type: Array, default: () => [] }
})
</script>
