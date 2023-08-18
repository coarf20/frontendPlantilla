import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from "../shared/shared.module";
import {PapeleriaModule} from "../papeleria/papeleria.module";



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PapeleriaModule

  ]
})
export class DashboardModule { }
