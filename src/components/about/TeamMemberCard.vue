<template>
  <article class="rounded-lg overflow-hidden ring-1 ring-gray-200 bg-white">
    <div class="w-full aspect-[4/3] md:aspect-[16/10] bg-gray-100">
      <img
        :src="photo"
        :alt="alt || name || 'Team photo'"
        class="w-full h-full object-cover object-top md:object-center"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div class="p-4">
      <h3 class="font-semibold text-slate-900">{{ name }}</h3>
      <p v-if="role" class="text-sm text-slate-600">{{ role }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  photo: { type: String, required: true },
  name:  { type: String, required: true },
  role:  { type: String, default: '' },
  alt:   { type: String, default: '' },
})
</script>



