import { Component } from "@angular/core";

@Component ({
    selector: 'app-guardian',
    templateUrl: 'guardian.component.html'
})

export class GuardianComponent{

    nombre: string = 'Groot'
    edad: number = 15

    get capitalizarNombre() {
        return this.nombre.toUpperCase()
        
    }
    
    cambiarNombre(): void {
        this.nombre = 'Rocket'   
    }

    cambiarEdad() {
        this.edad = 32
    }
}
