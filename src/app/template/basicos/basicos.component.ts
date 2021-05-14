import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('miFormulario') miFormulario! : NgForm;

  initForm = {
    producto: 'RTX4080',
    precio : 0,
    existencias : 10
  }

  guardar(){

    // console.log(this.miFormulario.value);
    console.log('Posteo correcto');
    // this.miFormulario.resetForm();
    this.miFormulario.resetForm({
      producto:'Sin nombre',
      precio: 0,
      existencias : 0
    });
    
    
  }

  nombreValido() : boolean{
    return this.miFormulario?.controls.producto?.invalid  
    &&  this.miFormulario?.controls.producto?.touched;

  }

  precioValido() : boolean{
    // this.miFormulario.controls?.precio?.setErrors({'precio':true});
    return this.miFormulario?.controls.precio?.touched 
    &&  (this.miFormulario?.controls.precio?.value  < 0); 

  }
}
