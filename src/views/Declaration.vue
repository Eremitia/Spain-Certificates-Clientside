<template>
    <div>
      <HeaderComponent />
      <div class="declaration-container">
        <h1 class="declaration-title">Declaración Responsable</h1>
        <div class="declaration-content" v-html="declarationHtmlContent"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderComponent from '../components/Header.vue';
  
  export default defineComponent({
    name: 'DeclaracionResponsable',
    components: {
      HeaderComponent,
    },
    data() {
      return {
        declarationHtmlContent: `
          <div class="et_pb_text_inner">
          <div>No se consideran incluidos en el grupo «Representante Legal» los siguientes:</div>
          <p><strong>–&nbsp;</strong>El representante legal que ejerce la tutela, que debe aportar la documentación que le acredite como representante legal si no constara ya en el Registro.</p>
          <p><strong>–&nbsp;</strong>El representante voluntario que actúa por mandato civil o administrativo (abogado, procurador, autorizado o Gestores Administrativos) que tiene que acompañar a la solicitud el documento que le faculta como autorizado (poder notarial, designación del turno de AJG, autorización administrativa…).</p>
          <p><strong>–&nbsp;</strong>Progenitores cuando los hijos sean mayores de edad</p>
          <div>Se previene al solicitante de que si no explica causa justificativa, necesidad y destinatario, la solicitud será denegada.</div>
          <p>&nbsp;</p>
          <div>
          <p>Durante el periodo de convivencia de las leyes de 8 de Junio de 1957 sobre el Registro Civil, y 20/2011, de 21 de Julio, del Registro Civil, en el que se está implantando de forma progresiva el nuevo modelo registral, solo tendrán que aportar estos documentos acreditativos si la oficina que tramite el expediente ya esté bajo el mandato de la Ley 20/2011.</p>
          <p class="parrafoPoliticas">Se previene al solicitante de que si no explica causa justificativa, necesidad y destinatario en la anterior declaración responsable, la solicitud será denegada.</p>
          <p class="parrafoPoliticas">El solicitante, declara bajo su responsabilidad que los datos y manifestaciones que se contienen en este documento son ciertos, considera que cuenta con interés legítimo para efectuar la solicitud en virtud de lo anteriormente indicado y es conocedor de las consecuencias, incluso penales, en que podría incurrir en caso contrario. Además el solicitante debe tener en cuenta que la certificación que, en su caso, se le entregue, no podrá ser empleada para otros fines y destino distintos a los indicados en esta solicitud. De no cumplir alguna de estas premisas, el solicitante responderá de los perjuicios que el sujeto inscrito pudiera sufrir.</p>
          </div>
          </div>
        `
      };
    },
  });
  </script>
  
  <style scoped>
  .declaration-container {
    max-width: 900px;
    margin: 60px auto;
    padding: 40px;
    background-color: #ffffff;
    border-left: 8px solid #002855;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .declaration-title {
    font-size: 2.8rem;
    margin-bottom: 30px;
    text-align: center;
    color: #002855;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .declaration-content {
    line-height: 2;
    color: #444444;
    font-size: 1.15rem;
    font-family: 'Georgia', serif;
  }
  
  .declaration-content p,
  .declaration-content ul,
  .declaration-content li,
  .declaration-content div {
    margin-bottom: 25px;
    text-align: justify;
    text-indent: 20px;
  }
  
  .declaration-content p:first-letter,
  .declaration-content li:first-letter,
  .declaration-content div:first-letter {
    font-size: 1.4rem;
    font-weight: bold;
    color: #002855;
    margin-right: 5px;
  }
  
  .parrafoPoliticas {
    margin-top: 20px;
  }
  </style>
  