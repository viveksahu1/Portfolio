<template>
  <section id="experience" class="py-24 md:py-32 bg-gray-900/20">
    <div class='container mx-auto px-6'>
      <h2 class="text-4xl md:text-6xl font-black text-center mb-16 uppercase tracking-tighter" v-motion-fade-visible-once>Experience</h2>
      <div class="max-w-4xl mx-auto space-y-8">
        <div v-for="(job, index) in experiences" :key="job.title" v-motion :initial="{ opacity: 0.5, y: 50 }" :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + index * 150 } }" class="p-8 border border-gray-800 rounded-2xl bg-gray-900/50 card-interactive">
          <div class="flex flex-col md:flex-row justify-between md:items-start gap-4">
            <div><h3 class="text-2xl font-bold">{{ job.title }}</h3><p class="text-lg text-indigo-400 font-semibold">{{ job.company }}</p></div>
            <p class="text-md text-gray-500 font-medium flex-shrink-0">{{ job.dates }}</p>
          </div>
          <ul class="mt-6 space-y-3 text-gray-400 list-disc list-inside"><li v-for="task in job.tasks" :key="task">{{ task }}</li></ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [ { title: 'Associate Software Developer', company: 'Callify.ai (Joule Pvt Ltd)', dates: 'May 2023 - Present', tasks: [ 'Developed new, efficient and well-tested code for variety of different software projects.', 'Worked closely with other team members to identify and remove bugs.', 'Integrated API for fetching candidates directly from LinkedIn.', 'Made Vue.js components for audio/video recorder/player, speech to text and many more.' ] }, { title: 'Web Developer', company: 'Callify.ai (Joule Pvt Ltd)', dates: 'June 2022 - Apr 2023', tasks: [ 'Designing user interfaces and navigation menus.', 'Writing and reviewing code for sites, mainly focused on Vue.js Framework.', 'Collaborated with designers to implement concept and design of website.', 'Worked on Email templates.' ] }, { title: 'Front-End Developer Intern', company: 'XIRCLS', dates: 'April 2022 - May 2022', tasks: [ 'Designed many dynamic and responsive pages and dashboard for the company.', 'Worked on projects like calendar and invoice generator.' ] } ];
</script>

<style scoped>
section { @apply min-h-screen relative; }
</style>
