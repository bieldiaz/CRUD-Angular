import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit {

  elId:any;
  formularioEditar!:FormGroup;

  constructor( private activeRoute:ActivatedRoute, private crudService: CrudService, private formulario:FormBuilder, private ruteador: Router ) {
    this.elId = this.activeRoute.snapshot.paramMap.get('id');
    this.crudService.obtenerSingleEmpleado(this.elId).subscribe(response=>{
      this.formularioEditar.setValue({
        nombre:response[0]['nombre'],
        correo:response[0]['correo']
      })
    });
    this.formularioEditar = this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos():void{
    this.crudService.editarEmpleado(this.elId, this.formularioEditar.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado')
    });
  }
}
