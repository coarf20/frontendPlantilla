import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";


// @ts-ignore
@Component({
  selector: 'app-acomodar-campos-checkbox-derecha',
  templateUrl: './acomodar-campos-checkbox-derecha.component.html',
  styleUrls: ['./acomodar-campos-checkbox-derecha.component.css']
})
export class AcomodarCamposCheckboxDerechaComponent {
  formulario: FormGroup;
  ordenCamposInicial: string[] = [];

  campos = [
    {id: 'mostrarCampo1', label: 'Campo 1'},
    {id: 'mostrarCampo2', label: 'Campo 2'},
    {id: 'mostrarCampo3', label: 'Campo 3'},
    {id: 'mostrarCampo4', label: 'Campo 4'},
    {id: 'mostrarCampo5', label: 'Campo 5'}
  ];

  // @ts-ignore
  constructor(private formBuilder: FormBuilder) {
    const camposForm = {};
    for (const campo of this.campos) {
      // @ts-ignore
      camposForm[campo.id] = false;
    }
    this.formulario = this.formBuilder.group(camposForm);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.campos, event.previousIndex, event.currentIndex);
  }
}
