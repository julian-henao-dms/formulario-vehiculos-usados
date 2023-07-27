import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioVhUsadosComponent } from './components/formulario-vh-usados/formulario-vh-usados.component';

const routes: Routes = [
  { path: '', redirectTo: 'formulario.vehiculo-usado', pathMatch: 'full' },
  { path: 'formulario.vehiculo-usado', component: FormularioVhUsadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
