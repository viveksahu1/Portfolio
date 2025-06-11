<template>
  <section id="home" class="flex flex-col items-center justify-center text-center px-6 overflow-hidden">
    <!-- Home Content -->
    <div class="z-10 max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-8xl font-black uppercase tracking-tighter"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }">
        <span class="bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
          Vivek Sahu
        </span>
      </h1>
      <p class="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto" 
        v-motion
        :initial="{ opacity: 0, filter: 'blur(10px)' }"
        :visible-once="{ opacity: 1, filter: 'blur(0px)', transition: { delay: 600, duration: 700 } }"
      >
        A creative Front-End Developer with a passion for building beautiful and functional web experiences.
      </p>
      <div class="mt-12" v-motion :initial="{ opacity: 0, y: 50 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 900 } }">
        <a href="/Vivek-Sahu Resume.pdf" target="_blank" class="btn btn-primary">Download Resume</a>
      </div>
    </div>
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2" v-motion-fade-visible-once>
      <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center items-start p-2">
        <div class="w-1 h-2 bg-gray-600 rounded-full animate-scroll"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply min-h-screen relative;
}
.animate-gradient-x { background-size: 200% 200%; animation: gradient-x 5s ease infinite; }
@keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes scroll { 0% { transform: translateY(0); opacity: 1; } 50% { transform: translateY(10px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
.animate-scroll { animation: scroll 2s infinite; }
</style>
