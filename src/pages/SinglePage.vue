<template>
  <div>
    <Header />
    
    <HomeSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    
    <Footer />
  </div>
</template>

<script setup>
// Import all the section components
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import HomeSection from './sections/Home.vue';
import AboutSection from './sections/About.vue';
import ExperienceSection from './sections/Experience.vue';
import ProjectsSection from './sections/Projects.vue';
import ContactSection from './sections/Contact.vue';
</script>
