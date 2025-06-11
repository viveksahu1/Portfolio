<template>
  <section class="flex flex-col items-center justify-center h-screen text-center px-6">
    <AnimatedText text="Hi, I'm Vivek Sahu 👋" />
    <p class="mt-4 text-lg text-gray-400">Front-End Developer | Vue | React | Node</p>
    <div class="mt-6">
      <a href="/resume.pdf" target="_blank" class="btn btn-primary">Download Resume</a>
    </div>
  </section>
</template>

<script setup>
import AnimatedText from '../components/AnimatedText.vue';
</script>
