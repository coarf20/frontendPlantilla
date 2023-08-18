import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapeleriaComponent } from './components/papeleria/papeleria.component';
import { NewPlantillaComponent } from './components/new-plantilla/new-plantilla.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MaterialModule} from "../shared/material.module";



@NgModule({
  declarations: [
    PapeleriaComponent,
    NewPlantillaComponent
  ],
    imports: [
        CommonModule,
        MatPaginatorModule,
        MaterialModule
    ]
})
export class PapeleriaModule { }
