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

  miFormulario :FormGroup = this.fb.group({
    nombre : ['',[ Validators.required, Validators.pattern(this.nombreApellidoPattern)]]
  })
  
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
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
