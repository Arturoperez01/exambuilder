import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreguntaFormValidatorsService } from './pregunta-form-validators.service';
import { IExamenFormInterface, IRespuestaVOFEnum, IRespuestaSeleccionEnum, PreguntaTipoEnum, IRespuestaItem } from './examen-form.interface';
//import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class ExamenFormService {
  public availableRespuesta;//= [...Object.values(IRespuestaVOFEnum)];
  public form: FormGroup;

  constructor(
    private preguntaValidatorsService: PreguntaFormValidatorsService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      selectedPregunta: null,
      preguntas: this.fb.array([]),
      examenDetails: this.fb.group({
        titulo: [null, Validators.required],
        servicio: [null, Validators.required],
        id: [0, Validators.required]
      })
    }, {
      validator: [this.preguntaValidatorsService.formValidator()]
    });
  }

  get preguntasArray(): FormArray {
    return this.form.get('preguntas') as FormArray;
  }

  get isValid(): boolean {
    if (!this.form.valid) {
      this.preguntaValidatorsService.validateAllFormFields(this.form);
      return false;
    }

    return true;
  }

  selectPreguntaForEdit(index: number) {
    this.form.get('selectedPregunta').setValue(index);    
  }

  editPreguntaType(formulario) {
    //formulario.get('respuestas').controls.map(a=>a.removeControl());
    let respuestaFill;
    while (formulario.get('respuestas').length) {
      formulario.get('respuestas').removeAt(formulario.length-1);
    }
    //console.log("Formulario: ",formulario.get('tipo').value);
    
    if(formulario.get('tipo').value){
      respuestaFill= [...Object.values(IRespuestaSeleccionEnum)];
    }else{
      respuestaFill= [...Object.values(IRespuestaVOFEnum)];
    }
    //*/
    respuestaFill.map( a=>{
                            formulario.get('respuestas').push(this.mapToRespuestaGroup(a,formulario.get('id').value));
                          }
      
    )
    //console.log(formulario);
  }

  addPregunta(): FormGroup {
    const PreguntaGroup = this.getPreguntaFormGroup();
    //const pizzaControl = <FormArray>this.form.controls['pizzas'];

    this.preguntasArray.push(this.getPreguntaFormGroup());

    this.form.markAsDirty();

    return PreguntaGroup;
  }

  deletePreguntas(index: number): void {
    this.preguntasArray.removeAt(index);
    this.form.markAsDirty();
  }

  getPreguntaFormGroup(id= 0, idExam = 0, tipo: PreguntaTipoEnum = PreguntaTipoEnum.VoF,enunciado="introduzca la pregunta." ): FormGroup {
    //console.log(this.availableRespuesta);
    if(tipo){
      this.availableRespuesta= [...Object.values(IRespuestaSeleccionEnum)];
    }else{
      this.availableRespuesta= [...Object.values(IRespuestaVOFEnum)];
    }
    return this.fb.group({
      id: id,
      idExam: idExam,
      enunciado: [null, Validators.required],
      tipo: tipo,
      respuestas: this.mapToCheckboxArrayGroup(this.availableRespuesta,id)
    },{validator:[ this.preguntaValidatorsService.preguntaItemValidator()]});
  }

  createExamenPlantillaDto(data: IExamenFormInterface): IExamenFormInterface {
    const plantilla = {
      examenDetails: data.examenDetails,
      preguntas: data.preguntas
    };
    /*
    for (const pregunta of plantilla.preguntas) {
      pregunta.respuestas = this.getSelectedRespuestas(pregunta.respuestas as IrespuestaItem[])
        .map((i) => {
          return i.name;
        });
    }
    //*/
    return plantilla;
  }

  getSelectedRespuestas(respuestas: IRespuestaItem[]): IRespuestaItem[] {
    return respuestas.filter(i => i.selected);
  }

  resetForm() {
    while (this.preguntasArray.length) {
      this.preguntasArray.removeAt(0);
    }

    this.form.reset();
  }

  /**
   * Create a mapping of a string based dataset
   * to a form array suitable for a multi checkbox array selection.
   * this provides a more concise solution
   * as oppose to working with [true, false, false, true]
   */
  private mapToCheckboxArrayGroup(data,id): FormArray {
    return this.fb.array(data.map((i) => {
      return this.mapToRespuestaGroup(i,id);
      /*
      return this.fb.group({
        respuesta: i.respuesta,
        selected: false,
        id:id
      });
      //*/
    })
    );
  }

  private mapToRespuestaGroup(data,id): FormGroup {
      return this.fb.group({
        respuesta: [data.respuesta, Validators.required],
        selected: false,
        id:id
      })//,{validator: this.preguntaValidatorsService.preguntaItemValidator()});
  }
}
