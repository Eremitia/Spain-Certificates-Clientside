<template>
    <div v-if="clientSecret" class="checkout-container">
      <form @submit.prevent="handleSubmit" class="checkout-form">
        <div id="card-element" class="input-field"></div>
        <button type="submit" :disabled="processing" class="submit-button">
          {{ processing ? 'Procesando...' : 'Pide tu certificado ahora!' }}
        </button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
    <div v-else class="loading-message">
      <p>Cargando...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, nextTick } from 'vue';
  import { loadStripe, type Stripe, type StripeElements } from '@stripe/stripe-js';
  import axios from '../common/axios';
  
  export default defineComponent({
    name: 'StripeCheckout',
    setup() {
      const stripe = ref<Stripe | null>(null);
      const elements = ref<StripeElements | null>(null);
      const clientSecret = ref<string | null>(null);
      const error = ref<string | null>(null);
      const processing = ref(false);
  
      onMounted(async () => {
        try {
          stripe.value = await loadStripe(`${import.meta.env.VITE_STRIPE_PUBLIC_KEY}`);
          const response = await axios.post('/api/stripe/checkout/intent', {
            amount: 39950,
          });
          clientSecret.value = response.data.clientSecret;
          await nextTick();
          if (stripe.value && clientSecret.value) {
            elements.value = stripe.value.elements();
            const cardElement = elements.value.create('card');
            cardElement.mount('#card-element');
          }
        } catch (err) {
          console.log(err);
          error.value = 'Error al inicializar el pago';
        }
      });
  
      const handleSubmit = async () => {
        if (!stripe.value || !elements.value || !clientSecret.value) return;
  
        processing.value = true;
        error.value = null;
  
        const cardElement = elements.value.getElement('card');
  
        const { error: stripeError } = await stripe.value.confirmCardPayment(clientSecret.value, {
          payment_method: {
            card: cardElement!,
          },
        });
  
        if (stripeError) {
          error.value = stripeError.message!;
        } else {
          const formData = localStorage.getItem('formData');
          if (formData) {
            try {
              const parsedFormData = JSON.parse(formData);
              const response = await axios.post('/api/solicitud', parsedFormData);
              console.log(response, response.data)
              if (response.status === 200) {
                localStorage.removeItem('formData');
              }
              window.location.href = `${import.meta.env.VITE_DOMAIN_URL}/checkout/success`

            } catch (solicitudError) {
              console.error('Error al enviar la solicitud:', solicitudError);
              window.location.href = `${import.meta.env.VITE_DOMAIN_URL}/checkout/error`
            }
          }
        }
  
        processing.value = false;
      };
  
      return {
        clientSecret,
        error,
        processing,
        handleSubmit,
      };
    },
  });
  </script>
  
  <style scoped>
  .checkout-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .checkout-form {
    display: flex;
    flex-direction: column;
  }
  
  .input-field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  
  .submit-button {
    background-color: #6772e5;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:disabled {
    background-color: #aab7c4;
    cursor: not-allowed;
  }
  
  .submit-button:not(:disabled):hover {
    background-color: #5469d4;
  }
  
  .error-message {
    margin-top: 20px;
    color: #e74c3c;
    font-size: 14px;
  }
  
  .loading-message {
    text-align: center;
    font-size: 16px;
    color: #777;
  }
  </style>
  