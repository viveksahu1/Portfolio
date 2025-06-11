<template>
  <h1 class="text-4xl md:text-6xl font-bold">
    <span 
      v-for="(word, index) in words" 
      :key="index"
      class="inline-block"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 150 } }"
    >
      {{ word }}&nbsp;
    </span>
  </h1>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({ text: String });

const words = computed(() => props.text.split(' '));
</script>
