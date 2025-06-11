<template>
  <header 
    :class="['fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center transition-all duration-300', headerClass]"
  >
    <a href="#home" @click.prevent="scrollToSection('#home', 'Vivek Sahu')" class="text-xl font-bold">Vivek Sahu</a>
    <nav class="hidden md:flex items-center space-x-1 bg-gray-900/50 backdrop-blur-sm p-1 rounded-full">
      <a 
        v-for="link in links"
        :key="link.to"
        :href="link.to"
        @click.prevent="scrollToSection(link.to, link.text)"
        class="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-full transition-colors"
        :class="{ 'bg-gray-700 text-white': activeSection === link.to.substring(1) }"
      >
        {{ link.text }}
      </a>
    </nav>
    <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </button>
  </header>
  
  <transition name="slide">
    <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-black pt-20 md:hidden">
      <nav class="flex flex-col items-center space-y-8 mt-8">
        <a 
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          @click.prevent="scrollToSection(link.to, link.text, true)"
          class="text-3xl text-gray-200 hover:text-white"
        >
          {{ link.text }}
        </a>
      </nav>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, inject } from 'vue';

const showLoader = inject('showLoader');
const isMenuOpen = ref(false);

const links = [
  { to: '#home', text: 'Home' },
  { to: '#about', text: 'About' },
  { to: '#experience', text: 'Experience' },
  { to: '#projects', text: 'Projects' },
  { to: '#contact', text: 'Contact' }
];

const scrollToSection = (selector, text, fromMenu = false) => {
  if (fromMenu) {
    isMenuOpen.value = false;
  }
  
  const element = document.querySelector(selector);
  if (element) {
    const scrollFunc = () => {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };
    
    showLoader(text, scrollFunc);
  }
};

// --- Active Section Highlighting ---
const activeSection = ref('home');
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { rootMargin: '-40% 0px -60% 0px' }
  );

  const homeEl = document.querySelector('#home');
  if(homeEl) observer.observe(homeEl);

  links.forEach(link => {
    if(link.to === '#home') return;
    const el = document.querySelector(link.to);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if(observer) observer.disconnect();
});


// --- Header Style on Scroll ---
const isScrolled = ref(false);
const handleScroll = () => { isScrolled.value = window.scrollY > 10; };
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
const headerClass = computed(() => isScrolled.value ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent');
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease-out; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
</style>
