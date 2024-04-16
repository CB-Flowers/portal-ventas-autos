import { NgModule } from "@angular/core";


import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { VehiculosComponent } from "./vehiculos/vehiculos.component";
import { PagAutoComponent } from "./pag-auto/pag-auto.component";
import { RouterModule } from "@angular/router";
import { PagRegisterComponent } from "./pag-register/pag-register.component";
import { ClientesComponent } from "./clientes/clientes.component";




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule,


    ],
    declarations: [
        VehiculosComponent,
        PagAutoComponent,
        PagRegisterComponent,
        ClientesComponent

    ],
    exports: [
        VehiculosComponent,
        PagAutoComponent,
        PagRegisterComponent,
        ClientesComponent
        ]
})

export class PaginaModule{

}
