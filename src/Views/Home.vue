<template>
  <!-- HERO -->
  <section class="relative text-center">
    <div class="absolute inset-0 -z-10">
      <img src="/pictures/homepage.jpg" alt="" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <div class="container py-20 md:py-28">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-wide">
        We Build High-Converting Websites <br class="hidden md:block"> That Deliver Results
      </h1>
      <div class="mt-8 flex justify-center gap-3">
        <a href="#contact" class="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-base hover:brightness-110">Book a Call</a>
        <a href="#works" class="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">See our Works</a>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="bg-base2 py-14">
    <div class="container">
      <p class="text-accent text-xs font-semibold mb-2">Our Delightful Services</p>
      <h2 class="text-2xl md:text-3xl font-semibold max-w-4xl">
        We are a group of passionate people working closely with clients so their business can grow.
      </h2>

      <div class="mt-8 grid gap-5 md:grid-cols-3">
        <!-- row 1 -->
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <div class="mb-3 text-2xl">🔘</div>
          <h3 class="font-semibold">UI/UX</h3>
          <p class="mt-1 text-sm text-white/70">Design user-centered design for web/app interfaces.</p>
        </div>
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <div class="mb-3 text-2xl">🧭</div>
          <h3 class="font-semibold">Brand Identity</h3>
          <p class="mt-1 text-sm text-white/70">Comprehensive brand identity services for all sizes of business.</p>
        </div>
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <div class="mb-3 text-2xl">🔍</div>
          <h3 class="font-semibold">SEO</h3>
          <p class="mt-1 text-sm text-white/70">Technical SEO to capture more traffic and revenue.</p>
        </div>
        <!-- row 2 -->
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <div class="mb-3 text-2xl">💻</div>
          <h3 class="font-semibold">Web Design</h3>
          <p class="mt-1 text-sm text-white/70">Web designs that not only work but look good.</p>
        </div>
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <div class="mb-3 text-2xl">⚙️</div>
          <h3 class="font-semibold">Web Development</h3>
          <p class="mt-1 text-sm text-white/70">Developing beautifully designed websites efficiently and fast.</p>
        </div>
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <div class="mb-3 text-2xl">🚀</div>
          <h3 class="font-semibold">App Development</h3>
          <p class="mt-1 text-sm text-white/70">Web apps that add value to your business and boost efficiency.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SELECTED WORKS -->
  <section id="works" class="py-16">
    <div class="container">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold">Selected works</h2>
          <p class="mt-1 text-sm text-white/70">See our featured works here.</p>
        </div>
        <RouterLink to="/works" class="hidden sm:inline-flex rounded-md border border-white/30 px-4 py-2 text-sm hover:bg-white/10">View All</RouterLink>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- work card -->
        <article class="overflow-hidden rounded-md bg-card ring-1 ring-white/10">
          <div class="aspect-[16/9] w-full bg-black/20">
            <img src="/pictures/bowedwater.jpg" class="h-full w-full object-cover" alt="">
          </div>
          <div class="p-5">
            <h3 class="font-semibold">XoolTech</h3>
            <p class="mt-1 text-sm text-white/70">We partnered with XoolTech’s amazing team...</p>
            <span class="mt-3 inline-block rounded bg-base2 px-2 py-1 text-xs text-white/80">Brand Identity</span>
          </div>
        </article>

        <article class="overflow-hidden rounded-md bg-card ring-1 ring-white/10">
          <div class="aspect-[16/9] w-full bg-black/20">
            <img src="/pictures/flinkerk.jpg" class="h-full w-full object-cover" alt="">
          </div>
          <div class="p-5">
            <h3 class="font-semibold">Flinkerk</h3>
            <p class="mt-1 text-sm text-white/70">Helping streamline project development...</p>
            <span class="mt-3 inline-block rounded bg-base2 px-2 py-1 text-xs text-white/80">Web Design</span>
          </div>
        </article>

        <article class="overflow-hidden rounded-md bg-card ring-1 ring-white/10">
          <div class="aspect-[16/9] w-full bg-black/20">
            <img src="/pictures/albertomaya.jpg" class="h-full w-full object-cover" alt="">
          </div>
          <div class="p-5">
            <h3 class="font-semibold">Alberto Maya</h3>
            <p class="mt-1 text-sm text-white/70">A fully automated and highly configurable solution...</p>
            <span class="mt-3 inline-block rounded bg-base2 px-2 py-1 text-xs text-white/80">Web Development</span>
          </div>
        </article>

        <article class="overflow-hidden rounded-md bg-card ring-1 ring-white/10">
          <div class="aspect-[16/9] w-full bg-black/20">
            <img src="/pictures/flickerd.jpg" alt="" class="h-full w-full object-cover">
          </div>
          <div class="p-5">
            <h3 class="font-semibold">Flickerd</h3>
            <p class="mt-1 text-sm text-white/70">Custom web and app solutions for efficiency...</p>
            <span class="mt-3 inline-block rounded bg-base2 px-2 py-1 text-xs text-white/80">Graphic Design</span>
          </div>
        </article>
      </div>
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

      <!-- Timeline -->
      <div class="relative mx-auto mt-14 max-w-4xl">
        <!-- vertical line -->
        <span class="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20"></span>

        <!-- STEP (komponentimuster) -->
        <!-- Discovery -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold">Discovery</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                Before starting anything, we work with the client to collect detailed information about
                the business, digital product, its users and explore every aspect of the project.
              </p>
            </div>
          </div>
        </div>

        <!-- Scope -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold">Scope</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                We define deliverables, timeline and budget for the project in a written statement.
              </p>
            </div>
          </div>
        </div>

        <!-- Web Structure -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold">Web Structure</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                Personas, key messages and competitor analysis → sitemap and low-fi wireframes.
              </p>
            </div>
          </div>
        </div>

        <!-- Design Concept to Layout -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold leading-snug">Design Concept<br class="hidden md:block"> to Layout Design</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                Page concepts with SEO-aware copy. Build initial UI elements (text, images, shapes).
              </p>
            </div>
          </div>
        </div>

        <!-- Visual design -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold">Visual design</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                Finalize typography, colors, icons and imagery so the whole website feels consistent.
              </p>
            </div>
          </div>
        </div>

        <!-- Site Development -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold">Site Development</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                Component-based build with accessibility and performance; CMS where needed.
              </p>
            </div>
          </div>
        </div>

        <!-- Site Testing -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold">Site Testing</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                Cross-device & browser checks, Core Web Vitals and SEO validation before go-live.
              </p>
            </div>
          </div>
        </div>

        <!-- Site Launch -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold">Site Launch</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                Deploy, connect analytics & Search Console, monitor and fix any post-launch issues.
              </p>
            </div>
          </div>
        </div>

        <!-- Site Maintenance -->
        <div class="grid grid-cols-[1fr_40px_1fr] items-start gap-6 py-8">
          <div class="text-right pr-4">
            <h3 class="text-lg font-semibold">Site Maintenance</h3>
          </div>
          <div class="relative flex justify-center">
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"></span>
            <span class="absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-base"></span>
          </div>
          <div class="pl-1">
            <div class="rounded-md bg-[#0ea987] bg-opacity-25 px-4 py-3 ring-1 ring-[#0ea987]/40">
              <p class="text-sm text-white/90">
                Continuous updates, A/B tests and security patches keep the site healthy and growing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="bg-base2 py-20">
    <div class="container">
      <h2 class="text-center text-2xl md:text-3xl font-semibold">A few words from our clients</h2>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <!-- testi card -->
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <p class="text-sm text-white/80">
            The visual guide will provide a view to the customer of what their website or project will end up looking like...
          </p>
          <div class="mt-4 flex items-center gap-3">
            <img src="https://i.pravatar.cc/48?img=12" alt="" class="h-10 w-10 rounded-full object-cover">
            <div>
              <p class="font-semibold text-sm">Theresa Webb</p>
              <p class="text-xs text-white/60">Marketing Coordinator</p>
            </div>
          </div>
        </div>
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <p class="text-sm text-white/80">
            The visual guide will provide a view to the customer of what their website or project will end up looking like...
          </p>
          <div class="mt-4 flex items-center gap-3">
            <img src="https://i.pravatar.cc/48?img=33" alt="" class="h-10 w-10 rounded-full object-cover">
            <div>
              <p class="font-semibold text-sm">Floyd Miles</p>
              <p class="text-xs text-white/60">IT Analyst</p>
            </div>
          </div>
        </div>
        <div class="rounded-md bg-card p-6 ring-1 ring-white/10">
          <p class="text-sm text-white/80">
            The visual guide will provide a view to the customer of what their website or project will end up looking like...
          </p>
          <div class="mt-4 flex items-center gap-3">
            <img src="https://i.pravatar.cc/48?img=5" alt="" class="h-10 w-10 rounded-full object-cover">
            <div>
              <p class="font-semibold text-sm">Henry Honda</p>
              <p class="text-xs text-white/60">Co-founder of Source DS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LATEST ARTICLES -->
  <section class="bg-base py-20">
    <div class="container">
      <div class="mb-8 flex items-center justify-between">
        <h2 class="text-2xl md:text-3xl font-semibold">Latest Articles</h2>
        <a href="#" class="rounded-md border border-white/30 px-4 py-2 text-sm hover:bg-white/10">View All</a>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <!-- article card -->
        <article class="rounded-md bg-card ring-1 ring-white/10 overflow-hidden">
          <img src="/pictures/articles1.png" alt="" class="h-48 w-full object-cover">
          <div class="p-5">
            <div class="mb-3 flex flex-wrap gap-2 text-xs">
              <span class="rounded bg-base2 px-2 py-1">Brand Identity</span>
              <span class="rounded bg-base2 px-2 py-1">5 min read</span>
            </div>
            <h3 class="font-semibold">The importance of a strong brand identity</h3>
            <p class="mt-1 text-sm text-white/70">This post could discuss the process of developing a brand identity that reflects...</p>
          </div>
        </article>
        <article class="rounded-md bg-card ring-1 ring-white/10 overflow-hidden">
          <img src="/pictures/articles2.png" alt="" class="h-48 w-full object-cover">
          <div class="p-5">
            <div class="mb-3 flex flex-wrap gap-2 text-xs">
              <span class="rounded bg-base2 px-2 py-1">UI/UX</span>
              <span class="rounded bg-base2 px-2 py-1">5 min read</span>
            </div>
            <h3 class="font-semibold">Top 10 UI and UX design mistakes to avoid</h3>
            <p class="mt-1 text-sm text-white/70">This post could list and discuss common mistakes that businesses make when it comes...</p>
          </div>
        </article>
        <article class="rounded-md bg-card ring-1 ring-white/10 overflow-hidden">
          <img src="/pictures/articles3.png" alt="" class="h-48 w-full object-cover">
          <div class="p-5">
            <div class="mb-3 flex flex-wrap gap-2 text-xs">
              <span class="rounded bg-base2 px-2 py-1">Web Development</span>
              <span class="rounded bg-base2 px-2 py-1">5 min read</span>
            </div>
            <h3 class="font-semibold">The benefits of using a web framework</h3>
            <p class="mt-1 text-sm text-white/70">This post could discuss the benefits of using a web framework...</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CLIENT LOGOS -->
  <section class="bg-base2 py-16">
    <div class="container text-center">
      <h2 class="mb-10 text-lg font-medium">Some of our awesome clients that we are proud to work with</h2>
      <div class="flex flex-wrap justify-center gap-8 opacity-80">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Porsche" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Smart" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Cadillac" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Bentley" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Jeep" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=KIA" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Tesla" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Ford" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Dodge" class="h-8" alt="">
        <img src="https://dummyimage.com/100x40/fff/000.png&text=Ferrari" class="h-8" alt="">
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="bg-base py-20">
    <div class="container">
      <h2 class="mb-8 text-xl font-semibold">Frequently asked questions</h2>
      <div class="divide-y divide-white/10">
        <!-- FAQ item -->
        <details open class="py-4">
          <summary class="cursor-pointer flex items-center justify-between text-sm font-medium">
            What type of companies do you work with? Who are your target customers?
            <span class="ml-2">✕</span>
          </summary>
          <p class="mt-2 text-sm text-white/70">Our target customers are mostly start-ups, small businesses, non-profits, and enterprise clients...</p>
        </details>
        <details class="py-4">
          <summary class="cursor-pointer flex items-center justify-between text-sm font-medium">
            How long does it take to successfully complete a website?
            <span class="ml-2">+</span>
          </summary>
        </details>
        <details class="py-4">
          <summary class="cursor-pointer flex items-center justify-between text-sm font-medium">
            Does your web design agency provide only design or web development as well?
            <span class="ml-2">+</span>
          </summary>
        </details>
        <details class="py-4">
          <summary class="cursor-pointer flex items-center justify-between text-sm font-medium">
            Can you work with my existing Marketing team?
            <span class="ml-2">+</span>
          </summary>
        </details>
        <details class="py-4">
          <summary class="cursor-pointer flex items-center justify-between text-sm font-medium">
            Will you be there for me after the website is complete?
            <span class="ml-2">+</span>
          </summary>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>