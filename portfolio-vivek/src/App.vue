<template>
  <div class="min-h-screen flex flex-col bg-black text-white relative">
    <!-- Custom Magnetic Target Cursor -->
    <div ref="customCursor" class="custom-cursor">
      <div class="cursor-dot"></div>
      <div class="cursor-corner top-left"></div>
      <div class="cursor-corner top-right"></div>
      <div class="cursor-corner bottom-left"></div>
      <div class="cursor-corner bottom-right"></div>
    </div>

    <!-- Loading Fill Text Reveal -->
    <transition @after-leave="isLoaderLeaving = false">
      <Loader v-if="isLoading" :text="loaderText" />
    </transition>

    <!-- The router now loads the single page containing all sections -->
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide, nextTick } from 'vue';
import Loader from './components/Loader.vue';

// --- Loading State ---
const isLoading = ref(false);
const isLoaderLeaving = ref(false);
const loaderText = ref('Vivek Sahu'); // Default text

const showLoader = (text, scrollCallback, duration = 800) => {
  loaderText.value = text;
  isLoading.value = true;
  
  if (scrollCallback && typeof scrollCallback === 'function') {
    scrollCallback();
  }

  return new Promise(resolve => {
    setTimeout(() => {
      isLoading.value = false;
      setTimeout(resolve, 400); 
    }, duration);
  });
};
provide('showLoader', showLoader);


// --- Custom Magnetic Cursor Logic ---
const customCursor = ref(null);
const activeTarget = ref(null);

const mouse = ref({ x: 0, y: 0 });
const cursor = ref({ x: 0, y: 0, width: 20, height: 20 });
const speed = 0.15;

const onMouseMove = (e) => {
  mouse.value.x = e.clientX;
  mouse.value.y = e.clientY;
};

const animate = () => {
  if (!customCursor.value) return;

  let targetX = mouse.value.x;
  let targetY = mouse.value.y;
  let targetWidth = 20;
  let targetHeight = 20;
  
  if (activeTarget.value) {
    const rect = activeTarget.value.getBoundingClientRect();
    targetX = rect.left + rect.width / 2;
    targetY = rect.top + rect.height / 2;
    targetWidth = rect.width + 20;
    targetHeight = rect.height + 20;
    customCursor.value.classList.add('hover');
  } else {
    customCursor.value.classList.remove('hover');
  }

  cursor.value.x += (targetX - cursor.value.x) * speed;
  cursor.value.y += (targetY - cursor.value.y) * speed;
  cursor.value.width += (targetWidth - cursor.value.width) * speed;
  cursor.value.height += (targetHeight - cursor.value.height) * speed;
  
  customCursor.value.style.width = `${cursor.value.width}px`;
  customCursor.value.style.height = `${cursor.value.height}px`;
  customCursor.value.style.transform = `translate3d(calc(${cursor.value.x}px - 50%), calc(${cursor.value.y}px - 50%), 0)`;

  requestAnimationFrame(animate);
};

const setupCursorHandlers = () => {
   document.querySelectorAll('a, button, .card-interactive').forEach(el => {
     el.addEventListener('mouseenter', () => activeTarget.value = el);
     el.addEventListener('mouseleave', () => activeTarget.value = null);
   });
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove);
  // Start the animation loop right away
  animate();
  
  // **THE FIX:** Wait a brief moment for all child components (sections) to render
  // before we search for the interactive elements to attach listeners to.
  setTimeout(setupCursorHandlers, 100);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove);
  // Ideally, you'd also cancel the requestAnimationFrame here.
});
</script>

<style>
/* --- Hide Default Cursor --- */
body, a, button, .card-interactive {
  cursor: none !important;
}

/* --- Custom Cursor Styles --- */
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: width 0.4s, height 0.4s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform, width, height;
}

.cursor-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s, transform 0.3s;
}

.custom-cursor.hover .cursor-dot {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2);
}

.cursor-corner {
    position: absolute;
    width: 15px;
    height: 15px;
    border-style: solid;
    border-color: white;
    transition: all 0.4s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.top-left { top: -5px; left: -5px; border-width: 2px 0 0 2px; }
.top-right { top: -5px; right: -5px; border-width: 2px 2px 0 0; }
.bottom-left { bottom: -5px; left: -5px; border-width: 0 0 2px 2px; }
.bottom-right { bottom: -5px; right: -5px; border-width: 0 2px 2px 0; }

.custom-cursor.hover .top-left { top: 0; left: 0; }
.custom-cursor.hover .top-right { top: 0; right: 0; }
.custom-cursor.hover .bottom-left { bottom: 0; left: 0; }
.custom-cursor.hover .bottom-right { bottom: 0; right: 0; }


@media (max-width: 768px) {
  .custom-cursor { display: none; }
  body, a, button, .card-interactive { cursor: pointer; }
}

/* Vue Transition Group Styles for the loader */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
