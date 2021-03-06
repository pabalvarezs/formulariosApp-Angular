import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      ['Borderlands', Validators.required],            //no son arrays si no que son formControl
      ['Metal Gear', Validators.required]        //no son arrays si no que son formControl
    ],Validators.required)
  })
  
  nuevoFavorito :FormControl = this.fb.control('',Validators.required)

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

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return
    }
    // (this.miFormulario.controls.favoritos as FormArray).push(this.nuevoFavorito.value)
    // this.favoritosArr.push( new FormControl(this.nuevoFavorito.value,Validators.required) )
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value,Validators.required))
    this.nuevoFavorito.reset();

  }

  eliminarFavorito(index : number){

    this.favoritosArr.removeAt(index);
  }

}
