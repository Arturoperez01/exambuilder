import { IExamenFormInterface, IPreguntaItem, PreguntaTipoEnum, IRespuestaItem } from './examen-form.interface';

export const DEMO_EXAMEN: IExamenFormInterface = {
  examenDetails: {
    titulo: 'Este es el titulo',
    //servicio: 'enel',
    id: 0,
  },
  preguntas: [{
    id: 0,
    idExam: 0,
    enunciado: "Esta pregunta es cierta?",
    alternativa: 0,
    tipo: PreguntaTipoEnum.VoF,
    respuestas: [{respuestas:true,selected:true,idPregunta:0},{respuestas:false,selected:false,idPregunta:0}] as any
  }]
};
