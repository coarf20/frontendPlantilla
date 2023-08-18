import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const urlBase= 'http://localhost:8081/api'
@Injectable({
  providedIn: 'root'
})
export class PapeleriaService {

  constructor(private http: HttpClient) { }

  //obtener plantillas
  getPlantillas(){
    const endpoint = `${urlBase}/plantillas`;
    return this.http.get(endpoint)
  }

  //crear plantillas
  savePlantillas(body: any){
    const endpoint = `${urlBase}/plantillas`;
    return this.http.post(endpoint, body);
  }

  //actualizar plantillas
  updatePlantillas(body:any, id:any){
    const endpoint = `${urlBase}/plantillas/${id}`;
    return this.http.put(endpoint, body);
  }
}
