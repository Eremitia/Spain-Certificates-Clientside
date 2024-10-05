<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__section">
        <h2 class="footer__title">Sobre Nosotros</h2>
        <p class="footer__text">
          En Trámites Registro Civil, nos dedicamos a facilitar la gestión de certificados de nacimiento y otros documentos civiles. Simplificamos el proceso al reducir la cantidad de datos necesarios y ofrecemos soporte por correo electrónico para resolver todas tus dudas. Cabe destacar que somos una web externa al gobierno. Nuestro compromiso es hacer tu experiencia lo más sencilla y eficiente posible, garantizando la seguridad y confidencialidad de tu información.
        </p>
      </div>
      <div class="footer__section">
        <h2 class="footer__title">Contáctanos</h2>
        <p class="footer__text">
          Estamos disponibles para ayudarte de lunes a sábado, de 9:00 a 20:00. Puedes ponerte en contacto con nosotros exclusivamente a través del correo electrónico:
        </p>
        <p class="footer__email">
          <a href="mailto:info@tramitesregistrocivil.com">info@gestionesgob.com</a>
        </p>
      </div>
      <div class="footer__section">
        <h2 class="footer__title">Políticas legales</h2>
        <ul class="footer__links">
          <li><router-link to="/legal" class="footer__link">Aviso Legal</router-link></li>
          <li><router-link to="/terms" class="footer__link">Términos y Condiciones</router-link></li>
          <li><router-link to="/cookies-policy" class="footer__link">Política de Cookies</router-link></li>
          <li><router-link to="/policy" class="footer__link">Política de Privacidad</router-link></li>
          <li><router-link to="/declarations"  class="footer__link">Declaración Responsable</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FooterComponent',
  });
  </script>
  
  <style scoped>
  .footer {
    background-color: #0f172a;
    color: #e2e8f0;
    padding: 60px 20px;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.2);
    font-family: 'Roboto', sans-serif;
    border-top: 4px solid #1d4ed8;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer__section {
    flex: 1;
    min-width: 150px;
    margin: 20px 0;
  }
  
  .footer__title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 15px;
    color: #e2e8f0;
  }
  
  .footer__text {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 15px;
    color: #94a3b8;
  }
  
  .footer__email {
    font-size: 1rem;
    font-weight: 700;
    margin-top: 10px;
  }
  
  .footer__email a {
    color: #1d4ed8;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer__email a:hover {
    color: #93c5fd;
  }
  
  .footer__links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer__link {
    color: #94a3b8;
    text-decoration: none;
    font-size: 1rem;
    display: block;
    margin: 8px 0;
    transition: color 0.3s ease;
  }
  
  .footer__link:hover {
    color: #e2e8f0;
  }
  </style>
  