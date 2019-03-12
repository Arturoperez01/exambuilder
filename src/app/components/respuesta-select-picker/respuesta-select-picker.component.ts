import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PreguntaTipoEnum, IRespuestaItem } from '../../containers/examen-form-container/services/examen-form.interface';

@Component({
  selector: 'app-respuesta-select-picker',
  templateUrl: './respuesta-select-picker.component.html',
  styleUrls: ['./respuesta-select-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RespuestaSelectPickerComponent),
      multi: true
    }
  ]
})
export class RespuestaSelectPickerComponent implements ControlValueAccessor {
  //@Input() arreglo: AbstractControl;
  respuestas: IRespuestaItem;

  constructor() { 
    //console.log("arreglo ", this.arreglo )

  }

  changeTipo(tipo: IRespuestaItem) {
    this.respuestas = tipo;
    this.propagateChange(tipo);
  }

  propagateChange = (value: IRespuestaItem) => {};

  writeValue(value: IRespuestaItem) {
    this.respuestas = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
