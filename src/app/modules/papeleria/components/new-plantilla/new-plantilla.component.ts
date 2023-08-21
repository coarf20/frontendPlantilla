import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-plantilla',
  templateUrl: './new-plantilla.component.html',
  styleUrls: ['./new-plantilla.component.css']
})
export class NewPlantillaComponent implements OnInit{
  formulario: FormGroup;
  mostrarCampo1 = false;
  mostrarCampo2 = false;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      campo1: '',
      campo2: ''
      // Agrega más campos según sea necesario
    });
  }
  ngOnInit(): void {
  }

  alternarCamposVisibles() {
    this.mostrarCampo1 = !this.mostrarCampo1;
    this.mostrarCampo2 = !this.mostrarCampo2;
  }
}
