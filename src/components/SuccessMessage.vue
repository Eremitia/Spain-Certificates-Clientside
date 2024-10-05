<template>
    <div class="success-message-container" v-if="visible">
      <div class="success-message">
        <i class="fas fa-check-circle"></i>
        <h2>¡Éxito!</h2>
        <p>{{ message }}</p>
        <button @click="closeMessage">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'SuccessMessage',
    props: {
      message: {
        type: String,
        required: true
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      closeMessage() {
        this.$emit('update:visible', false);
      }
    }
  }
  </script>
  
  <style scoped>
  .success-message-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    animation: fadeIn 0.5s ease-out;
  }
  
  .success-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.5s ease-out;
  }
  
  .success-message i {
    font-size: 4rem;
    color: #155724;
    margin-bottom: 20px;
  }
  
  .success-message h2 {
    margin: 10px 0;
    font-size: 2rem;
  }
  
  .success-message p {
    margin: 0 0 20px;
    font-size: 1.2rem;
  }
  
  .success-message button {
    padding: 10px 20px;
    background-color: #155724;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .success-message button:hover {
    background-color: #0b3d2b;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }
  </style>
  