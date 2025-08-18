<template>
  <main class="min-h-screen bg-base text-white">
    <section class="container py-8 md:py-12">
      <!-- ülarida -->
      <div class="flex items-start justify-between gap-6">
        <RouterLink to="/works" class="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
          <span aria-hidden="true">←</span> Back to Work Page
        </RouterLink>
        <div class="hidden md:flex items-center gap-6 text-sm text-white/80">
          <span>2022</span>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-white">
            Visit Website <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <!-- pealkiri + sildid + intro -->
      <div class="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">XoolTech</h1>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">Brand Identity</span>
            <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">Web Design</span>
          </div>

          <p class="mt-4 text-white/70 text-sm leading-relaxed md:max-w-xl">
            XoolTech ecommerce website for furniture. From building a design system to sketches then making the website responsive, here’s the whole process.
          </p>
        </div>

        <!-- mobiilne parempoolne plokk -->
        <div class="md:hidden grid gap-2 text-sm text-white/80">
          <span>2022</span>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-white">
            Visit Website <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <!-- hero pilt -->
      <div class="mt-8 overflow-hidden rounded-md ring-1 ring-white/10 bg-card">
        <img src="/pictures/xooltech.png" alt="XoolTech hero" class="w-full h-auto object-cover" />
      </div>

      <!-- sisuplokid -->
      <div class="mt-10 md:mt-14 space-y-14">
        <!-- Overview -->
        <div class="grid md:grid-cols-[220px_1fr] gap-6">
          <h2 class="text-xl md:text-2xl font-semibold">Overview</h2>
          <p class="text-white/70 leading-relaxed">
            Usability waste of resources, for can we jump on a zoom, so red flag, or get in the driver's seat we just need to put these last issues to bed…
          </p>
        </div>

        <!-- Process -->
        <div class="grid md:grid-cols-[220px_1fr] gap-6">
          <h2 class="text-xl md:text-2xl font-semibold">Process</h2>
          <div class="space-y-8">
            <div>
              <h3 class="font-semibold text-white mb-2">Nam sed aspernatur non.</h3>
              <p class="text-white/70 leading-relaxed">Usability waste of resources…</p>
            </div>
            <div>
              <h3 class="font-semibold text-white mb-2">Velit officia et voluptatibus nisi</h3>
              <p class="text-white/70 leading-relaxed">Usability waste of resources…</p>
              <p class="mt-3 text-white/70 leading-relaxed">Out of the loop have bandwidth…</p>
            </div>
          </div>
        </div>

        <!-- Goals & Objectives -->
        <div class="grid md:grid-cols-[220px_1fr] gap-6">
          <h2 class="text-xl md:text-2xl font-semibold">Goals &amp; Objectives</h2>
          <ul class="space-y-3 text-white/80 list-disc pl-5">
            <li>Usability waste of resources…</li>
            <li>Out of the loop have bandwidth…</li>
            <li>Idea shower before go-live…</li>
          </ul>
        </div>

        <!-- Challenges -->
        <div class="grid md:grid-cols-[220px_1fr] gap-6">
          <h2 class="text-xl md:text-2xl font-semibold">Challenges</h2>
          <ul class="space-y-4 text-white/80 list-disc pl-5">
            <li>Usability waste of resources… idea shower</li>
            <li>Out of the loop have bandwidth… idea shower</li>
            <li>Put these last issues to bed… idea shower</li>
          </ul>
        </div>

        <!-- Results -->
        <div class="grid md:grid-cols-[220px_1fr] gap-6">
          <h2 class="text-xl md:text-2xl font-semibold">Results</h2>
          <div class="space-y-6">
            <div class="flex items-baseline gap-6 md:gap-10">
              <div class="text-5xl md:text-6xl font-extrabold tracking-tight tabular-nums">120%</div>
              <div class="text-white/80">Increase in Conversations</div>
            </div>
            <div class="flex items-baseline gap-6 md:gap-10">
              <div class="text-5xl md:text-6xl font-extrabold tracking-tight tabular-nums">60%</div>
              <div class="text-white/80">Increase in User Engagements</div>
            </div>
            <div class="flex items-baseline gap-6 md:gap-10">
              <div class="text-5xl md:text-6xl font-extrabold tracking-tight tabular-nums">200%</div>
              <div class="text-white/80">Increase in web traffic</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==== FULL-WIDTH GALLERY  ==== -->
<div class="mt-12 space-y-6 md:space-y-8">
  <figure class="overflow-hidden rounded-md ring-1 ring-white/10">
    <img src="/pictures/concert.png" alt="Concert crowd" class="w-full h-auto object-cover" />
  </figure>
  <figure class="overflow-hidden rounded-md ring-1 ring-white/10">
    <img src="/pictures/drink.png" alt="Blue cocktail close-up" class="w-full h-auto object-cover" />
  </figure>
  <figure class="overflow-hidden rounded-md ring-1 ring-white/10">
    <img src="/pictures/street.png" alt="City street at night" class="w-full h-auto object-cover" />
  </figure>
  <figure class="overflow-hidden rounded-md ring-1 ring-white/10">
    <img src="/pictures/christmas.png" alt="Family watching TV by a Christmas tree" class="w-full h-auto object-cover" />
  </figure>
</div>

<!-- ==== SEE MORE WORKS ==== -->
<div class="mt-16">
  <h2 class="mb-6 text-2xl md:text-3xl font-semibold">See More Works</h2>

  <div class="grid gap-6 md:grid-cols-2">
    <!-- kaart 1 -->
    <RouterLink
      to="/works/xooltech"
      class="group overflow-hidden rounded-md bg-card ring-1 ring-white/10 block"
    >
      <div class="aspect-[16/9] w-full overflow-hidden">
        <img
          src="/pictures/bowedwater.jpg"
          alt="XoolTech thumbnail"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div class="p-5">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-semibold">XoolTech</h3>
          <div class="hidden sm:flex gap-2">
            <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Brand Identity</span>
            <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Web Design</span>
          </div>
        </div>
        <p class="mt-1 text-sm text-white/70 line-clamp-2">
          We partnered with XoolTech’s amazing team to create a website that tells their unique story…
        </p>
        <div class="sm:hidden mt-3 flex gap-2">
          <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Brand Identity</span>
          <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Web Design</span>
        </div>
      </div>
    </RouterLink>

    <!-- kaart 2 -->
    <RouterLink
      to="/works"
      class="group overflow-hidden rounded-md bg-card ring-1 ring-white/10 block"
    >
      <div class="aspect-[16/9] w-full overflow-hidden">
        <img
          src="/pictures/flinkerk.jpg"
          alt="Flinkerk thumbnail"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div class="p-5">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-semibold">Flinkerk</h3>
          <div class="hidden sm:flex gap-2">
            <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Web Design</span>
          </div>
        </div>
        <p class="mt-1 text-sm text-white/70 line-clamp-2">
          Flinkerk helps streamline your projects to develop and deploy software for the web…
        </p>
        <div class="sm:hidden mt-3 flex gap-2">
          <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Web Design</span>
        </div>
      </div>
    </RouterLink>
  </div>
</div>

    </section>
  </main>
</template>
