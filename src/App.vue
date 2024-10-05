<template>
  <div class="app">
    <router-view />
    <Cookies />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cookies from './components/Cookies.vue';

export default defineComponent({
  name: 'App',
  components: {
    Cookies
  }
});
</script>