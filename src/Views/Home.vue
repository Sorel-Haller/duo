<template>
  <!-- HERO -->
  <HomeHero
    bg="/pictures/homepage.jpg"
    title="We Build High-Converting Websites <br class='hidden md:block'> That Deliver Results"
    primary-label="Book a Call"
    primary-href="#contact"
    secondary-label="See our Works"
    secondary-href="#works"
  />

  <!-- SERVICES -->
  <section id="services" class="bg-base2 py-14">
    <div class="container">
      <p class="text-accent text-xs font-semibold mb-2">Our Delightful Services</p>
      <h2 class="text-2xl md:text-3xl font-semibold max-w-4xl">
        We are a group of passionate people working closely with clients so their business can grow.
      </h2>

      <ServicesGrid class="mt-8" :items="services" />
    </div>
  </section>

  <!-- SELECTED WORKS -->
  <section id="works" class="py-16">
    <div class="container">
      <WorksHeader
        title="Selected works"
        subtitle="See our featured works here."
        :back-to="'/works'"
        back-label="View All"
      />
      <WorkSeeMoreGrid :heading="null" :cards="works" />
    </div>
  </section>

  <!-- PROCESS / TIMELINE -->
  <section id="process" class="bg-base py-20">
    <div class="container">
      <p class="text-accent text-xs font-semibold tracking-widest text-center">Our Design Process</p>
      <h2 class="mt-2 text-center text-3xl md:text-4xl font-bold">
        What is your web design process? How do you start?
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-center text-white/70">
        Our main web design process is divided into the following steps:
      </p>

      <ProcessTimeline class="mt-14" :steps="processSteps" />
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="bg-base2 py-20">
    <div class="container">
      <Testimonials title="A few words from our clients" :items="testimonials" />
    </div>
  </section>

  <!-- LATEST ARTICLES -->
  <section class="bg-base py-20">
    <div class="container">
      <div class="mb-8 flex items-center justify-between">
        <h2 class="text-2xl md:text-3xl font-semibold">Latest Articles</h2>
        <RouterLink to="/blog" class="rounded-md border border-white/30 px-4 py-2 text-sm hover:bg-white/10">View All</RouterLink>
      </div>
      <ArticlesGrid :articles="articles" />
    </div>
  </section>

  <!-- CLIENT LOGOS -->
  <section class="bg-base2 py-16">
    <div class="container text-center">
      <h2 class="mb-10 text-lg font-medium">Some of our awesome clients that we are proud to work with</h2>
      <PartnersStrip :partners="partners" />
    </div>
  </section>

  <!-- FAQ -->
  <section class="bg-base py-20">
    <div class="container">
      <h2 class="mb-8 text-xl font-semibold">Frequently asked questions</h2>
      <FaqList :items="faqs" />
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'


import WorkSeeMoreGrid from '@/components/work/WorkSeeMoreGrid.vue'
import Testimonials from '@/components/Testimonials.vue'
import PartnersStrip from '@/components/PartnersStrip.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import ServicesGrid from '@/components/home/ServicesGrid.vue'
import ProcessTimeline from '@/components/home/ProcessTimeline.vue'
import ArticlesGrid from '@/components/ArticlesGrid.vue'
import FaqList from '@/components/FaqList.vue'

import uiux            from '@/assets/icons/ui-ux.png'
import brandIdentity   from '@/assets/icons/brand-identity.png'
import seo             from '@/assets/icons/seo.png'
import webDesign       from '@/assets/icons/web-design.png'
import webDevelopment  from '@/assets/icons/web-development.png'
import appDevelopment  from '@/assets/icons/app-development.png'

const services = [
  { img: uiux,           title: 'UI/UX',            desc: 'Design user-centered design for web/app interfaces.' },
  { img: brandIdentity,  title: 'Brand Identity',   desc: 'Comprehensive brand identity services for all sizes of business.' },
  { img: seo,            title: 'SEO',              desc: 'Technical SEO to capture more traffic and revenue.' },
  { img: webDesign,      title: 'Web Design',       desc: 'Web designs that not only work but look good.' },
  { img: webDevelopment, title: 'Web Development',  desc: 'Developing beautifully designed websites efficiently and fast.' },
  { img: appDevelopment, title: 'App Development',  desc: 'Web apps that add value to your business and boost efficiency.' }
]

