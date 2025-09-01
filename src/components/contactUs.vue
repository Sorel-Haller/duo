<template>
  <div class="bg-white pt-10 pb-15 xl:pr-[140px] md:pr-20 sm:pr-8 pr-5 xl:pl-[140px] md:pl-20 sm:pl-8 pl-5">
    <div class="flex flex-col gap-15">
      <h1 class="font-[outfit] font-normal text-[#004B49] text-[36px] sm:text-[48px] md:text-[54px] lg:text-[64px]">
        Hey! Tell us about your project
      </h1>
      <div class="flex flex-col lg:flex-row gap-10">
        <!-- Contact form -->
        <form @submit.prevent="submitForm" class="flex flex-col sm:gap-15 gap-[40px] w-full">
          <div class="flex flex-col gap-3">
            <p class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Full Name</p>
            <input v-model="form.fullName" name="fullName" autocomplete="given-name"
              class="w-full h-16 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1a7369] focus:bg-white" />
          </div>

          <div class="flex flex-col gap-3">
            <p class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Email Address</p>
            <input v-model="form.email" name="email" autocomplete="email"
              class="w-full h-16 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1a7369] focus:bg-white" />
          </div>

          <div class="flex flex-col gap-3">
            <p class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Company Name</p>
            <input v-model="form.companyName" name="companyName"
              class="w-full h-16 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1a7369] focus:bg-white" />
          </div>

          <div class="flex flex-col gap-3">
            <p class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Project Budget (USD)</p>
            <input v-model="form.budget" name="budget"
              class="w-full h-16 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1a7369] focus:bg-white" />
          </div>

          <div class="flex flex-col gap-3">
            <p class="block text-4 font-[Supreme] font-normal text-[#818EB0]">Please tell us a bit about your project</p>
            <textarea v-model="form.projectDetails" name="projectDetails"
              class="w-full h-50 border border-[#00A693] bg-[#E5F6F4] text-[#030024] p-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#1a7369] resize-none focus:bg-white"></textarea>
          </div>

          <div class="border-b-[0.5px] rounded pt-4 pb-4 bg-[#00A693] hover:bg-[#1a7369] w-full text-center">
            <button type="submit"
                class="font-[Neue Haas Grotesk Display Pro] cursor-pointer font-medium text-6 text-white">
                Submit
            </button>
          </div>
        </form>
        <div class="flex flex-col gap-[40px] w-full text-right">
            <div class="flex flex-col gap-3">
                <p class="font-[supreme] font-normal text-[#008576] sm:text-[20px] text-[18px]">Or write us an email directly</p>
                <h2 class="font-[outfit] font-semibold text-[#008576] sm:text-[36px] text-[24px]">info@underrrated.com</h2>
            </div>
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-3">
                    <h3 class="font-[outfit] font-semibold text-[#008576] sm:text-[28px] text-[24px]">Phone</h3>
                    <p class="font-[supreme] font-normal text-[#008576] sm:text-[20px] text-[18px]">+880 130 3478 950 <br>+880 177 5963 777</p>
                </div>
                <div class="flex flex-col gap-3">
                    <h3 class="font-[outfit] font-semibold text-[#008576] sm:text-[28px] text-[24px]">Address</h3>
                    <p class="font-[supreme] font-normal text-[#008576] sm:text-[20px] text-[18px]">2352 Middlefield Rd, Markham <br>Ontario, Canada</p>
                </div>
                <div class="flex flex-row flex-wrap w-full justify-end gap-6 text-[#008576]">
                    <div class="w-10 h-10 bg-[#008576] rounded-full flex justify-center items-center">
                        <a href="#"><i class="fab fa-facebook-f text-white text-xl"></i></a>
                    </div>
                    <div class="w-10 h-10 bg-[#008576] rounded-full flex justify-center items-center">
                        <a href="#"><i class="fab fa-twitter text-white text-xl"></i></a>
                    </div>
                    <div class="w-10 h-10 bg-[#008576] rounded-full flex justify-center items-center">
                        <a href="#"><i class="fab fa-instagram text-white text-xl"></i></a>
                    </div>
                    <div class="w-10 h-10 bg-[#008576] rounded-full flex justify-center items-center">
                        <a href="#"><i class="fab fa-skype text-white text-xl"></i></a>
                    </div>
                    <div class="w-10 h-10 bg-[#008576] rounded-full flex justify-center items-center">
                        <a href="#"><i class="fab fa-linkedin-in text-white text-xl"></i></a>
                    </div>
                    <div class="w-10 h-10 bg-[#008576] rounded-full flex justify-center items-center">
                        <a href="#"><i class="fab fa-whatsapp text-white text-xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  fullName: '',
  email: '',
  companyName: '',
  budget: '',
  projectDetails: ''
})

const submitForm = async () => {
  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (response.ok) {
      alert('Email sent successfully!')
      // Reset form
      form.fullName = ''
      form.email = ''
      form.companyName = ''
      form.budget = ''
      form.projectDetails = ''
    } else {
      alert('Failed to send email.')
    }
  } catch (error) {
    console.error('Error sending form:', error)
    alert('An error occurred while sending the message.')
  }
}
</script>
