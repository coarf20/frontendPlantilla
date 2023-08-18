import { NgModule } from '@angular/core';
import {HomeComponent} from "./components/home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {PapeleriaComponent} from "../papeleria/components/papeleria/papeleria.component";



const childRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plantillas', component: PapeleriaComponent }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class RouterChildModule { }
