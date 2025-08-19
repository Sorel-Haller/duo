<template>
    <div class="bg-white pt-10 pb-0 xl:pr-[140px] md:pr-20 sm:pr-8 pr-5 xl:pl-[140px] md:pl-20 sm:pl-8 pl-5">
        <div class="flex flex-col gap-15">
            <h1 class="font-[outfit] font-normal text-[#004B49] text-[36px] sm:text-[48px] md:text-[54px] lg:text-[64px]">Hey! Tell us about your project</h1>
            <div class="flex flex-col lg:flex-row gap-10">
                <!-- Contact form -->
                 <div class="flex flex-col sm:gap-15 gap-[40px] w-full">
                    <div class="flex flex-col gap-3">
                        <label class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Full Name</label>
                        <input type="text" placeholder="John Rambo"
                            class="w-full h-16 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a7369]" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Email Address</label>
                        <input type="text" class="w-full h-16 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a7369]" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Company Name</label>
                        <input type="text" class="w-full h-16 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a7369]" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Project Budget (USD)</label>
                        <input type="text" class="w-full h-16 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a7369]" />
                    </div>

                    <div class=" border-b-[0.5px] pt-4 pb-4 bg-[#00A693] hover:bg-[#1a7369] w-full text-center ">
                        <button class="font-[Neue Haas Grotesk Display Pro] font-medium text-6 ">Submit</button>
                    </div>
                 </div>
                <!-- Contact info -->
                 <div class="flex flex-col gap-[40px] w-full">
                    
                 </div>
            </div>
        </div>
    </div>
</template>