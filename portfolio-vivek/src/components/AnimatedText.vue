<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: -30 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
    class="text-4xl md:text-6xl font-bold"
  >
    {{ text }}
  </div>
</template>

<script setup>
defineProps({ text: String })
</script>
