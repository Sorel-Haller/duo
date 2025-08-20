<template>
    <div class="bg-white pt-[100px] pb-[100px] lg:pr-20 sm:pr-8 pr-5 lg:pl-20 sm:pl-8 pl-5 flex flex-col justify-center items-center">
        <!-- Article -->
        <section class="flex lg:flex-row flex-col gap-8 w-full">
            <!-- Category -->
            <div class="flex flex-col gap-5 md:w-72 w-full">
                <!-- Search -->
                 <a class="bg-[#E5F6F4] p-4 flex flex-row gap-3 cursor-pointer">
                    <p class="font-[supreme] font-normal text-[#323B50] text-[18px]">	&larr;</p>
                    <p class="font-[supreme] font-normal text-[#323B50] text-[18px]">All Blogs</p>
                 </a>
                <!-- Topics -->
                <aside class="bg-[#E5F6F4] p-6 space-y-7">
                    <h3 class="font-[supreme] font-bold text-[#004B49] text-[18px]">All Blogs</h3>
                    <ul class="font-[semibold] text-[#004B49] text-[16px] space-y-7">
                        <li><a href="#">All Topics</a></li>
                        <li><a href="#">User Research</a></li>
                        <li><a href="#">Portfolio Tips</a></li>
                        <li><a href="#">Interview Tips</a></li>
                        <li><a href="#">Website Optimization</a></li>
                        <li><a href="#">Webflow</a></li>
                        <li><a href="#">Design Strategy</a></li>
                        <li><a href="#">Design Systems</a></li>
                        <li><a href="#">UI Design</a></li>
                        <li><a href="#">UX Design</a></li>
                    </ul>
                </aside>
            </div>
            <!-- Article -->
            <article class="flex flex-col gap-4 w-full">
                <h2 class="font-[outfit] font-semibold text-[#323B50] text-[28px] sm:text-[36px]">Why are there so many Web3 startups?</h2>
                <!-- Author -->
                 <div class="flex flex-row gap-4">
                    <div class="w-12 h-12 rounded-3xl">
                        <img src="https://picsum.photos/48/48" alt="Random image" class="rounded-3xl" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="font-[supreme] font-bold text-[#312E47] text-[18px]">Al Razi Siam</p>
                        <div class="flex flex-row gap-2 text-[#818EB0] text-[16px] items-center">
                            <p>June 17, 2022</p>
                            <p>&#x2022;</p>
                            <p>5 Min Read</p>
                        </div>
                    </div>
                 </div>
                <!-- Main article -->
                <div class="flex flex-col gap-8 pb-5 w-full">
                    <figure class="w-fit">
                        <img src="https://picsum.photos/800/400" alt="Blog">
                        <figcaption class="text-right w-full text-[#546286] text-[16px] pt-4">Photo Credit : Unsplash</figcaption>
                    </figure>
                    <div class="font-[supreme] font-normal text-[#323B50] text-[18px] w-full space-y-4">
                        <p>How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product. Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.</p>
                        <p>How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product. Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.</p>
                    </div>
                </div>
                <!-- Main article -->
                <div class="flex flex-col gap-8 pb-5 w-full">
                    <figure class="w-fit">
                        <img src="https://picsum.photos/800/400" alt="Blog">
                        <figcaption class="text-right text-[#546286] text-[16px] pt-4">Photo Credit : Unsplash</figcaption>
                    </figure>
                    <div class="font-[supreme] font-normal text-[#323B50] text-[18px] w-full space-y-4">
                        <p>How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product. Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.</p>
                        <p>How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product. Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.</p>
                    </div>
                    <div class="flex flex-row p-1 gap-2 items-center justify-end">
                        <p class="font-[supreme] font-medium text-[#312E47] text-[16px]">Share with : </p>
                        <div class="flex flex-row gap-5">
                            <div class="w-8 h-8 bg-[#008576] rounded-full flex justify-center items-center">
                                <a href="#"><i class="fab fa-facebook-f text-white text-l"></i></a>
                            </div>
                            <div class="w-8 h-8 bg-[#008576] rounded-full flex justify-center items-center">
                                <a href="#"><i class="fab fa-instagram text-white text-xl"></i></a>
                            </div>
                            <div class="w-8 h-8 bg-[#008576] rounded-full flex justify-center items-center">
                                <a href="#"><i class="fab fa-linkedin-in text-white text-l"></i></a>
                            </div>
                            <div class="w-8 h-8 bg-[#008576] rounded-full flex justify-center items-center">
                                <a href="#"><i class="fab fa-twitter text-white text-l"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <!-- Other Articles -->
        <section class="pt-25 pb-25 w-full">
            <div class="flex flex-col gap-20">
                <h2 class="font-[outfit] font-semibold text-[#00211D] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px]">Other articles you might be interested</h2>
                <!-- Other blogs -->
                <div class="flex flex-col gap-20">
                    <!-- Blog 1 -->
                    <div class="flex md:flex-row flex-col gap-6">
                        <img src="https://picsum.photos/280/210" alt="" class="h-[210px] w-[280px]">
                        <div class="flex flex-col gap-2 w-full">
                            <div class="flex flex-row flex-wrap gap-3 justify-between">
                                <div class="flex flex-row gap-3">
                                    <p class="text-sm text-[#818EB0]">07, June, 2022</p>
                                    <p class="text-sm text-[#818EB0]">&#x2022;</p>
                                    <p class="text-sm text-[#818EB0]">by Al Razi Siam</p>
                                </div>
                                <p class="text-sm text-[#818EB0]">5 Min Read</p>
                            </div>
                                <h4 class="font-[outfit] font-bold text-[#323B50] text-[24px]">Top 10 UI and UX design mistakes to avoid</h4>
                                <p class="font-[supreme] font-normal text-[#546286] text-[18px]">This post could discuss the process of developing a brand identity that reflects the values and mission of a business. It could include...</p>
                                <a href="" class="text-[#323B50] font-[supreme] font-bold text-[16px] pt-3 pb-3">Read More &rarr;</a>
                        </div>
                    </div>
                    <!-- Blog 2 -->
                    <div class="flex md:flex-row flex-col gap-6">
                        <img src="https://picsum.photos/280/210" alt="" class="h-[210px] w-[280px]">
                        <div class="flex flex-col gap-2 w-full">
                            <div class="flex flex-row flex-wrap gap-3 justify-between">
                                <div class="flex flex-row gap-3">
                                    <p class="text-sm text-[#818EB0]">07, June, 2022</p>
                                    <p class="text-sm text-[#818EB0]">&#x2022;</p>
                                    <p class="text-sm text-[#818EB0]">by Al Razi Siam</p>
                                </div>
                                <p class="text-sm text-[#818EB0]">5 Min Read</p>
                            </div>
                                <h4 class="font-[outfit] font-bold text-[#323B50] text-[24px]">The importance of a strong brand identity</h4>
                                <p class="font-[supreme] font-normal text-[#546286] text-[18px]">This post could list and discuss common mistakes that businesses make when it comes to UI and UX design, and provide tips on how...</p>
                                <a href="" class="text-[#323B50] font-[supreme] font-bold text-[16px] pt-3 pb-3">Read More &rarr;</a>
                        </div>
                    </div>
                    <!-- Blog 3 -->
                    <div class="flex md:flex-row flex-col gap-6">
                        <img src="https://picsum.photos/280/210" alt="" class="h-[210px] w-[280px]">
                        <div class="flex flex-col gap-2 w-full">
                            <div class="flex flex-row flex-wrap gap-3 justify-between">
                                <div class="flex flex-row gap-3">
                                    <p class="text-sm text-[#818EB0]">07, June, 2022</p>
                                    <p class="text-sm text-[#818EB0]">&#x2022;</p>
                                    <p class="text-sm text-[#818EB0]">by Al Razi Siam</p>
                                </div>
                                <p class="text-sm text-[#818EB0]">5 Min Read</p>
                            </div>
                                <h4 class="font-[outfit] font-bold text-[#323B50] text-[24px]">The benefits of using a web framework</h4>
                                <p class="font-[supreme] font-normal text-[#546286] text-[18px]">This post could discuss the benefits of using a web framework, such as speeding up the development process or providing a consistent...</p>
                                <a href="" class="text-[#323B50] font-[supreme] font-bold text-[16px] pt-3 pb-3">Read More &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>