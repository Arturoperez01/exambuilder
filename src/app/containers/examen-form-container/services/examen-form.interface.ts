export interface IExamenFormInterface {
  selectedPregunta?: IPreguntaItem;
  preguntas: IPreguntaItem[];
  examenDetails: IExamenDetails;
}

export interface IRespuestaItem {
  id: number;
  respuesta: string | boolean;
  selected: boolean;
  idPregunta: number;
}

export interface IPreguntaItem {
  id: number;
  idExam: number;
  enunciado: string; 
  tipo: PreguntaTipoEnum;
  alternativa: number;
  /**
   * A small hack for imitating a different model returned from server,
   * for the simplicity sake the same interface was used.
   * In real life the server model may vary from the form model.
   * In this case you need to maintain both the server model interface and the client form interface.
   */
  respuestas: IRespuestaItem[]  ;
}

export interface IExamenDetails {
  id: number;
  titulo: string;
  servicio: string;
}

export enum PreguntaTipoEnum {
  VoF = 0, //verdadero o falso
  Seleccion = 1 // Seleccion simple
}
/*
export enum RespuestavofEnum {
  //SAUSAGE = {name: 'Sausage', selected: 'true'},
  VERDADERO = true,
  FALSO = false
}
//*/

export const IRespuestaSeleccionEnum  = {
  pregunta1 : {respuesta: null, selected: 'false'},
  pregunta2 : {respuesta: null, selected: 'false'},
  pregunta3 : {respuesta: null, selected: 'false'},
  pregunta4 : {respuesta: null, selected: 'false'}
}

export const IRespuestaVOFEnum  = {
  V : {respuesta: 'Verdadero', selected: 'false'},
  F : {respuesta: 'Falso', selected: 'false'}
}
//*/