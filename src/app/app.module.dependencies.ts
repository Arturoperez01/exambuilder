import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamenFormContainerComponent } from './containers/examen-form-container/examen-form-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectedPreguntaViewerComponent } from './components/selected-pregunta-viewer/selected-pregunta-viewer.component';
import { PreguntasListComponent } from './components/pregunta-list/pregunta-list.component';
import { ExamenDetailsComponent } from './components/examen-details/examen-details.component';
import { PreguntaTipoPickerComponent } from './components/pregunta-tipo-picker/pregunta-tipo-picker.component';


export const APP_MODULE_DECLARATIONS = [
  AppComponent,
  ExamenFormContainerComponent,
  NavbarComponent,
  SelectedPreguntaViewerComponent,
  PreguntasListComponent,
  ExamenDetailsComponent,
  PreguntaTipoPickerComponent
];

export const APP_MODULE_IMPORTS = [
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  BrowserModule,
  BrowserAnimationsModule
];
