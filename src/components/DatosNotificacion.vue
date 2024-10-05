<template>
  <div class="form-container">
    <h2>Datos de envío</h2>
    <div class="form-row">
      <div class="form-field">
        <label for="nombre">Nombre<span class="required">*</span></label>
        <InputText id="nombre" v-model="nombre" :class="{ 'is-invalid': nombreError }"
          @blur="validateField('nombre')" />
        <span v-if="nombreError" class="error-message">El nombre es obligatorio</span>
      </div>
      <div class="form-field">
        <label for="apellidos">Apellidos<span class="required">*</span></label>
        <InputText id="apellidos" v-model="apellidos" :class="{ 'is-invalid': apellidosError }"
          @blur="validateField('apellidos')" />
        <span v-if="apellidosError" class="error-message">Los apellidos son obligatorios</span>
      </div>
      <div class="form-field">
        <label for="dni">DNI / NIE / Pasaporte<span class="required">*</span></label>
        <InputText id="dni" v-model="dni" :class="{ 'is-invalid': dniError }" @blur="validateField('dni')" />
        <span v-if="dniError" class="error-message">El DNI / NIE / Pasaporte es obligatorio</span>
      </div>
      <div class="form-field">
        <label for="telefono">Teléfono<span class="required">*</span></label>
        <InputText id="telefono" v-model="telefono" :class="{ 'is-invalid': telefonoError }"
          @blur="validateField('telefono')" />
        <span v-if="telefonoError" class="error-message">Este campo es obligatorio. Introduzca un número de teléfono
          válido.</span>
      </div>
      <div class="form-field">
        <label for="email">Correo electrónico<span class="required">*</span></label>
        <InputText id="email" v-model="email" :class="{ 'is-invalid': emailError }" @blur="validateField('email')" />
        <span v-if="emailError" class="error-message">Este campo es obligatorio. Introduzca un correo electrónico
          válido.</span>
      </div>
      <div class="form-field">
        <label for="direccion">Dirección<span class="required">*</span></label>
        <InputText id="direccion" v-model="direccion" :class="{ 'is-invalid': direccionError }"
          @blur="validateField('direccion')" />
        <span v-if="direccionError" class="error-message">Este campo es obligatorio. Por favor, introduzca la
          dirección.</span>
      </div>
      <div class="form-field">
        <label for="numero">Número/Casa/Piso<span class="required">*</span></label>
        <InputText id="numero" v-model="numero" :class="{ 'is-invalid': numeroError }"
          @blur="validateField('numero')" />
        <span v-if="numeroError" class="error-message">Este campo es obligatorio. Por favor, introduzca la línea de
          dirección.</span>
      </div>
      <div class="form-field">
        <label for="codigo-postal">Código postal<span class="required">*</span></label>
        <InputText id="codigo-postal" v-model="codigoPostal" :class="{ 'is-invalid': codigoPostalError }"
          @blur="validateField('codigoPostal')" />
        <span v-if="codigoPostalError" class="error-message">Este campo es obligatorio. Por favor, introduzca el código
          postal.</span>
      </div>
      <div class="form-field">
        <label for="pais">País<span class="required">*</span></label>
        <InputText id="pais" v-model="pais" :class="{ 'is-invalid': paisError }" @blur="validateField('pais')" />
        <span v-if="paisError" class="error-message">El país es obligatorio.</span>
      </div>
      <div class="form-field">
        <label for="provincia">Provincia<span class="required">*</span></label>
        <Dropdown id="provincia" v-model="provincia" :options="provincias" optionLabel="label" placeholder="Seleccionar"
          :class="{ 'is-invalid': provinciaError }" @blur="validateField('provincia')" />
        <span v-if="provinciaError" class="error-message">Este campo es obligatorio. Por favor, seleccione una
          provincia.</span>
      </div>
      <div class="form-field">
        <label for="poblacion">Población / Ciudad<span class="required">*</span></label>
        <InputText id="poblacion" v-model="poblacion" :class="{ 'is-invalid': poblacionError }"
          @blur="validateField('poblacion')" />
        <span v-if="poblacionError" class="error-message">Este campo es obligatorio. Por favor, introduzca una población
          o ciudad.</span>
      </div>
    </div>
    <div class="form-field full-width checkbox-container">
      <div class="checkbox-wrapper">
        <input type="checkbox" id="acepto-politica" v-model="aceptoPolitica" />
        <label for="acepto-politica" class="checkbox-label">
          Confirmo haber leído la <router-link to="/policy">Política de privacidad</router-link> y acepto los
          <router-link to="/terms">Términos y condiciones</router-link>.
        </label>
      </div>
      <p class="informacion-adicional">
        Información básica sobre el tratamiento de sus datos personales. Finalidad: Prestar el servicio de gestión de
        los trámites necesarios para obtener un certificado de nacimiento. Derechos: Tiene derecho a acceder,
        rectificar, oponerse y suprimir sus datos, así como a la portabilidad y limitación a su tratamiento, dirigiendo
        comunicación a info@tramitesregistrocivil.com. También tiene derecho a presentar una reclamación ante la
        Autoridad de control competente (<router-link to="https://www.aepd.es"
          target="_blank">www.aepd.es</router-link>).
        Información adicional: Puede consultar esta información más detallada, y otra información adicional, en nuestra
        <router-link to="/policy">Política de privacidad</router-link>.
      </p>
    </div>



    <div class="form-field full-width resumen-pedido">
      <div class="pedido-total">
        <span>Total:</span>
        <span>39,95€</span>
      </div>

    </div>
    <StripeCheckout />
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import { provincias } from '@/common/provincias';
import { RouterLink } from 'vue-router';
import StripeCheckout from '@/components/StripeCheckout.vue'; // Importamos el componente de Stripe

