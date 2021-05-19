import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario :FormGroup = this.fb.group({
    nombre : ['',[ Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email : ['',[ Validators.required, Validators.pattern(this.emailPattern) ]],
  })
  
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre : 'Pablo Alvarez',
      email : 'pabloalvarezseguel@gmail.com',
    })
  }

  campoNoValido( campo : string){
    return  this.miFormulario.get(campo)?.invalid
            &&
            this.miFormulario.get(campo)?.touched
  }

  submitFomulario(){

    if(this.miFormulario.invalid){
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }
}
