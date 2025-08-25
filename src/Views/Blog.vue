<template>
  <main class="bg-white text-slate-900 min-h-screen">
    <!-- Header -->
    <section class="py-10">
      <div class="container">
        <h1 class="text-3xl md:text-4xl font-extrabold text-[#004B49]">Blogs</h1>
        <p class="mt-2 text-sm text-004B49 max-w-3xl">
          Discover the latest news, tips and user research insights from Nitro.
        </p>
      </div>
    </section>

    <!-- Toolbar -->
    <section class="pt-2 pb-6">
      <div class="container flex items-center justify-between gap-4 text-[#004B49]">
        <h2 class="text-lg font-semibold">All Posts</h2>

        <!-- Category filter -->
        <label class="inline-flex items-center gap-2 text-sm">
          <span class="sr-only">Category</span>
          <div class="relative">
            <select
              v-model="selectedCategory"
              class="appearance-none pl-3 pr-9 py-2 rounded-md border border-gray-300 text-sm
                     focus:outline-none focus:ring-2 focus:ring-[#0ea987]/30 focus:border-[#0ea987]"
            >
              <option value="All">Category</option>
              <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
            </select>
            <svg class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
            </svg>
          </div>
        </label>
      </div>
    </section>

    <!-- Posts grid -->
    <section class="pb-12">
      <div class="container">
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="post in paginatedPosts"
            :key="post.id"
            class="overflow-hidden rounded-lg ring-1 ring-gray-200 bg-white hover:shadow-sm transition"
          >
            <RouterLink :to="post.href" class="block">
              <div class="w-full aspect-[16/9] bg-gray-100 overflow-hidden">
                <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </RouterLink>

            <div class="p-4">
              <div class="mb-3 flex flex-wrap items-center gap-2 text-[11px]">
                <span class="inline-flex items-center rounded-full px-2.5 py-1 font-medium
                              bg-[#0ea987] text-white">
                  {{ post.category }}
                </span>
                <span class="inline-flex items-center rounded-full px-2.5 py-1 font-medium
                              bg-[#0ea987]/10 text-[#0ea987] border border-[#0ea987]/30">
                  {{ post.readTime }}
                </span>
              </div>

              <RouterLink :to="post.href" class="group">
                <h3 class="font-semibold group-hover:text-[#0ea987] transition">
                  {{ post.title }}
                </h3>
              </RouterLink>

              <p class="mt-1 text-sm text-slate-600 line-clamp-3">
                {{ post.excerpt }}
              </p>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="mt-8 flex items-center justify-center gap-1">
          <button
            class="h-9 w-9 grid place-items-center rounded-md border border-gray-300 hover:bg-gray-50"
            :disabled="currentPage === 1"
            @click="goTo(currentPage - 1)"
            aria-label="Previous page"
          >
            ‹
          </button>

          <button
            v-for="n in totalPages"
            :key="n"
            class="h-9 min-w-9 px-3 rounded-md border text-sm"
            :class="n === currentPage
              ? 'bg-[#0ea987] text-white border-[#0ea987]'
              : 'border-gray-300 hover:bg-gray-50'"
            @click="goTo(n)"
          >
            {{ n }}
          </button>

          <button
            class="h-9 w-9 grid place-items-center rounded-md border border-gray-300 hover:bg-gray-50"
            :disabled="currentPage === totalPages"
            @click="goTo(currentPage + 1)"
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>

import { computed, ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'

const base = import.meta.env.BASE_URL

const allPosts = ref([
  {
    id: 1,
    image: base + 'pictures/articles1.png',
    title: 'The importance of a strong brand identity',
    excerpt: 'This post could discuss the process of developing a brand identity that reflects the values and mission of a business...',
    category: 'Brand Identity',
    readTime: '5 MIN READ',
    href: '/blog/strong-brand-identity'
  },
  {
    id: 2,
    image: base + 'pictures/articles2.png',
    title: 'Top 10 UI and UX design mistakes to avoid',
    excerpt: 'This post could list and discuss common mistakes that businesses make when it comes to UI and UX design...',
    category: 'UI/UX',
    readTime: '5 MIN READ',
    href: '/blog/uiux-mistakes'
  },
  {
    id: 3,
    image: base + 'pictures/articles3.png',
    title: 'The benefits of using a web framework',
    excerpt: 'This post could discuss the benefits of using a web framework, such as speeding up the development process...',
    category: 'Web Development',
    readTime: '5 MIN READ',
    href: '/blog/web-framework-benefits'
  },
 
  { id: 4,  ...{ image: base+'pictures/articles1.png', title: 'The importance of a strong brand identity', excerpt: '...', category: 'Brand Identity', readTime: '5 MIN READ', href: '/blog/strong-brand-identity-2' } },
  { id: 5,  ...{ image: base+'pictures/articles2.png', title: 'Top 10 UI and UX design mistakes to avoid', excerpt: '...', category: 'UI/UX', readTime: '5 MIN READ', href: '/blog/uiux-mistakes-2' } },
  { id: 6,  ...{ image: base+'pictures/articles3.png', title: 'The benefits of using a web framework', excerpt: '...', category: 'Web Development', readTime: '5 MIN READ', href: '/blog/web-framework-benefits-2' } },
  { id: 7,  ...{ image: base+'pictures/articles1.png', title: 'The importance of a strong brand identity', excerpt: '...', category: 'Brand Identity', readTime: '5 MIN READ', href: '/blog/strong-brand-identity-3' } },
  { id: 8,  ...{ image: base+'pictures/articles2.png', title: 'Top 10 UI and UX design mistakes to avoid', excerpt: '...', category: 'UI/UX', readTime: '5 MIN READ', href: '/blog/uiux-mistakes-3' } },
  { id: 9,  ...{ image: base+'pictures/articles3.png', title: 'The benefits of using a web framework', excerpt: '...', category: 'Web Development', readTime: '5 MIN READ', href: '/blog/web-framework-benefits-3' } },
  { id: 10, ...{ image: base+'pictures/articles1.png', title: 'The importance of a strong brand identity', excerpt: '...', category: 'Brand Identity', readTime: '5 MIN READ', href: '/blog/strong-brand-identity-4' } },
  { id: 11, ...{ image: base+'pictures/articles2.png', title: 'Top 10 UI and UX design mistakes to avoid', excerpt: '...', category: 'UI/UX', readTime: '5 MIN READ', href: '/blog/uiux-mistakes-4' } },
  { id: 12, ...{ image: base+'pictures/articles3.png', title: 'The benefits of using a web framework', excerpt: '...', category: 'Web Development', readTime: '5 MIN READ', href: '/blog/web-framework-benefits-4' } },
])

const categories = computed(() => [...new Set(allPosts.value.map(p => p.category))])
const selectedCategory = ref('All')

const filtered = computed(() =>
  selectedCategory.value === 'All'
    ? allPosts.value
    : allPosts.value.filter(p => p.category === selectedCategory.value)
)

const pageSize = 9
const currentPage = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

function goTo(n) {
  if (n < 1 || n > totalPages.value) return
  currentPage.value = n
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watchEffect(() => {
  currentPage.value = 1
})
</script>
