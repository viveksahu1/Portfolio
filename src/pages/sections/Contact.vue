<template>
  <section id="contact" class="py-24 md:py-32 flex items-center justify-center">
    <div class='container mx-auto px-6'>
      <div 
        class="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-2xl 
               bg-gray-900/50 border border-gray-800 shadow-2xl shadow-purple-900/20"
      >
        <h2 
          class="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter" 
          v-motion-fade-visible-once
        >
          Get In Touch
        </h2>
        
        <p 
          class="text-xl text-gray-400 mb-12" 
          v-motion-fade-visible-once 
          :delay="200"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
        </p>
        
        <div 
          class="flex flex-col md:flex-row gap-6 justify-center" 
          v-motion-fade-visible-once 
          :delay="400"
        >
          <a 
            href="mailto:Sahuv041@gmail.com" 
            class="flex items-center justify-center gap-3 p-4 rounded-lg bg-gray-800/50 card-interactive card-glow text-lg"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>Sahuv041@gmail.com</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/vivek-sahu-7070b8231/https://www.linkedin.com/in/vivek-sahu-7070b8231/" 
            target="_blank" 
            class="flex items-center justify-center gap-3 p-4 rounded-lg bg-gray-800/50 card-interactive card-glow text-lg"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply min-h-screen relative;
}
</style>