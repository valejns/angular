
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
      <h1> {{ title }} </h1>
    
    <button (click)=" descontar(-1) "> -1 </button>
    
    <span> {{ number }} </span>
    
    <button (click)=" acumular(+1) "> +1 </button>
  `
})

export class ContadorComponent {
    title: string = 'Contador';
    number: number = 0
  
    acumular( value: number ) {
      this.number += value
    }
  
    descontar( value: number ) {
      this.number += value
    }
}
