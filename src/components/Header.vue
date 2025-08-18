<script setup>
import { ref } from "vue"

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="w-full flex justify-between items-center xl:pr-[140px] md:pr-[80px] sm:pr-[32px] pr-[20px] xl:pl-[140px] md:pl-[80px] sm:pl-[32px] pl-[20px] py-4 bg-white">
    <!-- Logo -->
    <div class="text-lg flex items-center gap-6">
        <h2 class="text-[#008576] font-outfit font-normal text-[36px] leading-[47px] tracking-[-0.02em]">Nitro</h2>
    </div>

    <!-- Two-line Hamburger (mobile) -->
    <div class="relative">
        <button
        @click="toggleMenu"
        class="flex flex-col justify-center items-center w-[60px] h-[29.33px] gap-[10px] opacity-100"
        >
        <span class="block bg-[#008576] w-[60px] h-[1.67px]"></span>
        <span class="block bg-[#008576] w-[60px] h-[1.67px]"></span>
        </button>

      <!-- Dropdown -->
      <div
        v-if="isOpen"
        class="absolute right-0 mt-6 w-44 bg-white shadow-lg ">
        <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Home                        
        </router-link>
        <router-link to="service" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Service                        
        </router-link>
        <router-link to="/works" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Selected Works                        
        </router-link>
        <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            About us                        
        </router-link>
        <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Blog                        
        </router-link>
        <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Privacy Policy                        
        </router-link>
        <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Contact Us                        
        </router-link>
      </div>
    </div>
  </header>
</template>
