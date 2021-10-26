import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.scss']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioDeEmpleados!:FormGroup;

  constructor(public formulario:FormBuilder, private crudService: CrudService, private ruteador:Router) {
    this.formularioDeEmpleados = this.formulario.group({
      nombre: [''],
      correo: ['']
    });
  }

  ngOnInit(): void {
  }

  //METODO DE ENVIO DE DATOS
  enviarDatos():any{
    console.log("Me presionaste")
    console.log(this.formularioDeEmpleados.value)
    this.crudService.agregarEmpleado(this.formularioDeEmpleados.value).subscribe();
    this.ruteador.navigateByUrl('/listar-empleado')
  }

}