export default defineComponent({
  name: 'DatosIdentificacion',
  components: {
    InputText,
    Dropdown,
    RouterLink,
    StripeCheckout, // Registramos el componente
  },
  props: {
    modelValue: Object,
  },
  setup(props, { emit }) {
    const nombre = ref(props.modelValue?.nombre || '');
    const apellidos = ref(props.modelValue?.apellidos || '');
    const dni = ref(props.modelValue?.dni || '');
    const telefono = ref(props.modelValue?.telefono || '');
    const email = ref(props.modelValue?.email || '');
    const direccion = ref(props.modelValue?.direccion || '');
    const numero = ref(props.modelValue?.numero || '');
    const codigoPostal = ref(props.modelValue?.codigoPostal || '');
    const pais = ref(props.modelValue?.pais || '');
    const provincia = ref(props.modelValue?.provincia || '');
    const poblacion = ref(props.modelValue?.poblacion || '');
    const aceptoPolitica = ref(props.modelValue?.aceptoPolitica || false);

    const nombreError = ref(false);
    const apellidosError = ref(false);
    const dniError = ref(false);
    const telefonoError = ref(false);
    const emailError = ref(false);
    const direccionError = ref(false);
    const numeroError = ref(false);
    const codigoPostalError = ref(false);
    const paisError = ref(false);
    const provinciaError = ref(false);
    const poblacionError = ref(false);

    const validateField = (field: any) => {
      switch (field) {
        case 'nombre':
          nombreError.value = nombre.value === '';
          break;
        case 'apellidos':
          apellidosError.value = apellidos.value === '';
          break;
        case 'dni':
          dniError.value = dni.value === '';
          break;
        case 'telefono':
          telefonoError.value = telefono.value === '';
          break;
        case 'email':
          emailError.value = email.value === '';
          break;
        case 'direccion':
          direccionError.value = direccion.value === '';
          break;
        case 'numero':
          numeroError.value = numero.value === '';
          break;
        case 'codigoPostal':
          codigoPostalError.value = codigoPostal.value === '';
          break;
        case 'pais':
          paisError.value = pais.value === '';
          break;
        case 'provincia':
          provinciaError.value = provincia.value === '';
          break;
        case 'poblacion':
          poblacionError.value = poblacion.value === '';
          break;
        default:
          break;
      }
    };

    watch(
      () => ({
        nombre: nombre.value,
        apellidos: apellidos.value,
        dni: dni.value,
        telefono: telefono.value,
        email: email.value,
        direccion: direccion.value,
        numero: numero.value,
        codigoPostal: codigoPostal.value,
        pais: pais.value,
        provincia: provincia.value,
        poblacion: poblacion.value,
        aceptoPolitica: aceptoPolitica.value,
      }),
      (newValues) => {
        emit('update:modelValue', newValues);
      },
      { deep: true }
    );

    return {
      nombre,
      apellidos,
      dni,
      telefono,
      email,
      direccion,
      numero,
      codigoPostal,
      pais,
      provincia,
      poblacion,
      aceptoPolitica,
      nombreError,
      apellidosError,
      dniError,
      telefonoError,
      emailError,
      direccionError,
      numeroError,
      codigoPostalError,
      paisError,
      provinciaError,
      poblacionError,
      validateField,
      provincias,
    };
  },
});
</script>

<style scoped>
@import '@/assets/css/DatosNotificacion.css';
</style>
