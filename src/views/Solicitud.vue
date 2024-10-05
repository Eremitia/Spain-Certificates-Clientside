<template>
  <HeaderComponent />
  <div class="solicitud-container">
    <h1>Solicitar un certificado de nacimiento</h1>
    <p>Solicite ahora su certificado de nacimiento para, entre otras cosas:</p>
    <ul>
      <li>Obtener el primer documento nacional de identidad (DNI)</li>
      <li>Contraer matrimonio</li>
      <li>Acceder a un puesto de trabajo en el extranjero</li>
      <li>Reclamar una herencia</li>
      <li>Cobrar una pensión</li>
    </ul>
    <p>Dependiendo del Registro Civil, recibirá el certificado en un plazo medio de 5 a 15 días.</p>

    <div class="progress-bar">
      <div class="step" v-for="(step, index) in steps" :key="index"
        :class="{ active: index <= activeStep, completed: index < activeStep }">
        <i :class="step.icon"></i>
        <p>{{ step.label }}</p>
        <div v-if="index < steps.length - 1" class="bar" :class="{ filled: index < activeStep }"></div>
      </div>
    </div>

    <WarningMessage v-if="showWarning" :message="warningMessage" @update:visible="showWarning = false" />

    <div class="form-container">
      <DatosSolicitante v-if="activeStep === 0" v-model="datosSolicitante" />
      <div v-if="activeStep === 1">
        <DatosNotificacion v-model="datosNotificacion" />
      </div>
    </div>

    <div class="button-container">
      <button v-if="activeStep > 0" @click="prevStep" class="btn-prev"><i class="fas fa-arrow-left"></i> Atrás</button>
      <button v-if="activeStep < steps.length - 1" @click="nextStep" class="btn-next">Siguiente <i
          class="fas fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import DatosSolicitante from '@/components/DatosSolicitante.vue';
import DatosNotificacion from '@/components/DatosNotificacion.vue';
import HeaderComponent from '@/components/Header.vue';
import WarningMessage from '@/components/WarningMessage.vue';
import type { IDatosSolicitante, IDatosNotificacion } from '@/common/interfaces';

export default defineComponent({
  name: 'Solicitud',
  components: {
    DatosSolicitante,
    DatosNotificacion,
    HeaderComponent,
    WarningMessage,
  },
  setup() {
    const steps = ref([
      { label: 'Datos Identificativos', icon: 'fas fa-circle' },
      { label: 'Datos de envío', icon: 'fas fa-circle' },
    ]);

    const activeStep = ref(0);
    const showWarning = ref(false);
    const warningMessage = ref('');

    const datosSolicitante = ref<IDatosSolicitante>({
      tipoCertificado: { label: '', value: '' },
      personaSolicitante: { label: '', value: '' },
      numeroCopias: { label: '', value: '' },
      provinciaNacimiento: { label: '', value: '' },
      ciudadNacimiento: '',
      registroCivil: '',
      fechaAnterior1930: { label: '', value: '' },
      fechaNacimiento: '',
      nombreNacido: '',
      apellidosNacido: '',
      nombrePadre: '',
      nombreMadre: '',
      finalidadCertificado: { label: '', value: '' },
    });

    const datosNotificacion = ref<IDatosNotificacion>({
      nombre: '',
      apellidos: '',
      dni: '',
      telefono: '',
      email: '',
      direccion: '',
      numero: '',
      codigoPostal: '',
      pais: '',
      provincia: { label: '', value: '' },
      poblacion: '',
      aceptoPolitica: false,
    });

    const saveFormData = () => {
      const formData = {
        datosSolicitante: datosSolicitante.value,
        datosNotificacion: datosNotificacion.value,
      };
      localStorage.setItem('formData', JSON.stringify(formData));
    };

    watch(datosSolicitante, saveFormData, { deep: true });
    watch(datosNotificacion, saveFormData, { deep: true });

    const validateStep = () => {
      const missingFields = [];

      if (activeStep.value === 0) {
        if (!datosSolicitante.value.tipoCertificado?.value) missingFields.push('tipoCertificado');
        if (!datosSolicitante.value.personaSolicitante?.value) missingFields.push('personaSolicitante');
        if (!datosSolicitante.value.numeroCopias?.value) missingFields.push('numeroCopias');
        if (!datosSolicitante.value.provinciaNacimiento?.value) missingFields.push('provinciaNacimiento');
        if (!datosSolicitante.value.ciudadNacimiento) missingFields.push('ciudadNacimiento');
        if (!datosSolicitante.value.registroCivil) missingFields.push('registroCivil');
        if (!datosSolicitante.value.fechaAnterior1930?.value) missingFields.push('fechaAnterior1930');
        if (!datosSolicitante.value.fechaNacimiento) missingFields.push('fechaNacimiento');
        if (!datosSolicitante.value.nombreNacido) missingFields.push('nombreNacido');
        if (!datosSolicitante.value.apellidosNacido) missingFields.push('apellidosNacido');
        if (!datosSolicitante.value.nombrePadre) missingFields.push('nombrePadre');
        if (!datosSolicitante.value.nombreMadre) missingFields.push('nombreMadre');
        if (!datosSolicitante.value.finalidadCertificado?.value) missingFields.push('finalidadCertificado');
      } else if (activeStep.value === 1) {
        if (!datosNotificacion.value.nombre) missingFields.push('nombre');
        if (!datosNotificacion.value.apellidos) missingFields.push('apellidos');
        if (!datosNotificacion.value.dni) missingFields.push('dni');
        if (!datosNotificacion.value.telefono) missingFields.push('telefono');
        if (!datosNotificacion.value.email) missingFields.push('email');
        if (!datosNotificacion.value.direccion) missingFields.push('direccion');
        if (!datosNotificacion.value.numero) missingFields.push('numero');
        if (!datosNotificacion.value.codigoPostal) missingFields.push('codigoPostal');
        if (!datosNotificacion.value.pais) missingFields.push('pais');
        if (!datosNotificacion.value.provincia?.value) missingFields.push('provincia');
        if (!datosNotificacion.value.poblacion) missingFields.push('poblacion');
        if (!datosNotificacion.value.aceptoPolitica) missingFields.push('aceptoPolitica');
      }

      if (missingFields.length > 0) {
        console.log('Campos faltantes:', missingFields);
        return false;
      }

      return true;
    };

    const nextStep = () => {
      if (validateStep()) {
        if (activeStep.value < steps.value.length - 1) {
          activeStep.value += 1;
        }
      } else {
        warningMessage.value = 'Por favor, complete todos los campos obligatorios.';
        showWarning.value = true;
      }
    };

    const prevStep = () => {
      if (activeStep.value > 0) {
        activeStep.value -= 1;
      }
    };

    return {
      steps,
      activeStep,
      datosSolicitante,
      datosNotificacion,
      showWarning,
      warningMessage,
      nextStep,
      prevStep,
    };
  },
});
</script>

<style scoped>
@import '@/assets/css/Solicitud.css';
</style>
