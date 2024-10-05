<template>
  <div>
    <HeaderComponent />
    <div class="policy-container">
      <h1 class="policy-title">Políticas</h1>
      <div class="policy-content" v-html="policyHtmlContent"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '../components/Header.vue';

export default defineComponent({
  name: 'Policy',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      policyHtmlContent: `
        <div class="et_pb_text_inner">
        <p><b>INFORMACIÓN AL USUARIO</b></p>
        <p><span style="font-weight: 400;">El responsable del tratamiento le informa que, según lo dispuesto en el Reglamento General (UE) 2016/679 de protección de datos (RGPD), en la Ley Orgánica 3/2018 de protección de datos y garantía de los derechos digitales (LOPDGDD), y en las leyes de privacidad aplicables en los Estados Unidos, como el California Consumer Privacy Act (CCPA), trataremos sus datos tal y como reflejamos en la presente Política de Privacidad.</span></p>
        <p><span style="font-weight: 400;">En esta Política de Privacidad describimos cómo recogemos sus datos personales, por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales.</span></p>
        <p><span style="font-weight: 400;">Esta Política se aplica al tratamiento de sus datos personales recogidos por la empresa para la prestación de sus servicios. Si cumplimenta cualquiera de nuestros formularios, debe aceptar previamente las condiciones de esta Política y guardaremos registro de esa aceptación.</span></p>
        <ol>
        <li><b> RESPONSABLE DEL TRATAMIENTO&nbsp;</b></li>
        </ol>
        <p><span style="font-weight: 400;">El responsable del tratamiento de los datos recogidos en esta página web es:</span></p>
        <ul>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Denominación social: AuroraNox LLC</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Marca comercial: GESTIONES GOB</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Domicilio: 254 Chapman Rd, Ste 208 #19252, Newark, Delaware 19702, USA</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">e-mail: </span><a href="mailto:hello@aurlx.com"><span style="font-weight: 400;">hello@aurlx.com</span></a><span style="font-weight: 400;">&nbsp;</span></li>
        </ul>
        <ol start="2">
        <li><b> FINALIDAD, LEGITIMACIÓN Y CONSERVACIÓN</b></li>
        </ol>
        <p><span style="font-weight: 400;">Recogemos y tratamos sus datos personales a través de los formularios que se encuentran en nuestra página web:</span></p>
        <p><b>Solicitud de Certificado</b></p>
        <ul>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Finalidad: Gestión de solicitud de Certificado ante el Registro Civil u organismo equivalente.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Legitimación: El tratamiento se basa en la relación contractual que se genera al formalizar el proceso de compra.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Conservación: Sus datos se conservarán en nuestras bases de datos durante el plazo legalmente establecido en EE.UU. y la UE.</span></li>
        </ul>
        <ol start="3">
        <li><b> TIPOS DE DATOS RECOGIDOS</b></li>
        </ol>
        <p><span style="font-weight: 400;">Los tipos de datos que se solicitan son:</span></p>
        <ul>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Datos de carácter identificativo y de contacto.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Datos de circunstancias personales.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Datos bancarios.</span></li>
        </ul>
        <p><span style="font-weight: 400;">También recogemos de forma automática datos sobre su visita a nuestro sitio web, según se describe en la política de cookies.</span></p>
        <p><span style="font-weight: 400;">El responsable no recopila datos considerados especialmente sensibles como pueden ser: raza u origen étnico, opiniones políticas o creencias religiosas o filosóficas, participación en sindicatos, salud, actividad u orientación sexual, datos biométricos o genéticos.</span></p>
        <p><span style="font-weight: 400;">Es responsabilidad de cada usuario proporcionar datos que sean verdaderos, exactos, completos y actualizados y solo ellos serán responsables de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia del incumplimiento de tal obligación.</span></p>
        <p><span style="font-weight: 400;">El usuario garantiza que los datos aportados son verdaderos, exactos, completos y actualizados, siendo responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia del incumplimiento de tal obligación. En caso de que el usuario facilite datos de terceros, manifiesta contar con el consentimiento de los mismos y se compromete a trasladarle la información contenida en esta cláusula, eximiendo al responsable de cualquier responsabilidad en este sentido. No obstante, el responsable podrá llevar a cabo las verificaciones para constatar este hecho, adoptando las medidas de diligencia debida que correspondan, conforme a la normativa de protección de datos.</span></p>
        <ol start="4">
        <li><b> DESTINATARIOS DE LOS DATOS</b></li>
        </ol>
        <p><span style="font-weight: 400;">Todos los datos personales facilitados por el usuario podrán ser comunicados a:&nbsp;</span></p>
        <ul>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Registro Civil u organismo equivalente en los Estados Unidos o Europa.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Organismos públicos necesarios para prestar el servicio de gestión de trámites para la obtención del certificado de nacimiento u otros documentos.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Administraciones Públicas, en los casos previstos en la ley, con base en el cumplimiento de una obligación legal.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Juzgados y Tribunales, en los casos previstos en la ley, con base en el cumplimiento de una obligación legal.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Bancos y entidades financieras para el cobro de los servicios ofrecidos.</span></li>
        </ul>
        <p><span style="font-weight: 400;">Además, el responsable contará con la colaboración de terceros, proveedores de servicios, que pueden tener acceso a sus datos personales, los cuales tratarán, en nombre y por cuenta del mismo, datos del usuario, para la prestación de los servicios contratados.&nbsp;</span></p>
        <p><span style="font-weight: 400;">Para ello, el responsable sigue unos rigurosos procedimientos de selección de proveedores con el fin de dar cumplimiento a sus obligaciones en materia de protección de datos, incluida la suscripción del correspondiente contrato de tratamiento de datos de conformidad con el art. 28 del RGPD y las normativas aplicables en EE.UU.</span></p>
        <p><span style="font-weight: 400;">Concretamente, el responsable contará con la prestación de servicios por parte de terceros proveedores que desempeñan su actividad, a título enunciativo y no limitativo, en los sectores de actividad: asesoramiento jurídico y servicios tecnológicos e informáticos.</span></p>
        <p><span style="font-weight: 400;">En caso de transferirse datos personales a un tercer país o a una organización internacional, tendrá derecho a ser informado sobre cómo se puede acceder u obtener copia de las garantías adecuadas relativas a la transferencia.</span></p>
        <ol start="5">
        <li><b> RESPONSABILIDAD DEL USUARIO</b></li>
        </ol>
        <p><span style="font-weight: 400;">El usuario garantiza que es mayor de dieciocho (18) años en los Estados Unidos y de catorce (14) años en Europa y que los datos que facilita al responsable son verdaderos, exactos, completos y actualizados. A estos efectos, el usuario responde de la veracidad de todos los datos que comunique y mantendrá convenientemente actualizada la información facilitada, de tal forma que responda a su situación real.&nbsp;</span></p>
        <p><span style="font-weight: 400;">Del mismo modo, garantiza que ha informado a los terceros de los que facilite sus datos, en caso de hacerlo, de los aspectos contenidos en este documento. Asimismo, garantiza que ha obtenido su autorización para facilitar sus datos al responsable para los fines señalados.</span></p>
        <p><span style="font-weight: 400;">En todo caso, el Usuario será responsable de las informaciones falsas o inexactas que proporcione a través de la web, y de los daños y perjuicios, directos o indirectos, que ello cause al responsable o a terceros.</span></p>
        <ol start="6">
        <li><b> EJERCICIO DE DERECHOS</b></li>
        </ol>
        <p><span style="font-weight: 400;">Como titular de los datos, el usuario puede enviar un escrito a AuroraNox LLC, a la dirección indicada en el encabezado de la presente Política de Privacidad, o bien por medio de un correo electrónico a la dirección: </span><a href="mailto:hello@aurlx.com"><span style="font-weight: 400;">hello@aurlx.com</span></a><span style="font-weight: 400;">, en cualquier momento y de manera gratuita, para ejercer los siguientes derechos:&nbsp;</span></p>
        <ol>
        <li><span style="font-weight: 400;">a) Derecho de Acceso:</span></li>
        </ol>
        <p><span style="font-weight: 400;">Tendrá derecho a que el responsable le informe sobre si está tratando o no sus datos personales y, en tal caso, poder acceder a dichos datos y recibir información sobre los fines para los que son tratados, las categorías de datos afectados por el tratamiento, los destinatarios a los que se comunicaron sus datos personales y el plazo previsto de conservación de los datos, entre otra información.</span></p>
        <ol>
        <li><span style="font-weight: 400;">b) Derecho de Supresión y Oposición:</span></li>
        </ol>
        <p><span style="font-weight: 400;">Tendrá derecho a solicitar la supresión de datos personales siempre que se cumplan los requisitos legales o a oponerse al tratamiento en cualquier momento, por motivos relacionados con su situación particular, en caso de que el tratamiento esté basado en nuestro interés legítimo.</span></p>
        <ol>
        <li><span style="font-weight: 400;">c) Derecho de Rectificación:</span></li>
        </ol>
        <p><span style="font-weight: 400;">Tendrá derecho a solicitar la rectificación de los datos inexactos que le conciernan cuando, entre otros motivos, estos ya no sean necesarios para los fines para los que fueron recogidos.&nbsp;</span></p>
        <ol>
        <li><span style="font-weight: 400;">d) Limitación del tratamiento al tratamiento y revocación del consentimiento:</span></li>
        </ol>
        <p><span style="font-weight: 400;">En determinadas circunstancias (por ejemplo, en caso de que el solicitante impugne la exactitud de sus datos, mientras se verifica la exactitud de los mismos), podrá solicitar que se limite el tratamiento de sus datos personales, siendo estos únicamente tratados para el ejercicio o la defensa de reclamaciones.&nbsp;</span></p>
        <p><span style="font-weight: 400;">También tendrá derecho a revocar el consentimiento prestado en cualquier momento.</span></p>
        <ol>
        <li><span style="font-weight: 400;">e) Portabilidad de sus datos:</span></li>
        </ol>
        <p><span style="font-weight: 400;">Tendrá derecho a recibir los datos personales que haya facilitado al responsable en un formato estructurado, común y de lectura mecánica, y a poder transmitirlos a otro responsable del tratamiento sin que el responsable al que se los hubiera facilitado se lo impida, en los supuestos legalmente previstos a estos efectos.</span></p>
        <ol>
        <li><span style="font-weight: 400;">f) Decisiones individuales automatizadas:</span></li>
        </ol>
        <p><span style="font-weight: 400;">Asimismo, además de los derechos mencionados, en caso de que se adopten decisiones automatizadas, incluida la elaboración de perfiles, tendrá derecho a obtener intervención humana por parte del responsable y a expresar su punto de vista y a impugnar la decisión.&nbsp;</span></p>
        <p><span style="font-weight: 400;">Por último, le informamos que podrá interponer una reclamación relativa a la protección de sus datos personales ante la Agencia Española de Protección de Datos (</span><a href="http://www.aepd.es"><span style="font-weight: 400;">www.aepd.es</span></a><span style="font-weight: 400;">) para usuarios en la UE o ante las autoridades correspondientes en EE.UU., cuando el interesado considere que AuroraNox LLC ha vulnerado los derechos que le son reconocidos por la normativa aplicable en protección de datos.&nbsp;</span></p>
        <p><span style="font-weight: 400;">El plazo para hacer efectivo su derecho, como interesado, será de un mes a partir de la recepción de la solicitud, el cual puede ser prorrogado por dos meses más en supuestos de complejidad o número de solicitudes recibidas.&nbsp;</span></p>
        <ol start="7">
        <li><b> MEDIDAS DE SEGURIDAD</b></li>
        </ol>
        <p><span style="font-weight: 400;">El responsable tratará los datos del Usuario en todo momento de forma absolutamente confidencial y guardando el preceptivo deber de secreto respecto de los mismos, de conformidad con lo previsto en la normativa de aplicación en la UE y EE.UU., adoptando al efecto las medidas de índole técnica y organizativas necesarias que garanticen la seguridad de sus datos y eviten su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.</span></p>
        <ol start="8">
        <li><b> ACEPTACIÓN Y CONSENTIMIENTO</b></li>
        </ol>
        <p><span style="font-weight: 400;">El Usuario declara haber sido informado de las condiciones sobre protección de datos personales, aceptando el contenido de la presente Política de Privacidad.</span></p>
        <ol start="9">
        <li><b> OBLIGATORIEDAD DE FACILITAR LOS DATOS</b></li>
        </ol>
        <p><span style="font-weight: 400;">Los datos solicitados en los formularios son, con carácter general, obligatorios (salvo que en el campo requerido se especifique lo contrario) para cumplir con las finalidades para las que están siendo recabados.&nbsp;</span></p>
        <p><span style="font-weight: 400;">Por lo tanto, si no facilita los mismos o no los facilita correctamente no podrán atenderse sus solicitudes, sin perjuicio de que podrá visualizar libremente ciertos contenidos de nuestra web.&nbsp;</span></p>
        <ol start="10">
        <li><b> ACTUALIZACIÓN DE LA POLÍTICA DE PRIVACIDAD</b></li>
        </ol>
        <p><span style="font-weight: 400;">Nos esforzamos para mejorar continuamente nuestros servicios, procesos y la protección de los derechos de los interesados, por eso nos reservamos el derecho a revisar esta política de privacidad en el momento que lo considere oportuno, en cuyo caso se comunicará a los usuarios. Rogamos que lo compruebe de forma regular para leer la versión más reciente de la Política de Privacidad.</span></p>
        <p><span style="font-weight: 400;">Última actualización 29/07/2024</span></p>
        </div>
      `
    };
  },
});
</script>

<style scoped>
.policy-container {
  max-width: 900px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff;
  border-left: 8px solid #002855;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.policy-title {
  font-size: 2.8rem;
  margin-bottom: 30px;
  text-align: center;
  color: #002855;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.policy-content {
  line-height: 2;
  color: #444444;
  font-size: 1.15rem;
  font-family: 'Georgia', serif;
}

.policy-content p,
.policy-content ul,
.policy-content li,
.policy-content ol {
  margin-bottom: 25px;
  text-align: justify;
  text-indent: 20px;
}

.policy-content p:first-letter,
.policy-content li:first-letter,
.policy-content ol:first-letter {
  font-size: 1.4rem;
  font-weight: bold;
  color: #002855;
  margin-right: 5px;
}
</style>
