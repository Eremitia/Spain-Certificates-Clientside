<template>
  <div>
    <HeaderComponent />
    <div class="terms-container">
      <h1 class="terms-title">Términos y Condiciones</h1>
      <div class="terms-content" v-html="termsHtmlContent"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '../components/Header.vue';

export default defineComponent({
  name: 'TermsAndConditions',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      termsHtmlContent: `
        <div class="et_pb_text_inner">
        <p><b>Introducción</b></p>
        <p><span style="font-weight: 400;">Este documento contractual regirá las Condiciones Generales de contratación de servicios (en adelante, «Condiciones») a través del sitio web tramitesregistrocivil.com/, propiedad de AuroraNox, una entidad de tipo Single-member LLC bajo la marca comercial de TRÁMITES REGISTRO CIVIL, en adelante, PRESTADOR, cuyos datos de contacto figuran también en el Aviso Legal de esta Web.</span></p>
        <p><span style="font-weight: 400;">Estas Condiciones permanecerán publicadas en el sitio web a disposición del USUARIO para reproducirlas y guardarlas como confirmación del contrato, pudiendo ser modificadas en cualquier momento por el PRESTADOR. Es responsabilidad del USUARIO leerlas periódicamente, ya que resultarán aplicables aquellas que se encuentren vigentes en el momento de realización de pedidos.</span></p>
        <p><span style="font-weight: 400;">Los contratos no estarán sujetos a formalidad alguna con excepción de los supuestos expresamente señalados en las leyes estatales y federales de EE.UU., así como en el Código de Comercio de Delaware, y en otras leyes especiales aplicables en jurisdicciones adicionales.</span></p>
        <p><span style="font-weight: 400;">La aceptación de este documento conlleva que el USUARIO:</span></p>
        <ul>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Ha leído, entiende y comprende lo aquí expuesto.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Es una persona con capacidad suficiente para contratar según la legislación aplicable en su lugar de residencia.</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Asume todas las obligaciones aquí dispuestas.</span></li>
        </ul>
        <p><span style="font-weight: 400;">Estas condiciones tendrán un período de validez indefinido y serán aplicables a todas las contrataciones realizadas a través del sitio web del PRESTADOR.</span></p>
        <p><span style="font-weight: 400;">El PRESTADOR informa de que es responsable y conoce la legislación vigente tanto en los Estados Unidos como en la Unión Europea, y se reserva el derecho de modificar unilateralmente las condiciones, sin que ello pueda afectar a los términos y condiciones que fueron implementados previamente a la modificación.</span></p>
        <p><b>Identidad de las partes contratantes</b></p>
        <p><span style="font-weight: 400;">Por un lado, el PRESTADOR de los servicios contratados por el USUARIO es AuroraNox, con domicilio social en 254 Chapman Rd, Ste 208 #19252, Newark, Delaware 19702, Estados Unidos.</span></p>
        <p><span style="font-weight: 400;">Y de otro, el USUARIO, que es responsable de la veracidad de los datos personales facilitados al PRESTADOR.</span></p>
        <p><b>Objeto del contrato</b></p>
        <p><span style="font-weight: 400;">El presente contrato tiene por objeto regular la relación contractual de compraventa nacida entre el PRESTADOR y el USUARIO en el momento en que este acepta durante el proceso de contratación en línea la casilla correspondiente.</span></p>
        <p><span style="font-weight: 400;">La relación contractual de compraventa conlleva la entrega, a cambio de un precio determinado y públicamente expuesto a través del sitio web, de un servicio concreto.</span></p>
        <p>&nbsp;</p>
        <p><b>Rectificación de los datos</b></p>
        <p><span style="font-weight: 400;">Cuando el USUARIO identifique errores en los datos publicados en el sitio web o en los documentos generados por la relación contractual, podrá notificarlo al correo hello@aurlx.com para que AuroraNox los corrija a la mayor brevedad posible.</span></p>
        <p><span style="font-weight: 400;">El USUARIO podrá mantener actualizados sus datos accediendo a su cuenta de usuario.</span></p>
        <p><b>Procedimiento de contratación</b></p>
        <p><span style="font-weight: 400;">El USUARIO, para poder acceder a los servicios que ofrece el PRESTADOR, deberá ser mayor de edad y cumplimentar el formulario de solicitud de certificado de nacimiento correspondiente. Por ello, el USUARIO deberá proporcionar de manera libre y voluntaria los datos personales que se le requerirán, los cuales se tratarán de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (GDPR), relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), relativa a la protección de datos de carácter personal, así como en cumplimiento con la legislación de privacidad vigente en los Estados Unidos, incluyendo el California Consumer Privacy Act (CCPA) y otras leyes federales y estatales aplicables.</span></p>
        <ol>
        <li><b> CLÁUSULAS GENERALES DE CONTRATACIÓN</b></li>
        </ol>
        <p><span style="font-weight: 400;">Salvo estipulación particular por escrito, la formalización del proceso de contratación del servicio de solicitud de certificado de nacimiento supondrá la aceptación por parte del USUARIO de estas condiciones legales. Ninguna estipulación hecha por el USUARIO podrá diferir de las del PRESTADOR si no ha sido expresamente aceptada por adelantado y por escrito por el PRESTADOR.</span></p>
        <p><span style="font-weight: 400;">&nbsp;</span></p>
        <ol start="2">
        <li><b> EJECUCIÓN DEL SERVICIO</b></li>
        </ol>
        <p><span style="font-weight: 400;">El PRESTADOR no comenzará a ejecutar ningún servicio hasta que haya comprobado que se ha realizado el pago.&nbsp;</span></p>
        <p><span style="font-weight: 400;">Una vez procesado el pedido y recibido el pago, el sistema envía instantáneamente un correo electrónico al departamento de gestión del PRESTADOR y otro al correo del USUARIO confirmando la realización de la solicitud. El trámite se realizará en un plazo máximo de 24h por parte del prestador, y una vez realizado, se enviará correo al usuario que incluirá justificante y número de referencia del certificado. En este momento se habrá prestado el servicio por parte del PRESTADOR, ya que el envío final del documento dependerá del registro correspondiente.</span></p>
        <ol start="3">
        <li><b> DERECHO DE DESISTIMIENTO&nbsp;</b></li>
        </ol>
        <p><span style="font-weight: 400;">El USUARIO dispone de un plazo de catorce días naturales, contados a partir de la fecha de recepción del producto o desde la celebración del contrato de compraventa si fuera una prestación de un servicio, para ejercer el derecho de desistimiento, regulado en las leyes de protección al consumidor del Estado de Delaware y en el artículo 102 del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios y otras leyes complementarias, en adelante RDL 1/2007, aplicable en la Unión Europea. Si el PRESTADOR no cumple con el deber de información y documentación sobre el derecho de desistimiento, el plazo para su ejercicio finalizará doce meses después de la fecha de expiración del período de desistimiento inicial, conforme a la legislación aplicable.</span></p>
        <p><span style="font-weight: 400;">El derecho de desistimiento no será aplicable una vez que haya recibido el correo con un número de referencia desde hello@aurlx.com, ya que el servicio se habrá ejecutado por el PRESTADOR, y aplicará la excepción expuesta en la normativa correspondiente de Delaware y en el artículo 103 a), del RDL 1/2007.</span></p>
        <p><span style="font-weight: 400;">En supuestos en los que el registro no esté informado, o acontezca algún problema por el que no se pueda realizar el trámite, se informará al cliente y se le ofrecerá la opción de devolución del importe abonado.</span></p>
        <ol start="4">
        <li><span style="font-weight: 400;"><br></span><b> RECLAMACIONES Y RESOLUCIÓN DE LITIGIOS EN LÍNEA</b></li>
        </ol>
        <p><span style="font-weight: 400;">Cualquier reclamación que el USUARIO considere oportuna será atendida a la mayor brevedad posible, pudiéndose realizar en las siguientes direcciones de contacto:</span></p>
        <ul>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Postal: AuroraNox, con domicilio en 254 Chapman Rd, Ste 208 #19252, Newark, Delaware 19702, Estados Unidos</span></li>
        <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">E-mail: hello@aurlx.com</span></li>
        </ul>
        <p><b>Resolución de litigios en línea (</b><b><i>Online Dispute Resolution</i></b><b>)</b></p>
        <p><span style="font-weight: 400;">Conforme al Art. 14.1 del Reglamento (UE) 524/2013, la Comisión Europea facilita una plataforma de acceso gratuito para la resolución de conflictos online entre el USUARIO y el PRESTADOR, sin necesidad de recurrir a los tribunales de justicia, mediante la intervención de un tercero, llamado Organismo de resolución de litigios, que actúa de intermediario entre ambos. Este organismo es neutral y dialogará con ambas partes para lograr un acuerdo, pudiendo finalmente sugerir y/o imponer una solución al conflicto.</span></p>
        <p><span style="font-weight: 400;">Enlace a la plataforma ODR: </span><a href="http://ec.europa.eu/consumers/odr/"><span style="font-weight: 400;">http://ec.europa.eu/consumers/odr/</span></a></p>
        <ol start="5">
        <li><b> FUERZA MAYOR</b></li>
        </ol>
        <p><span style="font-weight: 400;">Las partes no incurrirán en responsabilidad ante cualquier falta debida a causa mayor. El cumplimiento de la obligación se demorará hasta el cese del caso de fuerza mayor, según lo estipulado en la legislación aplicable en Delaware, EE.UU., y en la Unión Europea.</span></p>
        <ol start="6">
        <li><b> COMPETENCIA</b></li>
        </ol>
        <p><span style="font-weight: 400;">El USUARIO no podrá ceder, transferir o transmitir los derechos, responsabilidades y obligaciones contratados en la venta.</span></p>
        <p><span style="font-weight: 400;">Si alguna estipulación de estas condiciones fuera considerada nula o de imposible cumplimiento, la validez, legalidad y cumplimiento del resto no se verán afectados de ninguna manera, ni sufrirán modificación de ningún modo.</span></p>
        <p><span style="font-weight: 400;">El USUARIO declara haber leído, conocer y aceptar las presentes Condiciones en toda su extensión.</span></p>
        <ol start="7">
        <li><b> GENERALIDADES DE LA OFERTA</b></li>
        </ol>
        <p><span style="font-weight: 400;">Todas las ventas efectuadas por el PRESTADOR se entenderán sometidas a las presentes Condiciones.</span></p>
        <p><span style="font-weight: 400;">Dados los continuos avances técnicos y mejoras de los servicios, el PRESTADOR se reserva la facultad de modificar sus especificaciones respecto de la información facilitada en su publicidad, hasta que no afecte el valor de los servicios ofrecidos. Estas modificaciones tendrán asimismo validez en caso de que, por cualquier causa, se viera afectada la posibilidad de suministro de los servicios ofrecidos.</span></p>
        <ol start="8">
        <li><b> PRECIO Y PLAZO DE VALIDEZ DE LA OFERTA</b></li>
        </ol>
        <p><span style="font-weight: 400;">El precio indicado por el servicio incluye el Impuesto sobre el Valor Añadido (IVA) o cualquier otro impuesto que pudiera ser aplicable conforme a la legislación de Delaware, EE.UU., y la Unión Europea. Los precios pueden cambiar diariamente mientras no se realice el pedido. El método de pago permitido es la tarjeta bancaria.</span></p>
        <p><span style="font-weight: 400;">Todo pago realizado al PRESTADOR conlleva la emisión de una factura a nombre del USUARIO registrado o de la razón social que este haya informado en el momento de realizar el pedido. Esta factura se enviará</span> <span style="font-weight: 400;">a la dirección de correo electrónico proporcionada por el USUARIO.</span></p>
        <p><span style="font-weight: 400;">Para cualquier información sobre el pedido, el USUARIO podrá contactar a través del correo electrónico a la dirección </span><a href="mailto:hello@aurlx.com"><span style="font-weight: 400;">hello@aurlx.com</span></a><span style="font-weight: 400;">.</span></p>
        <p><b>Medidas de seguridad</b></p>
        <p><span style="font-weight: 400;">El sitio web utiliza técnicas de seguridad de la información generalmente aceptadas en la industria, tales como SSL, datos introducidos en página segura, firewalls, procedimientos de control de acceso y mecanismos criptográficos, todo ello con el objeto de evitar el acceso no autorizado a los datos. Para lograr estos fines, el USUARIO acepta que el PRESTADOR obtenga datos para efecto de la correspondiente autenticación de los controles de acceso.</span></p>
        <p><span style="font-weight: 400;">El PRESTADOR se compromete a no permitir ninguna transacción que sea o sea considerada ilegal por las marcas de tarjetas de crédito o el banco adquiriente, que pueda o tenga el potencial de dañar la buena voluntad de los mismos o influir de manera negativa en ellos.</span></p>
        <p><span style="font-weight: 400;">Las siguientes actividades están prohibidas en virtud de los programas de las marcas de tarjetas: la venta u oferta de un producto o servicio que no cumpla con todas las leyes aplicables al Comprador, Banco Emisor, Comerciante o Titular de la tarjeta o tarjetas.</span></p>
        <ol start="9">
        <li><b> DISOCIACIÓN Y SUSPENSIÓN O RESCISIÓN DEL CONTRATO</b></li>
        </ol>
        <p><span style="font-weight: 400;">Si cualquiera de estos términos y condiciones se considerara ilegal, nula o por cualquier razón inaplicable, esta condición se considerará separable y no afectará la validez y aplicabilidad de ninguna de las condiciones restantes.</span></p>
        <p><span style="font-weight: 400;">TRÁMITES REGISTRO CIVIL podrá, sin previo aviso, suspender o terminar el acceso del USUARIO a sus servicios, en su totalidad o en parte, por cualquier razón válida, incluyendo, sin limitaciones, cuando el USUARIO no cumpla o siga cualquiera de las obligaciones establecidas en este documento o cualquier disposición legal, licencia, reglamento, directiva, código de prácticas o políticas de uso aplicables.</span></p>
        <p><span style="font-weight: 400;">Cuando TRÁMITES REGISTRO CIVIL ejerza cualquiera de sus derechos o facultades bajo esta Cláusula, tal ejercicio no perjudicará ni afectará el ejercicio de cualquier otro derecho, facultad o recurso que pueda estar a disposición de TRÁMITES REGISTRO CIVIL.</span></p>
        <ol start="10">
        <li><b> GARANTÍAS</b></li>
        </ol>
        <p><span style="font-weight: 400;">Las garantías responderán a lo regulado en el Título referido a «Garantías y servicios posventa» del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios y otras leyes complementarias, aplicable en la Unión Europea, así como a lo dispuesto en las leyes estatales y federales de EE.UU.</span></p>
        <ol start="11">
        <li><b> LEY APLICABLE Y JURISDICCIÓN</b></li>
        </ol>
        <p><span style="font-weight: 400;">Estas condiciones se regirán o interpretarán conforme a la legislación del estado de Delaware, EE.UU., en aquello que no esté expresamente establecido, sin perjuicio de la aplicación de la normativa de la Unión Europea cuando sea relevante para usuarios en esa jurisdicción. Cualquier controversia que pudiera suscitarse de la prestación de los productos o servicios objeto de estas Condiciones se someterá a los juzgados y tribunales competentes de Delaware, o a los de la jurisdicción correspondiente en la Unión Europea, según la localización del USUARIO.</span></p>
        </div>
      `
    };
  },
});
</script>

<style scoped>
.terms-container {
  max-width: 900px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff;
  border-left: 8px solid #002855;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.terms-title {
  font-size: 2.8rem;
  margin-bottom: 30px;
  text-align: center;
  color: #002855;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.terms-content {
  line-height: 2;
  color: #444444;
  font-size: 1.15rem;
  font-family: 'Georgia', serif;
}

.terms-content p,
.terms-content ul,
.terms-content li,
.terms-content ol {
  margin-bottom: 25px;
  text-align: justify;
  text-indent: 20px;
}

.terms-content p:first-letter,
.terms-content li:first-letter,
.terms-content ol:first-letter {
  font-size: 1.4rem;
  font-weight: bold;
  color: #002855;
  margin-right: 5px;
}
</style>
