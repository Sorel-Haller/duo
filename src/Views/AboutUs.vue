<template>
  <div class="min-h-screen">
    <!-- Ülemine roheline -->
    <section class="bg-[#dff1ec]">
      <div class="container py-12 md:py-16 grid md:grid-cols-2 gap-10">
        <h1 class="text-3xl md:text-4xl font-extrabold leading-snug text-slate-004B49">
          Designers, Developers<br />and Homo Sapiens.
        </h1>
        <p class="max-w-prose text-slate-800">
          We are a small team but a force of nature. We are determined, we work non-stop and
          build relationships that our clients return to. We enjoy making our client’s businesses
          a success and go the extra mile to provide a service that creates a memorable experience.
        </p>
      </div>
    </section>

    <!-- Valge tiim -->
    <TeamGrid :team="team" />

    <!-- Tume osa alates siin -->
    <section class="bg-base text-white py-20">
      <div class="container">
        <Testimonials title="A few words from our clients" :items="testimonials" layout="grid" />
      </div>
    </section>

    <section class="bg-base text-white py-16">
      <div class="container text-center">
        <h2 class="mb-10 text-lg font-medium">Some of our awesome clients that we are proud to work with</h2>
        <div class="flex flex-col items-center gap-8 opacity-90">
          <img :src="base + 'pictures/cars-1.png'" class="h-10 md:h-12 w-auto object-contain" alt="logos row 1" />
          <img :src="base + 'pictures/cars-2.png'" class="h-10 md:h-12 w-auto object-contain" alt="logos row 2" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TeamGrid from '@/components/about/TeamGrid.vue'
import Testimonials from '@/components/Testimonials.vue'

const base = import.meta.env.BASE_URL

// pildid: public/pictures/about-1.jpg … about-6.jpg
const team = [
  { photo: base + 'pictures/about-1.jpg', name: 'Theresa Webb',       role: 'CEO & Founder' },
  { photo: base + 'pictures/about-2.jpg', name: 'Floyd Miles',        role: 'COO & Product Manager' },
  { photo: base + 'pictures/about-3.jpg', name: 'Henry Honda',        role: 'Motion Designer' },
  { photo: base + 'pictures/about-4.jpg', name: 'Leslie Alexander',   role: 'Digital Marketer' },
  { photo: base + 'pictures/about-5.jpg', name: 'Cameron Williamson', role: 'Product Designer' },
  { photo: base + 'pictures/about-6.jpg', name: 'Courtney Henry',     role: 'Web Developer' }
]

const testimonials = [
  { quote: 'The visual guide will provide a view to the customer of what their website or project will end up looking like...', author: 'Theresa Webb', role: 'Marketing Coordinator', avatar: 'https://i.pravatar.cc/96?img=12' },
  { quote: 'The visual guide will provide a view to the customer of what their website or project will end up looking like...', author: 'Floyd Miles',  role: 'IT Analyst',           avatar: 'https://i.pravatar.cc/96?img=33' },
  { quote: 'The visual guide will provide a view to the customer of what their website or project will end up looking like...', author: 'Henry Honda',  role: 'Co-founder of Source DS', avatar: 'https://i.pravatar.cc/96?img=5' }
]
</script>
