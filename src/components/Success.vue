<template>
  <div class="success-message-container">
    <div class="success-message">
      <i class="fas fa-check-circle"></i>
      <h2>¡Compra realizada con éxito!</h2>
      <p>Gracias por tu compra. Te enviaremos un correo electrónico con los detalles de tu pedido.</p>
      <p>Redirigiendo en {{ counter }} segundos...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SuccessMessage',
  data() {
    return {
      counter: 15 as number,
    };
  },
  mounted() {
    this.clearLocalStorage();
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      const interval = setInterval(() => {
        this.counter--;
        if (this.counter === 0) {
          clearInterval(interval);
          this.$router.push('/');
        }
      }, 1000);
    },
    clearLocalStorage() {
      localStorage.clear();
    },
  },
});
</script>

<style scoped>
@import '@/assets/css/success.css';
</style>
