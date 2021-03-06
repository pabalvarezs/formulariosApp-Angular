import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario :FormGroup = this.fb.group({
    nombre    : [ '' , [ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email     : [ '' , [ Validators.required, Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username  : [ '' , [ Validators.required, this.vs.noPuedeSerPabs]],
    password  : [ '' , [ Validators.required, Validators.minLength(6)]],
    password2 : [ '' , [ Validators.required]],
  },{
    validators:[this.vs.camposIguales('password','password2')]    
  })
  
  constructor(  private fb : FormBuilder,
                private vs: ValidatorService,
                private ev: EmailValidatorService) {
                  
                } 

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre    : 'Pablo Alvarez',
      email     : 'test1@test.com',
      username  : 'Pabloncho',
      password  : '123456',
      password2 : '123456',
    })
  }

  campoNoValido( campo : string){
    return  this.miFormulario.get(campo)?.invalid
            &&
            this.miFormulario.get(campo)?.touched
  }

  get emailErrorMsg() : string{
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.required) {
      return 'Email es obligatorio'
    } else if (errors?.pattern) {
      return 'No es un correo válido'
    }else if(errors?.emailTomado){
      return 'Ya existe el correo'
    }
    return ''
    
  }

  // emailRequiered(){
  //   return  this.miFormulario.get('email')?.errors?.required
  //           &&
  //           this.miFormulario.get('email')?.touched
  // }
  // emailFormato(){
  //   return  this.miFormulario.get('email')?.errors?.pattern
  //           &&
  //           this.miFormulario.get('email')?.touched
  // }
  // emailTomado(){
  //   return  this.miFormulario.get('email')?.errors?.emailTomado
  //           &&
  //           this.miFormulario.get('email')?.touched
  // }
  submitFomulario(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value);
    
  }
}
