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

  guardar(){

    console.log(this.miFormulario.value);
    
  }

  nombreValido() : boolean{
    return this.miFormulario?.controls.producto?.invalid  &&   this.miFormulario?.controls.producto?.touched;

  }
}
