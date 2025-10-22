<template>
  <main class="min-h-screen bg-base text-white">
    <section class="container py-8 md:py-12">
      <WorkTopBar :year="year" :website="website" back-to="/works" />
      <div class="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <WorkTitleBlock class="md:order-1" :title="title" :tags="tags" :intro="intro" />
      </div>
      <WorkHeroImage :src="hero.src" :alt="hero.alt" />
      <div class="mt-10 md:mt-14 space-y-14">
        <WorkSection title="Overview">
          <p class="text-white/70 leading-relaxed">
            {{ overview }}
          </p>
        </WorkSection>

        <WorkSection title="Process">
          <div class="space-y-8">
            <div v-for="(step, i) in process" :key="i">
              <h3 class="font-semibold text-white mb-2">{{ step.title }}</h3>
              <p class="text-white/70 leading-relaxed">{{ step.text }}</p>
              <p v-if="step.extra" class="mt-3 text-white/70 leading-relaxed">{{ step.extra }}</p>
            </div>
          </div>
        </WorkSection>

        <WorkSection title="Goals &amp; Objectives">
          <ul class="space-y-3 text-white/80 list-disc pl-5">
            <li v-for="(g,i) in goals" :key="i">{{ g }}</li>
          </ul>
        </WorkSection>

        <WorkSection title="Challenges">
          <ul class="space-y-4 text-white/80 list-disc pl-5">
            <li v-for="(c,i) in challenges" :key="i">{{ c }}</li>
          </ul>
        </WorkSection>

        <WorkResults :metrics="results" />
      </div>

      <WorkGallery :images="gallery" />

      <WorkSeeMoreGrid :cards="seeMore" />
    </section>
  </main>
</template>

<script setup>
import WorkTopBar from '@/components/work/WorkTopBar.vue'
import WorkTitleBlock from '@/components/work/WorkTitleBlock.vue'
import WorkHeroImage from '@/components/work/WorkHeroImage.vue'
import WorkSection from '@/components/work/WorkSection.vue'
import WorkResults from '@/components/work/WorkResults.vue'
import WorkGallery from '@/components/work/WorkGallery.vue'
import WorkSeeMoreGrid from '@/components/work/WorkSeeMoreGrid.vue'

const title = 'XoolTech'
const year = '2022'
const website = 'https://example.com'
const tags = ['Brand Identity', 'Web Design']
const intro = `XoolTech ecommerce website for furniture. From building a design system to sketches
then making the website responsive, here’s the whole process.`

const hero = { src: '/pictures/xooltech.png', alt: 'XoolTech hero' }

const overview = `Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the driver's seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up`

const process = [
  { title: 'Nam sed aspernatur non.', text: 'Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the drivers seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up' },
  { title: 'Velit officia et voluptatibus nisi', text: 'Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the drivers seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up', extra: 'Out of the loop have bandwidth…' }
]

const goals = [
  'Usability waste of resources…',
  'Out of the loop have bandwidth…',
  'Idea shower before go-live…'
]

const challenges = [
  'Usability waste of resources… idea shower',
  'Out of the loop have bandwidth… idea shower',
  'Put these last issues to bed… idea shower'
]

const results = [
  { value: '120%', label: 'Increase in Conversations' },
  { value: '60%',  label: 'Increase in User Engagements' },
  { value: '200%', label: 'Increase in web traffic' }
]

const gallery = [
  { src: '/pictures/concert.png',   alt: 'Concert crowd' },
  { src: '/pictures/drink.png',     alt: 'Blue cocktail close-up' },
  { src: '/pictures/street.png',    alt: 'City street at night' },
  { src: '/pictures/christmas.png', alt: 'Family watching TV by a Christmas tree' }
]

const seeMore = [
  {
    to: '/works/xooltech',
    image: '/pictures/bowedwater.jpg',
    alt: 'XoolTech thumbnail',
    title: 'XoolTech',
    excerpt: `We partnered with XoolTech’s amazing team to create a website that tells their unique story…`,
    tags: ['Brand Identity', 'Web Design']
  },
  {
    to: '/works',
    image: '/pictures/flinkerk.jpg',
    alt: 'Flinkerk thumbnail',
    title: 'Flinkerk',
    excerpt: `Flinkerk helps streamline your projects to develop and deploy software for the web…`,
    tags: ['Web Design']
  }
]
</script>
