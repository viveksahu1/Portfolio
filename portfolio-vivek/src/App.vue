<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>
