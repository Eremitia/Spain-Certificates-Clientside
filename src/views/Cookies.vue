<template>
    <div>
      <HeaderComponent />
      <div class="cookies-container">
        <div class="cookies-content" v-html="cookiesHtmlContent"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderComponent from '../components/Header.vue';
  
  export default defineComponent({
    name: 'Cookies',
    components: {
      HeaderComponent,
    },
    data() {
      return {
        cookiesHtmlContent: `
          <div class="et_pb_text_inner">
          <p><span style="font-weight: 400;">Debido a la entrada en vigor de la Ley de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), establecida por la Ley 34/2002, es obligatorio obtener el consentimiento expreso del usuario de todas las páginas web que usan </span><i><span style="font-weight: 400;">cookies </span></i><span style="font-weight: 400;">prescindibles,</span> <span style="font-weight: 400;">antes de que este navegue por ellas.</span></p>
          <p><b>¿QUÉ SON LAS </b><b><i>COOKIES</i></b><b>?</b></p>
          <p><span style="font-weight: 400;">Las </span><i><span style="font-weight: 400;">cookies </span></i><span style="font-weight: 400;">y otras tecnologías similares, tales como local shared objects, flash </span><i><span style="font-weight: 400;">cookies </span></i><span style="font-weight: 400;">o píxeles, son herramientas empleadas por los servidores web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio.</span></p>
          <p><span style="font-weight: 400;">Mediante el uso de estos dispositivos se permite al servidor web recordar algunos datos concernientes al usuario, como sus preferencias para la visualización de las páginas de ese servidor, nombre y contraseña, productos que más le interesan, etc.</span></p>
          <p><span style="font-weight: 400;">Según la directiva de la UE, las </span><i><span style="font-weight: 400;">cookies </span></i><span style="font-weight: 400;">que requieren el consentimiento informado por parte del usuario son las </span><i><span style="font-weight: 400;">cookies </span></i><span style="font-weight: 400;">de analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario.</span></p>
          <p><b>TIPOS DE </b><b><i>COOKIES </i></b><b>UTILIZADAS EN ESTE SITIO WEB</b></p>
          <p><b>SEGÚN LA FINALIDAD</b></p>
          <ul>
          <li style="font-weight: 400;" aria-level="1"><b><i>Cookies </i></b><b>técnicas y funcionales</b><span style="font-weight: 400;">: son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</span></li>
          <li style="font-weight: 400;" aria-level="1"><b><i>Cookies </i></b><b>analíticas</b><span style="font-weight: 400;">: son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de </span><i><span style="font-weight: 400;">cookies</span></i><span style="font-weight: 400;"> se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</span></li>
          </ul>
          <p><b>SEGÚN LA PROPIEDAD</b></p>
          <ul>
          <li style="font-weight: 400;" aria-level="1"><b><i>Cookies</i></b><b> propias</b><span style="font-weight: 400;">: son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</span></li>
          <li style="font-weight: 400;" aria-level="1"><b><i>Cookies</i></b> <b>de terceros:</b><span style="font-weight: 400;"> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos a través de las cookies.</span></li>
          </ul>
          <p><b>SEGÚN EL PLAZO DE CONSERVACIÓN</b></p>
          <ul>
          <li style="font-weight: 400;" aria-level="1"><b><i>Cookies</i></b><b> de sesión:</b><span style="font-weight: 400;"> son un tipo de </span><i><span style="font-weight: 400;">cookies</span></i><span style="font-weight: 400;"> diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.</span></li>
          <li style="font-weight: 400;" aria-level="1"><b><i>Cookies</i></b><b> persistentes:</b><span style="font-weight: 400;"> son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un período definido por el responsable de la </span><i><span style="font-weight: 400;">cookie</span></i><span style="font-weight: 400;">, y que puede ir de unos minutos a varios años.</span></li>
          </ul>
          <p><b>TRATAMIENTO DE DATOS PERSONALES</b></p>
          <p><b>AuroraNox LLC</b><span style="font-weight: 400;">, como </span><b>Responsable del tratamiento,</b><span style="font-weight: 400;"> le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento General (UE) 2016/679, de protección de datos (RGPD) y L.O. 3/2018, de protección de datos y garantía de los derechos digitales (LOPDGDD), así como con las normativas aplicables en EE.UU., incluyendo el California Consumer Privacy Act (CCPA). Se le facilita la siguiente información del tratamiento:</span></p>
          <p><b>Fines del tratamiento: </b><span style="font-weight: 400;">según se especifica en el apartado de cookies que se utilizan en este sitio web.</span></p>
          <p><b>Legitimación del tratamiento</b><span style="font-weight: 400;">: consentimiento del interesado.</span></p>
          <p><b>Criterios de conservación de los datos</b><span style="font-weight: 400;">: según se especifica en el apartado de </span><i><span style="font-weight: 400;">cookies </span></i><span style="font-weight: 400;">utilizadas en la web.</span></p>
          <p><b>Comunicación de los datos</b><span style="font-weight: 400;">: no se comunicarán los datos a terceros, excepto en cookies propiedad de terceros o por obligación legal.</span></p>
          <p><b>Derechos que asisten al Interesado</b><span style="font-weight: 400;">: Tiene derecho a retirar su consentimiento en cualquier momento. Tiene derecho a acceder, rectificar, oponerse y suprimir sus datos, así como a la portabilidad y limitación a su tratamiento, dirigiendo comunicación a </span><a href="mailto:hello@aurlx.com"><span style="font-weight: 400;">hello@aurlx.com</span></a><span style="font-weight: 400;">. También tiene derecho a presentar una reclamación ante la Autoridad de control en la UE o ante las autoridades correspondientes en EE.UU.</span></p>
          <p>&nbsp;</p>
          <p><b>COOKIES CONTROLADAS POR EL EDITOR</b></p>
          <h4><b>Técnicas y funcionales</b></h4>
          <table>
          <tbody>
          <tr>
          <td>
          <p><b>Propiedad</b></p>
          </td>
          <td>
          <p><b>Cookie</b></p>
          </td>
          <td>
          <p><b>Finalidad</b></p>
          </td>
          <td>
          <p><b>Plazo</b></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><span style="font-weight: 400;">gestionesgob.com</span></p>
          </td>
          <td>
          <p><b>formData</b></p>
          </td>
          <td>
          <p><span style="font-weight: 400;">Cookie utilizada para almacenar la información proporcionada en los formularios del sitio web, facilitando la navegación y uso de los servicios.</span></p>
          </td>
          <td>
          <p><span style="font-weight: 400;">Sesión</span></p>
          </td>
          </tr>
          </tbody>
          </table>
          <h4><b>Analíticas</b></h4>
          <table>
          <tbody>
          <tr>
          <td>
          <p><b>Propiedad</b></p>
          </td>
          <td>
          <p><b>Cookie</b></p>
          </td>
          <td>
          <p><b>Finalidad</b></p>
          <td>
          <p><b>Plazo</b></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><span style="font-weight: 400;">Google Analytics</span></p>
          </td>
          <td>
          <p><b>_ga</b></p>
          </td>
          <td>
          <p><span style="font-weight: 400;">ID utilizado para identificar a los usuarios</span></p>
          </td>
          <td>
          <p><span style="font-weight: 400;">en un año</span></p>
          </td>
          </tr>
          </tbody>
          </table>
          <h4><b>Publicitarias</b></h4>
          <table>
          <tbody>
          <tr>
          <td>
          <p><b>Propiedad</b></p>
          </td>
          <td>
          <p><b>Cookie</b></p>
          </td>
          <td>
          <p><b>Finalidad</b></p>
          </td>
          <td>
          <p><b>Plazo</b></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><span style="font-weight: 400;">Google</span></p>
          </td>
          <td>
          <p><b>_gcl_au</b></p>
          </td>
          <td>
          <p><span style="font-weight: 400;">Utilizado por Google AdSense para experimentar con la publicidad a través de la eficiencia de sitios web que utilizan sus servicios.</span></p>
          <td>
          <p><span style="font-weight: 400;">en 3 meses</span></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p><span style="font-weight: 400;">&nbsp;</span></p>
          <p><span style="font-weight: 400;">&nbsp;</span><b>COOKIES DE TERCEROS NO CONTROLADAS POR EL EDITOR</b></p>
          <p><span style="font-weight: 400;">Los servicios de terceros son ajenos al control del editor. Los proveedores pueden modificar en todo momento sus condiciones de servicio, finalidad y utilización de las cookies, etc.</span></p>
          <p><b>Proveedores externos de este sitio web:</b><span style="font-weight: 400;">&nbsp;&nbsp;</span></p>
          <table>
          <tbody>
          <tr>
          <td>
          <p><b>Editor</b></p>
          </td>
          <td>
          <p><b>Política de privacidad</b></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><span style="font-weight: 400;">Google Analytics</span></p>
          </td>
          <td>
          <p><a href="https://privacy.google.com/take-control.html"><span style="font-weight: 400;">https://privacy.google.com/take-control.html</span></a></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><span style="font-weight: 400;">Google</span></p>
          </td>
          <td>
          <p><a href="https://privacy.google.com/take-control.html"><span style="font-weight: 400;">https://privacy.google.com/take-control.html</span></a></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p><span style="font-weight: 400;">&nbsp;</span></p>
          <p><span style="font-weight: 400;">&nbsp;</span></p>
          <table>
          <tbody>
          <tr>
          <td>
          <p><b>CÓMO GESTIONAR LAS COOKIES DESDE EL NAVEGADOR</b></p>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p>
          <table>
          <tbody>
          <tr>
          <td>
          <p><b>Eliminar las cookies del dispositivo&nbsp;</b></p>
          </td>
          <td>
          <p><span style="font-weight: 400;">Las cookies que ya están en un dispositivo se pueden eliminar borrando el historial del navegador, con lo que se suprimen las cookies de todos los sitios web visitados.</span></p>
          <p><span style="font-weight: 400;">Sin embargo, también se puede perder parte de la información guardada (por ejemplo, los datos de inicio de sesión o las preferencias de sitio web).</span></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><b>Gestionar las cookies específicas del sitio&nbsp;</b></p>
          </td>
          <td>
          <p><span style="font-weight: 400;">Para tener un control más preciso de las cookies específicas de cada sitio, los usuarios pueden ajustar su configuración de privacidad y cookies en el navegador.</span></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><b>Bloquear las cookies&nbsp;</b></p>
          </td>
          <td>
          <p><span style="font-weight: 400;">Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen cookies en los dispositivos, eso puede obligar al ajuste manual de determinadas preferencias cada vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar correctamente.</span></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p><span style="font-weight: 400;">&nbsp;</span></p>
          <table>
          <tbody>
          <tr>
          <td>
          <p><span style="font-weight: 400;">&nbsp;</span><b>CÓMO ELIMINAR LAS COOKIES DE LOS NAVEGADORES MÁS COMUNES</b></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p>
          <table>
          <tbody>
          <tr>
          <td>
          <p><b>Chrome</b></p>
          </td>
          <td>
          <p><a href="http://support.google.com/chrome/answer/95647?hl=es"><span style="font-weight: 400;">http://support.google.com/chrome/answer/95647?hl=es</span></a></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><b>Internet Explorer. Versión 11</b></p>
          <td>
          <p><a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer"><span style="font-weight: 400;">https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer</span></a></p>
          </td>
          </tr>
          <tr>
          <td>
          <p><b>Firefox. Versión 65.0.1</b></p>
          </td>
          <td>
          <p><a href="https://www.mozilla.org/es-ES/privacy/websites/#cookies"><span style="font-weight: 400;">https://www.mozilla.org/es-ES/privacy/websites/#cookies</span></a></p>
          </td>
          </tr>
          </tbody>
          </table>
          <p>&nbsp;</p></div>
        `
      };
    },
  });
  </script>
  
  <style scoped>
  .cookies-container {
    max-width: 900px;
    margin: 60px auto;
    padding: 40px;
    background-color: #ffffff;
    border-left: 8px solid #002855;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .cookies-content {
    line-height: 2;
    color: #444444;
    font-size: 1.15rem;
    font-family: 'Georgia', serif;
  }
  
  .cookies-content p,
  .cookies-content ul,
  .cookies-content li,
  .cookies-content table {
    margin-bottom: 25px;
    text-align: justify;
    text-indent: 20px;
  }
  
  .cookies-content p:first-letter,
  .cookies-content li:first-letter {
    font-size: 1.4rem;
    font-weight: bold;
    color: #002855;
    margin-right: 5px;
  }
  </style>
  