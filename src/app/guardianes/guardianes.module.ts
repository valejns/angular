import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GuardianComponent } from "./guardian/guardian.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule ({
    declarations: [
        GuardianComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        GuardianComponent

    ],
    imports: [
        CommonModule
    ]
})

export class GuardianesModule {}
