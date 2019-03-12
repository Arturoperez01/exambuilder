import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DEMO_EXAMEN } from './services/demo-examen-item';
import { PreguntaFormValidatorsService } from './services/pregunta-form-validators.service';
import { IExamenFormInterface } from './services/examen-form.interface';
import { ExamenFormService } from './services/examen-form.service';
import { ExamenLoaderService } from './services/examen-loader.service';

@Component({
  selector: 'app-examen-form-container',
  templateUrl: './examen-form-container.component.html',
  styleUrls: ['./examen-form-container.component.scss'],
  providers: [
    ExamenFormService,
    PreguntaFormValidatorsService,
    ExamenLoaderService
  ]
})
export class ExamenFormContainerComponent implements OnInit {
  editMode = false;//false;

  get form(): FormGroup {
    //console.log("Este dentro de form: ",this.examenFormService);
    return this.examenFormService.form;
  }

  get selectedPreguntaGroup(): AbstractControl {
    if (!this.examenFormService.preguntasArray.length) return;
    return this.examenFormService.preguntasArray.at(this.form.get('selectedPregunta').value);
  }

  constructor(
    private examenLoaderService: ExamenLoaderService,
    private examenFormService: ExamenFormService
  ) { }

  ngOnInit() {
    // here you can check the page url if a pizza order id was specified
    // and load it from the server
    if (this.editMode) {
      this.examenLoaderService.loadPizzaForEdit(DEMO_EXAMEN);
    }
  }

  async submit(data: IExamenFormInterface) {
    //console.log("Form: ", this.examenFormService);
    if (!this.examenFormService.isValid) {
      return;
    }

    const order: IExamenFormInterface = this.examenFormService.createExamenPlantillaDto(data);
    console.log("Este es la plantilla: ", order);
    alert(`Thanks ${order.examenDetails.titulo}, la plantilla fue creada!`);

    if (this.editMode) {
      // update api endpoint call
    } else {
      // create api endpoint call
    }
  }

  reset() {
    this.examenFormService.resetForm();
  }

  onPreguntaAdd() {
    this.examenFormService.addPregunta();
    this.examenFormService.selectPreguntaForEdit(this.examenFormService.preguntasArray.length - 1);
  }

  onPreguntaDelete(index: number) {
    this.examenFormService.deletePreguntas(index);
  }

  onPreguntaSelected(index: number) {
    this.examenFormService.selectPreguntaForEdit(index);
  }
}
