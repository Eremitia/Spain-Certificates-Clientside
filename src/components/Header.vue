<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/">
          <img src="@/assets/logo2.png" alt="Logo" class="header__logo-img" />
        </router-link>
        <h1 class="header__title">Certificado Nacimiento Online</h1>
      </div>
    </div>
    <div class="header__disclaimer">
      <p>La protección de sus datos es nuestra prioridad. Cumplimos con las normativas de protección de datos en España (GDPR).</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  position: relative;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo-img {
  height: 70px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.header__logo-img:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.header__title {
  margin-left: 20px;
  font-size: 2.8rem;
  font-weight: 700;
  color: #2d3748;
  font-family: 'Roboto', sans-serif;
  transition: color 0.3s ease;
  letter-spacing: 0.5px;
}

.header__title:hover {
  color: #d52b1e;
}

.header__disclaimer {
  text-align: center;
  background-color: #f7fafc;
  padding: 15px 30px;
  font-size: 0.875rem;
  color: #4a5568;
  font-family: 'Roboto', sans-serif;
  border-top: none;
}

.header__disclaimer p {
  margin: 0;
  padding: 0;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}
</style>
