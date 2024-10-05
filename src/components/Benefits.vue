<template>
    <div class="gif-container">
      <img src="@/assets/gif.gif" alt="GIF animado" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'GifDisplay',
  });
  </script>
  
  <style scoped>
  .gif-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  