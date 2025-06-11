<template>
  <section id="contact" class="py-24 md:py-32 bg-gray-900/20">
    <div class='container mx-auto px-6'>
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter" v-motion-fade-visible-once>Get In Touch</h2>
        <p class="text-xl text-gray-400 mb-12" v-motion-fade-visible-once :delay="200">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
        <div v-motion-fade-visible-once :delay="400"><a href="mailto:Sahuv041@gmail.com" class="btn btn-primary text-lg">Say Hello</a></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { @apply min-h-screen relative; }
</style>
