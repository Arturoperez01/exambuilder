import { Component, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PreguntaTipoEnum } from '../../containers/examen-form-container/services/examen-form.interface';

@Component({
  selector: 'app-pregunta-tipo-picker',
  templateUrl: './pregunta-tipo-picker.component.html',
  styleUrls: ['./pregunta-tipo-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PreguntaTipoPickerComponent),
      multi: true
    }
  ]
})
export class PreguntaTipoPickerComponent implements ControlValueAccessor {
  @Output() private valueChange = new EventEmitter();
  PreguntaTipo: PreguntaTipoEnum;
  PreguntaTipoEnum = PreguntaTipoEnum;

  constructor() { 
  }

  changeTipo(tipo: PreguntaTipoEnum) {
    this.PreguntaTipo = tipo;
    this.propagateChange(tipo);
    this.valueChange.emit(tipo);
  }

  propagateChange = (value: PreguntaTipoEnum) => {
  };

  writeValue(value: PreguntaTipoEnum) {
    this.PreguntaTipo = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
