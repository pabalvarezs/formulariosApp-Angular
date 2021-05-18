import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit  {

  constructor( private fb : FormBuilder) { }

  ngOnInit(){

    // this.miFormulario.setValue(this.persona)
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    })

  }

  miFormulario : FormGroup = this.fb.group({
    genero: ['M',Validators.required],
    notificaciones: [true,Validators.required],
    condiciones: [false,Validators.requiredTrue],

  });

  persona ={
    genero: 'F',
    notificaciones: true
  }

}
