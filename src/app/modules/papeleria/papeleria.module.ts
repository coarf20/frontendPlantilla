import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapeleriaComponent } from './components/papeleria/papeleria.component';
import { NewPlantillaComponent } from './components/new-plantilla/new-plantilla.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MaterialModule} from "../shared/material.module";
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { AcomodarCamposCheckboxDerechaComponent } from './components/acomodar-campos-checkbox-derecha/acomodar-campos-checkbox-derecha.component';



@NgModule({
  declarations: [
    PapeleriaComponent,
    NewPlantillaComponent,
    AcomodarCamposCheckboxDerechaComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MaterialModule,
    RouterLink,
    ReactiveFormsModule,
  ]
})
export class PapeleriaModule { }
