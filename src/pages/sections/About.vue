<template>
  <section id="about" class="py-24 md:py-32">
    <div class='container mx-auto px-6'>
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div 
          class="md:col-span-1 flex justify-center"
          v-motion 
          :initial="{ opacity: 0, scale: 0.8 }" 
          :visible-once="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, delay: 400 } }"
        >
          <img src="https://placehold.co/400x400/1f2937/7c3aed?text=VS" alt="Vivek Sahu" class="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-2xl shadow-purple-900/40">
        </div>
        <div class="md:col-span-2" v-motion-slide-left-visible-once>
          <h3 class="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">Hello! I'm Vivek.</h3>
          <p class="text-lg text-gray-400 leading-relaxed">I'm a determined and knowledgeable Front-end developer who enjoys thinking outside the box. As a recent graduate, I thrive on working with diverse personalities and am eager for the opportunity to architect and build innovative software applications.</p>
        </div>
      </div>
      
      <div class="max-w-5xl mx-auto mt-20">
        <h3 class="text-3xl font-bold text-center mb-12" v-motion-fade-visible-once>My Skillset</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-8">
          <div 
            v-for="(category, index) in skills" 
            :key="category.name"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: 300 + index * 200 } }"
            class="text-center md:p-6 md:bg-gray-900/50 md:rounded-2xl md:card-interactive md:card-glow"
          >
            <h4 class="text-xl font-bold text-indigo-400 mb-4">{{ category.name }}</h4>
            <div class="flex flex-wrap justify-center gap-3">
              <span 
                v-for="skill in category.items" 
                :key="skill" 
                class="bg-gray-800 text-gray-300 text-base font-medium px-4 py-2 rounded-lg transition-colors hover:bg-indigo-500 hover:text-white"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    name: 'Frontend',
    items: ['HTML', 'CSS', 'Javascript', 'Vue.js', 'React.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    name: 'Backend & Database',
    items: ['Node.js', 'Express', 'PHP', 'MongoDB']
  },
  {
    name: 'Tools & Design',
    items: ['Git', 'Wordpress', 'UI/UX', 'Figma', 'jQuery']
  }
];
</script>

<style scoped>
section { 
  @apply min-h-screen relative; 
}
</style>