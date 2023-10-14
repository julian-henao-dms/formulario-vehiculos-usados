import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioVhUsadosComponent } from './components/formulario-vh-usados/formulario-vh-usados.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-vehiculo-usado', pathMatch: 'full' },
  { path: 'home-vehiculo-usado', component: HomeComponent },
  { path: 'formulario-vehiculo-usado', redirectTo: 'home-vehiculo-usado' },
  { path: 'formulario-vehiculo-usado/:id_usu/:id_lote/:headlightSpecString', component: FormularioVhUsadosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
