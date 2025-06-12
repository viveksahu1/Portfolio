<template>
  <section id="projects" class="py-24 md:py-32">
    <div class='container mx-auto px-6'>
      <h2 class="text-4xl md:text-6xl font-black text-center mb-12 md:mb-16 uppercase tracking-tighter" v-motion-fade-visible-once>Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a 
          href="#" 
          v-for="(project, index) in projects" 
          :key="project.title" 
          v-motion 
          :initial="{ opacity: 0.5, y: 50 }" 
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + index * 100 } }" 
          class="p-8 border border-gray-800 rounded-2xl bg-gray-900/50 flex flex-col card-interactive group card-glow"
        >   
          <h3 class="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{{ project.title }}</h3>
          <p class="text-gray-400 flex-grow">{{ project.description }}</p>
          <div class="mt-6"><span v-for="tech in project.tech" :key="tech" class="bg-gray-800 text-gray-300 text-xs font-medium me-2 px-3 py-1 rounded-full">{{ tech }}</span></div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [ { title: 'Audio/Video Components', description: 'Developed Vue.js components for recording and playing audio/video content within the browser.', tech: ['Vue.js', 'JavaScript', 'HTML5 APIs'] }, { title: 'Speech to Text Integration', description: 'A component that captures audio input and uses a speech recognition API to convert it into text in real-time.', tech: ['Vue.js', 'Web Speech API', 'JavaScript'] }, { title: 'Calendar Application', description: 'A dynamic calendar interface for scheduling and viewing events, built during my internship.', tech: ['JavaScript', 'HTML', 'CSS'] }, { title: 'Invoice Generator', description: 'A tool to create, manage, and download invoices dynamically based on user input.', tech: ['JavaScript', 'HTML', 'CSS'] }, { title: 'Responsive Dashboards', description: 'Designed and built several responsive dashboard UIs for data visualization and company metrics.', tech: ['Vue.js', 'Tailwind CSS', 'UI/UX'] }, { title: 'E-commerce Platform', description: 'Built a full-stack e-commerce site with features like product catalog, shopping cart, and checkout.', tech: ['React.js', 'Node.js', 'Express', 'MongoDB'] }, { title: 'Real-time Chat Application', description: 'A web-based chat application using WebSockets for instant messaging between users.', tech: ['Vue.js', 'Socket.io', 'Node.js'] }, { title: 'Portfolio Website', description: 'The very website you are looking at now, built to be fast, responsive, and visually appealing.', tech: ['Vue.js', 'Tailwind CSS', '@vueuse/motion'] } ];
</script>

<style scoped>
section { @apply min-h-screen relative; }
</style>
