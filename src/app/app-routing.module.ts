import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeralComponent } from './componentes/geral/geral.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { SaidasComponent } from './componentes/saidas/saidas.component';


const routes: Routes = [
  {path: '', component: GeralComponent},
  {path: 'entradas', component: EntradasComponent},
  {path: 'saidas', component: SaidasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
