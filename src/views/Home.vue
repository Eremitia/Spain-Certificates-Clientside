<template>
  <div>
    <HeaderComponent />
    <HeroSection />
    <Testimonials />
    <EasyProcess />
    <FAQSection />
    <AboutContactSection />
    <InfoSection />
    <Benefits />
    <FooterComponent />
    <TawkTo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue';
import Testimonials from '../components/Testimonials.vue';
import EasyProcess from '../components/EasyProcess.vue';
import FAQSection from '../components/FAQSection.vue';
import AboutContactSection from '../components/AboutContactSection.vue';
import InfoSection from '../components/InfoSection.vue';
import FooterComponent from '../components/Footer.vue';
import TawkTo from '@/components/TawkTo.vue';
import Benefits from '@/components/Benefits.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroSection,
    Testimonials,
    EasyProcess,
    FAQSection,
    AboutContactSection,
    InfoSection,
    FooterComponent,
    TawkTo,
    Benefits
  },
});
</script>

<style scoped>
</style>
