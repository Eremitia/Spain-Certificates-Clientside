<template>
  <div class="form-container">
    <h2>Datos Identificativos</h2>
    <div class="form-row">
      <div class="form-field">
        <label for="tipo-certificado">Tipo de certificado<span class="required">*</span></label>
        <Dropdown id="tipo-certificado" v-model="tipoCertificado" :options="tiposCertificado" optionLabel="label"
          placeholder="Seleccionar" :class="{ 'is-invalid': tipoCertificadoError }" @blur="validateTipoCertificado" />
      </div>
      <div class="form-field">
        <label for="persona-solicitante">Persona que solicita el certificado<span class="required">*</span></label>
        <Dropdown id="persona-solicitante" v-model="personaSolicitante" :options="personasSolicitantes"
          optionLabel="label" placeholder="Seleccionar" :class="{ 'is-invalid': personaSolicitanteError }"
          @blur="validatePersonaSolicitante" />
      </div>
      <div class="form-field">
        <label for="numero-copias">Número de copias que necesita<span class="required">*</span></label>
        <Dropdown id="numero-copias" v-model="numeroCopias" :options="numerosCopias" optionLabel="label"
          placeholder="Seleccionar" :class="{ 'is-invalid': numeroCopiasError }" @blur="validateNumeroCopias" />
      </div>
      <div class="form-field">
        <label for="provincia-nacimiento">Provincia de nacimiento<span class="required">*</span></label>
        <Dropdown id="provincia-nacimiento" v-model="provinciaNacimiento" :options="provincias" optionLabel="label"
          placeholder="Seleccionar" :class="{ 'is-invalid': provinciaNacimientoError }"
          @blur="validateProvinciaNacimiento" />
      </div>
      <div class="form-field">
        <label for="ciudad-nacimiento">Ciudad donde ocurrió el nacimiento<span class="required">*</span></label>
        <InputText id="ciudad-nacimiento" v-model="ciudadNacimiento" :class="{ 'is-invalid': ciudadNacimientoError }"
          @blur="validateCiudadNacimiento" />
      </div>
      <div class="form-field">
        <label for="registro-civil">Registro civil donde se inscribió el nacimiento<span
            class="required">*</span></label>
        <InputText id="registro-civil" v-model="registroCivil" :class="{ 'is-invalid': registroCivilError }"
          @blur="validateRegistroCivil" />
      </div>
      <div class="form-field">
        <label for="fecha-anterior-1930">¿La fecha de nacimiento es anterior a 1930?<span
            class="required">*</span></label>
        <Dropdown id="fecha-anterior-1930" v-model="fechaAnterior1930" :options="opcionesSiNo" optionLabel="label"
          placeholder="Seleccionar" :class="{ 'is-invalid': fechaAnterior1930Error }"
          @blur="validateFechaAnterior1930" />
      </div>
      <div class="form-field">
        <label for="fecha-nacimiento">Fecha de nacimiento<span class="required">*</span></label>
        <InputText id="fecha-nacimiento" type="date" v-model="fechaNacimiento"
          :class="{ 'is-invalid': fechaNacimientoError }" @blur="validateFechaNacimiento" />
      </div>
      <div class="form-field">
        <label for="nombre-nacido">Nombre del Nacido<span class="required">*</span></label>
        <InputText id="nombre-nacido" v-model="nombreNacido" :class="{ 'is-invalid': nombreNacidoError }"
          @blur="validateNombreNacido" />
      </div>
      <div class="form-field">
        <label for="apellidos-nacido">Apellidos del Nacido<span class="required">*</span></label>
        <InputText id="apellidos-nacido" v-model="apellidosNacido" :class="{ 'is-invalid': apellidosNacidoError }"
          @blur="validateApellidosNacido" />
      </div>
      <div class="form-field">
        <label for="nombre-padre">Nombre y apellidos del padre<span class="required">*</span></label>
        <InputText id="nombre-padre" v-model="nombrePadre" :class="{ 'is-invalid': nombrePadreError }"
          @blur="validateNombrePadre" />
      </div>
      <div class="form-field">
        <label for="nombre-madre">Nombre y apellidos de la madre<span class="required">*</span></label>
        <InputText id="nombre-madre" v-model="nombreMadre" :class="{ 'is-invalid': nombreMadreError }"
          @blur="validateNombreMadre" />
      </div>
      <div class="form-field">
        <label for="finalidad-certificado">Finalidad con la que se pide el certificado<span
            class="required">*</span></label>
        <Dropdown id="finalidad-certificado" v-model="finalidadCertificado" :options="finalidades" optionLabel="label"
          placeholder="Seleccionar" :class="{ 'is-invalid': finalidadCertificadoError }"
          @blur="validateFinalidadCertificado" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import { provincias } from '@/common/provincias';

