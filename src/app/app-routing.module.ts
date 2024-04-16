import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './autos/vehiculos/vehiculos.component';
import { HomeComponent } from './autos/home/Home.component';
import { PageNotFoundComponent } from './autos/page-not-found/page-not-found.component';
import { PagAutoComponent } from './autos/pag-auto/pag-auto.component';
import { PagRegisterComponent } from './autos/pag-register/pag-register.component';
import { ClientesComponent } from './autos/clientes/clientes.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: VehiculosComponent
  },
  {
    path: "vehiculo",
    component: PagRegisterComponent,
  },
  { path: "clientes",
  component: ClientesComponent
 },
  {
    path: "vehiculo/:codigo",
    component: PagAutoComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
