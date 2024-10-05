<template>
  <section class="about-contact">
    <div class="container">
      <div class="about-contact__section about">
        <div class="about__text">
          <h2 class="about__title">Sobre nosotros</h2>
          <p class="about__description">
            Somos una empresa de consultoría dedicada a simplificar procesos complicados, incluyendo la solicitud de certificados de nacimiento. Nuestro objetivo es proporcionar a nuestros clientes una solución rápida y sencilla, ofreciendo un servicio fiable respaldado por expertos. Facilitamos la obtención de documentos esenciales, haciendo que el proceso sea más conveniente y sin complicaciones. Confíe en nosotros para simplificar sus trámites.
          </p>
          <button class="about__button" @click="irASolicitud">Iniciar El Proceso</button>
        </div>
        <div class="about__image">
          <img src="@/assets/About.png" alt="Equipo de la empresa" />
        </div>
      </div>
      <div class="about-contact__section contact">
        <div class="contact__form-container">
          <form class="contact__form" @submit.prevent="handleSubmit">
            <input v-model="name" type="text" placeholder="Completa su nombre" class="contact__input" />
            <input v-model="email" type="email" placeholder="Llene su dirección de correo electrónico" class="contact__input" />
            <textarea v-model="message" placeholder="¿Cuál es su mensaje?" class="contact__textarea"></textarea>
            <button type="submit" class="contact__button">Envíe Su Mensaje</button>
          </form>
        </div>
        <div class="contact__info">
          <h2 class="contact__title">Contacto</h2>
          <p class="contact__description">
            ¿Tiene preguntas o necesita ayuda? Póngase en contacto con nosotros a través de nuestro formulario de contacto en gestionesgob.com. Nuestro servicio de atención al cliente estará encantado de ayudarle.
          </p>
        </div>
      </div>
    </div>
    <SuccessMessage v-if="successVisible" :message="'Mensaje enviado exitosamente'" @update:visible="successVisible = $event" />
    <WarningMessage v-if="warningVisible" :message="'Todos los campos son obligatorios.'" @update:visible="warningVisible = $event" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import SuccessMessage from '@/components/SuccessMessage.vue';
import WarningMessage from '@/components/WarningMessage.vue';

export default defineComponent({
  name: 'AboutContactSection',
  components: {
    SuccessMessage,
    WarningMessage,
  },
  setup() {
    const router = useRouter();
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const successVisible = ref(false);
    const warningVisible = ref(false);

    const irASolicitud = () => {
      router.push('/solicitud');
    };

    const handleSubmit = async () => {
      if (!name.value || !email.value || !message.value) {
        warningVisible.value = true;
        return;
      }

      try {
        const response = await axios.post('/api/solicitud/contact', {
          name: name.value,
          email: email.value,
          message: message.value,
        });

        if (response.status === 201) {
          successVisible.value = true;
          name.value = '';
          email.value = '';
          message.value = '';
        }
      } catch (error) {
        console.error('Error al enviar el mensaje de contacto:', error);
      }
    };

    return {
      name,
      email,
      message,
      successVisible,
      warningVisible,
      irASolicitud,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
@import '@/assets/css/components/contact.css';
</style>
