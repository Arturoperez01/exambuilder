import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { ExamenFormService } from '../../containers/examen-form-container/services/examen-form.service';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-selected-pregunta-viewer',
  templateUrl: './selected-pregunta-viewer.component.html',
  styleUrls: ['./selected-pregunta-viewer.component.scss']
})
export class SelectedPreguntaViewerComponent implements OnInit {
  @Input() selectedPreguntaGroup: AbstractControl;
  @Output() addPregunta = new EventEmitter();
  
  selected;

  get respuestasArray(): FormArray {
    //console.log(this.selectedPreguntaGroup);
    if (!this.selectedPreguntaGroup) return;
    //this.examenFormService.editPreguntaType(this.selectedPreguntaGroup);
    //this.examenFormService.editPreguntaType(this.selectedPreguntaGroup);
    //*/
    //this.selectedPreguntaGroup.get(['respuestas'])['controls'].map(a=>a.controls['selected'].setValue(false))
    return this.selectedPreguntaGroup.get('respuestas') as FormArray;
  }

  constructor(private examenFormService: ExamenFormService) { 
    
  }

  ngOnInit() {

  }

  cambiarTipo(){
    this.examenFormService.editPreguntaType(this.selectedPreguntaGroup);
  }
  cambiarRespuesta() {
    this.selectedPreguntaGroup.get(['respuestas'])['controls'].map(a=>a.controls['selected'].setValue(false))
    
    //this.PreguntaTipo = tipo;
  }
}