export default defineComponent({
  name: 'DatosSolicitante',
  components: {
    InputText,
    Dropdown,
  },
  props: {
    modelValue: Object,
  },
  setup(props, { emit }) {
    const tipoCertificado = ref(props.modelValue?.tipoCertificado || '');
    const personaSolicitante = ref(props.modelValue?.personaSolicitante || '');
    const numeroCopias = ref(props.modelValue?.numeroCopias || '');
    const provinciaNacimiento = ref(props.modelValue?.provinciaNacimiento || '');
    const ciudadNacimiento = ref(props.modelValue?.ciudadNacimiento || '');
    const registroCivil = ref(props.modelValue?.registroCivil || '');
    const fechaAnterior1930 = ref(props.modelValue?.fechaAnterior1930 || '');
    const fechaNacimiento = ref(props.modelValue?.fechaNacimiento || '');
    const finalidadCertificado = ref(props.modelValue?.finalidadCertificado || '');
    const nombreNacido = ref(props.modelValue?.nombreNacido || '');
    const apellidosNacido = ref(props.modelValue?.apellidosNacido || '');
    const nombrePadre = ref(props.modelValue?.nombrePadre || '');
    const nombreMadre = ref(props.modelValue?.nombreMadre || '');

    const tipoCertificadoError = ref(false);
    const personaSolicitanteError = ref(false);
    const numeroCopiasError = ref(false);
    const provinciaNacimientoError = ref(false);
    const ciudadNacimientoError = ref(false);
    const registroCivilError = ref(false);
    const fechaAnterior1930Error = ref(false);
    const fechaNacimientoError = ref(false);
    const finalidadCertificadoError = ref(false);
    const nombreNacidoError = ref(false);
    const apellidosNacidoError = ref(false);
    const nombrePadreError = ref(false);
    const nombreMadreError = ref(false);

    const validateTipoCertificado = () => {
      tipoCertificadoError.value = tipoCertificado.value === '';
    };

    const validatePersonaSolicitante = () => {
      personaSolicitanteError.value = personaSolicitante.value === '';
    };

    const validateNumeroCopias = () => {
      numeroCopiasError.value = numeroCopias.value === '';
    };

    const validateProvinciaNacimiento = () => {
      provinciaNacimientoError.value = provinciaNacimiento.value === '';
    };

    const validateCiudadNacimiento = () => {
      ciudadNacimientoError.value = ciudadNacimiento.value === '';
    };

    const validateRegistroCivil = () => {
      registroCivilError.value = registroCivil.value === '';
    };

    const validateFechaAnterior1930 = () => {
      fechaAnterior1930Error.value = fechaAnterior1930.value === '';
    };

    const validateFechaNacimiento = () => {
      fechaNacimientoError.value = fechaNacimiento.value === '';
    };

    const validateFinalidadCertificado = () => {
      finalidadCertificadoError.value = finalidadCertificado.value === '';
    };

    const validateNombreNacido = () => {
      nombreNacidoError.value = nombreNacido.value === '';
    };

    const validateApellidosNacido = () => {
      apellidosNacidoError.value = apellidosNacido.value === '';
    };

    const validateNombrePadre = () => {
      nombrePadreError.value = nombrePadre.value === '';
    };

    const validateNombreMadre = () => {
      nombreMadreError.value = nombreMadre.value === '';
    };

    const tiposCertificado = [
      { label: 'Certificado literal de nacimiento', value: 'certificado-literal-nacimiento' },
      { label: 'Certificado en extracto de nacimiento', value: 'certificado-extracto-nacimiento' },
      { label: 'Certificado Plurilingüe de nacimiento', value: 'certificado-plurilingue-nacimiento' },
    ];

    const personasSolicitantes = [
      { label: 'Propio', value: 'propio' },
      { label: 'Tercero', value: 'tercero' },
    ];

    const numerosCopias = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
    ];

    const opcionesSiNo = [
      { label: 'Sí', value: 'si' },
      { label: 'No', value: 'no' },
    ];

    const finalidades = [
      { label: 'Obtener primera vez Pasaporte', value: 'obtener-pasaporte' },
      { label: 'Obtener primera vez DNI', value: 'obtener-dni' },
      { label: 'Renovación por cambio de datos DNI/Pasaporte', value: 'renovacion-dni-pasaporte' },
      { label: 'Otros', value: 'Otros' },
    ];

    watch(
      () => ({
        tipoCertificado: tipoCertificado.value,
        personaSolicitante: personaSolicitante.value,
        numeroCopias: numeroCopias.value,
        provinciaNacimiento: provinciaNacimiento.value,
        ciudadNacimiento: ciudadNacimiento.value,
        registroCivil: registroCivil.value,
        fechaAnterior1930: fechaAnterior1930.value,
        fechaNacimiento: fechaNacimiento.value,
        finalidadCertificado: finalidadCertificado.value,
        nombreNacido: nombreNacido.value,
        apellidosNacido: apellidosNacido.value,
        nombrePadre: nombrePadre.value,
        nombreMadre: nombreMadre.value,
      }),
      (newValues) => {
        emit('update:modelValue', newValues);
      },
      { deep: true }
    );

    return {
      tipoCertificado,
      personaSolicitante,
      numeroCopias,
      provinciaNacimiento,
      ciudadNacimiento,
      registroCivil,
      fechaAnterior1930,
      fechaNacimiento,
      finalidadCertificado,
      nombreNacido,
      apellidosNacido,
      nombrePadre,
      nombreMadre,
      tipoCertificadoError,
      personaSolicitanteError,
      numeroCopiasError,
      provinciaNacimientoError,
      ciudadNacimientoError,
      registroCivilError,
      fechaAnterior1930Error,
      fechaNacimientoError,
      finalidadCertificadoError,
      nombreNacidoError,
      apellidosNacidoError,
      nombrePadreError,
      nombreMadreError,
      validateTipoCertificado,
      validatePersonaSolicitante,
      validateNumeroCopias,
      validateProvinciaNacimiento,
      validateCiudadNacimiento,
      validateRegistroCivil,
      validateFechaAnterior1930,
      validateFechaNacimiento,
      validateFinalidadCertificado,
      validateNombreNacido,
      validateApellidosNacido,
      validateNombrePadre,
      validateNombreMadre,
      tiposCertificado,
      personasSolicitantes,
      numerosCopias,
      provincias,
      opcionesSiNo,
      finalidades,
    };
  },
});
</script>

<style scoped>
@import '@/assets/css/DatosSolicitante.css';
</style>
