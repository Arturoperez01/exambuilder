import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IServicioSeleccion } from '../../containers/examen-form-container/services/examen-form.interface';

const SERVICIOS = [...Object.values(IServicioSeleccion)];

@Component({
  selector: 'app-examen-details',
  templateUrl: './examen-details.component.html',
  styleUrls: ['./examen-details.component.scss']
})

export class ExamenDetailsComponent implements OnInit {
  @Input() group: FormGroup;

  //console.log(servicios);
  servicios;
  constructor( ) {
                 }

  ngOnInit() {
  }

}
