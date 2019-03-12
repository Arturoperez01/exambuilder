import { Injectable } from '@angular/core';
import { IExamenFormInterface, IPreguntaItem, PreguntaTipoEnum } from './examen-form.interface';
import { ExamenFormService } from './examen-form.service';
import { FormArray } from '@angular/forms';

@Injectable()
export class ExamenLoaderService {

  constructor(
    private examenFormService: ExamenFormService
  ) {

  }

  loadPizzaForEdit(data: IExamenFormInterface): void {
    this.examenFormService.form.patchValue(data);
  }
  /*
  prefillToppingsSelection(toppings: IToppingItem[], selectedToppings: PizzaToppingsEnum[]): IToppingItem[] {
    return toppings.map((i) => {
      i.selected = selectedToppings.includes(i.name);
      return i;
    });
  }
  //*/
}
