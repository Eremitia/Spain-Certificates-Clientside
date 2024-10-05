export interface IDatosSolicitante {
  tipoCertificado: { label: string; value: string };
  personaSolicitante: { label: string; value: string };
  numeroCopias: { label: string; value: string };
  provinciaNacimiento: { label: string; value: string };
  ciudadNacimiento: string;
  registroCivil: string;
  fechaAnterior1930: { label: string; value: string };
  fechaNacimiento: string;
  nombreNacido: string;
  apellidosNacido: string;
  nombrePadre: string;
  nombreMadre: string;
  finalidadCertificado: { label: string; value: string };
}


export interface IDatosNotificacion {
  nombre: string;
  apellidos: string;
  dni: string;
  telefono: string;
  email: string;
  direccion: string;
  numero: string;
  codigoPostal: string;
  pais: string;
  provincia: { label: string; value: string } | null;
  poblacion: string;
  aceptoPolitica: boolean;
}
