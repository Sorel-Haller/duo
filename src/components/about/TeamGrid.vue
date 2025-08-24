<template>
  <section class="py-10 md:py-12 bg-white text-slate-900">
    <div class="container">
      <div class="bg-white rounded-xl ring-1 ring-gray-200 p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-6">{{ title }}</h2>
        
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <TeamMemberCard
            v-for="(m, i) in team"
            :key="m.id || i"
            :photo="m.photo"
            :name="m.name"
            :role="m.role"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TeamMemberCard from './TeamMemberCard.vue'

defineProps({
  title: { type: String, default: 'Meet the Team' },
  // [{ photo: string, name: string, role?: string, id?: string|number }]
  team: { type: Array, default: () => [] }
})
</script>
