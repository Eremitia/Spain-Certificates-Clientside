<template>
    <div></div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'TawkToChat',
    setup() {
      onMounted(() => {
        // const Tawk_API = (window as any).Tawk_API || {};
        // const Tawk_LoadStart = new Date();
        const loadScript = () => {
          const s1 = document.createElement('script');
          const s0 = document.getElementsByTagName('script')[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/66d4da4250c10f7a00a2d19a/1i6nn95d5';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode?.insertBefore(s1, s0);
        };
  
        loadScript();
      });
    }
  });
  </script>
  
  <style scoped>
  </style>
  