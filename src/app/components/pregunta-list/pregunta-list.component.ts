import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { IPreguntaItem, IRespuestaItem, PreguntaTipoEnum } from '../../containers/examen-form-container/services/examen-form.interface';
import { ExamenFormService } from '../../containers/examen-form-container/services/examen-form.service';

@Component({
  selector: 'app-pregunta-list',
  templateUrl: './pregunta-list.component.html',
  styleUrls: ['./pregunta-list.component.scss']
})
export class PreguntasListComponent implements OnInit {
  @Input() group: FormGroup;

  @Output() deletePregunta = new EventEmitter<number>();
  @Output() addPregunta = new EventEmitter();
  @Output() preguntaSelected = new EventEmitter<number>();

  get preguntasArray(): FormArray {

    return this.group.get('preguntas') as FormArray;
  }

  constructor(
    private examenFormService: ExamenFormService
  ) { }

  ngOnInit() {
  }

  getPreguntaListItemClassStates(pregunta: AbstractControl, index: number) {
    return {
      'PreguntaList__item--active': this.group.get('selectedPregunta').value === index,
      'PreguntaList__item--has-error': !pregunta.valid && pregunta.dirty
    };
  }
  //TODO: colocar el index/numero de la pregunta en el titulo
  getPreguntaTitle(pregunta: IPreguntaItem, i: number): string {
    /*
    const selectedPregunta = this.examenFormService
      .getSelectedPregunta((pregunta.respuestas as IRespuestaItem[]))
      .map(i => i.name);
    //*/
    //const respuestasString = this.getRespuestasString(selectedRespuestas);
    //console.log(pregunta);
    const tipoString = this.getPreguntaTipoTitle(pregunta.tipo);

    return `${tipoString} Pregunta no. ${i+1}`;
  }
  /*
  private getToppingsString(toppings: string[]): string {
    if (!toppings || !toppings.length) return '';

    return `- ${toppings.toString()}`;
  }
  //*/
  private getPreguntaTipoTitle(tipo: PreguntaTipoEnum): string {
    let preguntaTipo;
    //console.log(tipo);
    switch (tipo) {
      case PreguntaTipoEnum.VoF:
        preguntaTipo = 'Verdadero o Falso';
        break;
      case PreguntaTipoEnum.Seleccion:
        preguntaTipo = 'Seleccion simple';
        break;
    }

    return preguntaTipo;
  }

}
