import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  guardianes: string[] = ['Groot', 'Rocket', 'Gamora', 'Peter', 'Drax']
  guardianBorrado: string = '' 

  borrarGuardian() {
    this.guardianBorrado = this.guardianes.shift() || ''

  }

}
