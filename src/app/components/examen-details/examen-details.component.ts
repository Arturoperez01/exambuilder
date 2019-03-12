import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-examen-details',
  templateUrl: './examen-details.component.html',
  styleUrls: ['./examen-details.component.scss']
})
export class ExamenDetailsComponent implements OnInit {
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
