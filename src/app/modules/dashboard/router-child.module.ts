import {NgModule, OnInit} from '@angular/core';
import {HomeComponent} from "./components/home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {PapeleriaComponent} from "../papeleria/components/papeleria/papeleria.component";
import {NewPlantillaComponent} from "../papeleria/components/new-plantilla/new-plantilla.component";



const childRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plantillas', component: PapeleriaComponent },
  { path: 'plantillas/new-plantilla', component: NewPlantillaComponent }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class RouterChildModule implements OnInit{
  ngOnInit(): void {
  } }
