import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IRespuestaItem, PreguntaTipoEnum } from './examen-form.interface';
//import { copyFileSync } from 'fs';

@Injectable()
export class PreguntaFormValidatorsService {

  constructor() { }

  formValidator(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const errors: ValidationErrors = {};
      //f((control.get('preguntas') as FormArray).length);
      if (!(control.get('preguntas') as FormArray).length) {
        errors.noPreguntas = {
          message: 'Debes colocar una pregunta Preguntas para crear la plantilla'
        };
      }
      //*/
      return Object.keys(errors).length ? errors : null;
    };
  }

  preguntaItemValidator(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const errors: ValidationErrors = {};

      //const preguntaTipo: PreguntaTipoEnum = control.get('tipo').value;
      const preguntaRespuestas: IRespuestaItem[] = control.get('respuestas').value.find(i => i.selected);
      
      
      //console.log(control);
      if (!preguntaRespuestas) {
        errors.PreguntasTipo = {
          message: 'Debe seleccionar por lo menos 1 repuesta'
        };
      }
      //*/
      return Object.keys(errors).length ? errors : null;
    };
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
