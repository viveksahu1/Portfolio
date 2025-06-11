<template>
  <div class="loader-overlay">
    <div class="loader-text-container">
      <!-- Background Text (Outline) -->
      <h1 class="loader-text text-background">{{ text }}</h1>
      <!-- Foreground Text (Filled) -->
      <h1 
        class="loader-text text-foreground"
        v-motion
        :initial="{ clipPath: 'inset(0 100% 0 0)' }"
        :enter="{ clipPath: 'inset(0 0% 0 0)', transition: { duration: 600, ease: [0.76, 0, 0.24, 1] } }"
      >
        {{ text }}
      </h1>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Loading...'
  }
});
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a; /* Match the body background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.loader-text-container {
  position: relative;
}

.loader-text {
  font-size: 5vw;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  white-space: nowrap;
}

.text-background {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}

.text-foreground {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  -webkit-text-stroke: 1px white;
}
</style>
