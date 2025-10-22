<template>
  <section id="works" class="py-16">
    <div class="container">
      <WorkTopBar :back-to="'/'" back-label="Back Home" />
      <WorkSeeMoreGrid :heading="'Selected works'" :cards="cards" />
    </div>
  </section>
</template>

<script setup>
import WorkTopBar from '@/components/work/WorkTopBar.vue'
import WorkSeeMoreGrid from '@/components/work/WorkSeeMoreGrid.vue'

const cards = [
  {
    to: '/works/xooltech',
    image: '/pictures/bowedwater.jpg',
    alt: 'XoolTech cover',
    title: 'XoolTech',
    excerpt: 'We partnered with XoolTech’s amazing team...',
    tags: ['Brand Identity']
  },
  {
    to: '/works', 
    image: '/pictures/flinkerk.jpg',
    alt: 'Flinkerk cover',
    title: 'Flinkerk',
    excerpt: 'Helping streamline project development...',
    tags: ['Web Design']
  },
  {
    to: null, 
    image: '/pictures/albertomaya.jpg',
    alt: 'Alberto Maya cover',
    title: 'Alberto Maya',
    excerpt: 'A fully automated and highly configurable solution...',
    tags: ['Web Development']
  },
  {
    to: null,
    image: '/pictures/flickerd.jpg',
    alt: 'Flickerd cover',
    title: 'Flickerd',
    excerpt: 'Custom web and app solutions for efficiency...',
    tags: ['Graphic Design']
  }
]
</script>