const works = [
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
    image: '/pictures/albertomaya.jpg',
    alt: 'Alberto Maya cover',
    title: 'Alberto Maya',
    excerpt: 'A fully automated and highly configurable solution...',
    tags: ['Web Development']
  },
  {
    image: '/pictures/flickerd.jpg',
    alt: 'Flickerd cover',
    title: 'Flickerd',
    excerpt: 'Custom web and app solutions for efficiency...',
    tags: ['Graphic Design']
  }
]

const processSteps = [
  { title: 'Discovery', desc: 'Before starting anything, we work with the client to collect detailed information about the business, digital product, its users and explore every aspect of the project.' },
  { title: 'Scope', desc: 'The steps included in a UX audit will vary depending on the time and budget allotted to the project.' },
  { title: 'Web Structure', desc: 'We start with personas, key use cases, competitor analysis → sitemap, IA, wireframes.' },
  { title: 'Design Concept to Layout', desc: 'With wireframes ready, we write SEO-aware copy and build initial UI elements.' },
  { title: 'Visual design', desc: 'Finalize type, colors, icons and imagery to keep the website consistent and beautiful.' },
  { title: 'Site Development', desc: 'Component-based build with accessibility & performance; CMS where needed.' },
  { title: 'Site Testing', desc: 'Internal staging, device/browser checks and Core Web Vitals before go-live.' },
  { title: 'Site Launch', desc: 'Launch, collect feedback and be ready to iterate quickly.' },
  { title: 'Site Maintenance', desc: 'Content updates, backend changes, fixing broken links and ongoing improvements.' }
]

const testimonials = [
  {
    quote: 'The visual guide will provide a view to the customer of what their website or project will end up looking like...',
    author: 'Theresa Webb',
    role: 'Marketing Coordinator',
    avatar: 'https://i.pravatar.cc/48?img=12' // või '/pictures/theresa.jpg'
  },
  {
    quote: 'The visual guide will provide a view to the customer of what their website or project will end up looking like...',
    author: 'Floyd Miles',
    role: 'IT Analyst',
    avatar: 'https://i.pravatar.cc/48?img=33'
  },
  {
    quote: 'The visual guide will provide a view to the customer of what their website or project will end up looking like...',
    author: 'Henry Honda',
    role: 'Co-founder of Source DS',
    avatar: 'https://i.pravatar.cc/48?img=5'
  }
]

const articles = [
  {
    image: '/pictures/articles1.png',
    title: 'The importance of a strong brand identity',
    excerpt: 'This post could discuss the process of developing a brand identity that reflects...',
    tags: ['Brand Identity'],
    readTime: '5 min read',
    href: '/blog/strong-brand-identity'
  },
  {
    image: '/pictures/articles2.png',
    title: 'Top 10 UI and UX design mistakes to avoid',
    excerpt: 'This post could list and discuss common mistakes that businesses make when it comes...',
    tags: ['UI/UX'],
    readTime: '5 min read',
    href: '/blog/uiux-mistakes'
  },
  {
    image: '/pictures/articles3.png',
    title: 'The benefits of using a web framework',
    excerpt: 'This post could discuss the benefits of using a web framework...',
    tags: ['Web Development'],
    readTime: '5 min read',
    href: '/blog/web-framework-benefits'
  }
]

const base = import.meta.env.BASE_URL 
const partners = [
  { src: `${base}pictures/cars-1.png`, alt: 'Client logos row 1' },
  { src: `${base}pictures/cars-2.png`, alt: 'Client logos row 2' },
]

const faqs = [
  { q: 'What type of companies do you work with? Who are your target customers?', a: 'Our target customers are mostly start-ups, small businesses, non-profits, and enterprise clients...', open: true },
  { q: 'How long does it take to successfully complete a website?', a: '' },
  { q: 'Does your web design agency provide only design or web development as well?', a: '' },
  { q: 'Can you work with my existing Marketing team?', a: '' },
  { q: 'Will you be there for me after the website is complete?', a: '' }
]
</script>
