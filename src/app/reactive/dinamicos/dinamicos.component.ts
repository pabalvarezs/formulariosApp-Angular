import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  constructor( private fb : FormBuilder) { }

  miFormulario : FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],            //no son arrays si no que son formControl
      ['Death Stranding', Validators.required]        //no son arrays si no que son formControl
    ],Validators.required)
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray; //indicamos a ts que esto es un forarry
  }

  formularioNoValido(campo :string){
    return  this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched
  }
  
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    console.log(this.miFormulario.value);
    

  }

}
