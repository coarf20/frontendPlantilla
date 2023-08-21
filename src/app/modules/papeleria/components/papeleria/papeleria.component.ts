import {Component, OnInit, ViewChild} from '@angular/core';
import {PapeleriaService} from "../../../shared/services/papeleria.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-papeleria',
  templateUrl: './papeleria.component.html',
  styleUrls: ['./papeleria.component.css']
})
export class PapeleriaComponent implements OnInit{
  constructor(private papeleriaService: PapeleriaService, public dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) {
  }
  ngOnInit(): void {
    this.getPlantillas();
  }
  displayedColumn: string[] = ['id','nombre','contenido','fechaCreacion','acciones']
  dataSource = new MatTableDataSource<PapeleriaElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  getPlantillas(){
    this.papeleriaService.getPlantillas()
      .subscribe((data:any) => {
        console.log("respuesta plantillas: ",data);
        this.procesarPlantillaRespuesta(data);
      }, (error:any) => {
        console.log("error: ", error);
      })
  }

  procesarPlantillaRespuesta(resp:any){
    const dataPapeleria: PapeleriaElement[] = [];
    let listPapeleria = resp;
    listPapeleria.forEach((element: PapeleriaElement )=> {
      dataPapeleria.push(element);
    });
    this.dataSource = new MatTableDataSource<PapeleriaElement>(dataPapeleria);
    this.dataSource.paginator = this.paginator;
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })

  }

  crearNuevaPlantilla() {
    this.router.navigate(['new-plantilla']);
  }
}

export interface PapeleriaElement{
  id: number,
  nombre: string,
  contenido: string,
  fechaCreacion: string
}
