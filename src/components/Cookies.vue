<template>
    <div v-if="showPopup" class="cookie-overlay">
      <div class="cookie-popup">
        <p>Este sitio utiliza cookies para mejorar tu experiencia. Acepta o rechaza las cookies para continuar navegando.</p>
        <div class="button-group">
          <button class="primary" @click="acceptCookies">Aceptar</button>
          <button class="secondary" @click="rejectCookies">Rechazar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    setup() {
      const showPopup = ref<boolean>(false);
  
      onMounted(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
          showPopup.value = true;
        }
      });
  
      const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        showPopup.value = false;
      };
  
      const rejectCookies = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        showPopup.value = false;
      };
  
      return {
        showPopup,
        acceptCookies,
        rejectCookies
      };
    }
  });
  </script>
  
  <style scoped>
  .cookie-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Fondo oscuro semitransparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Asegura que esté por encima de todo */
    backdrop-filter: blur(5px); /* Desenfoque del fondo */
  }
  
  .cookie-popup {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    width: 100%;
    z-index: 10000;
  }
  
  .cookie-popup p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 45%;
  }
  
  button.primary {
    background-color: #007bff;
    color: white;
    border: none;
  }
  
  button.primary:hover {
    background-color: #0056b3;
  }
  
  button.secondary {
    background-color: #6c757d;
    color: white;
    border: none;
  }
  
  button.secondary:hover {
    background-color: #5a6268;
  }
  </style>
  