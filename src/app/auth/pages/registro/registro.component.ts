import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario :FormGroup = this.fb.group({
    nombre    : [ '' , [ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email     : [ '' , [ Validators.required, Validators.pattern(this.vs.emailPattern)]],
    username  : [ '' , [ Validators.required, this.vs.noPuedeSerPabs]],
    password  : [ '' , [ Validators.required, Validators.minLength(6)]],
    password2 : [ '' , [ Validators.required]],
  },{
    validators:[this.vs.camposIguales('password','password2')]    
  })
  
  constructor(  private fb : FormBuilder,
                private vs: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre    : 'Pablo Alvarez',
      email     : 'pabloalvarezseguel@gmail.com',
      username  : 'Pabloncho',
    })
  }

  campoNoValido( campo : string){
    return  this.miFormulario.get(campo)?.invalid
            &&
            this.miFormulario.get(campo)?.touched
  }

  submitFomulario(){

    // if(this.miFormulario.invalid){
    //   return
    // }
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }
}
