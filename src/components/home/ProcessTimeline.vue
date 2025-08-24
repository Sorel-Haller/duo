<template>
  <div class="relative mx-auto max-w-4xl">
    <span class="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20"></span>

    <div v-for="(step, i) in steps" :key="i" class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
      <div class="text-right pr-4">
        <h3 class="text-lg font-semibold leading-snug" v-html="step.title"></h3>
      </div>
      <div class="relative flex justify-center">
        <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
        <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
      </div>
      <div class="pl-1">
        <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
          <p class="text-sm text-white/90">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: { type: Array, default: () => [] } // [{ title, desc }]
})
</script>
