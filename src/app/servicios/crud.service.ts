import { Injectable } from '@angular/core';
//HTTP PARA HACER EL ENVIO I LA CONSULTA DE DATOS VIA HTTP
import { HttpClient } from '@angular/common/http';
//OBSEVABLE, OBSERVANDO TODOS LO CANVIOS I MONITORIZADO
import { Observable } from 'rxjs';
//MODELO
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  API:string = 'http://localhost/empleado/'; //API PHP 
  
  constructor(private clienteHttp: HttpClient) { }

  agregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  consultarEmpleados(){
    return this.clienteHttp.get(this.API);
  }

  borrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
}
