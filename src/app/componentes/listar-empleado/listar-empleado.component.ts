import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.scss']
})
export class ListarEmpleadoComponent implements OnInit {

  Empleados:any;

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.consultarEmpleados().subscribe(response =>{
      this.Empleados = response
    });
  }


  borrarEmpleado(id:any, IControl:any ):void{
    if(window.confirm('Seguro que quieres borrar este empleado con ID '+id+' ?')){
      this.crudService.borrarEmpleado(id).subscribe(()=>{
        this.Empleados.splice(IControl,1);
      });
    }
  }
}
