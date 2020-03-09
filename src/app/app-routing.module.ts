import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeralComponent } from './componentes/geral/geral.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { SaidasComponent } from './componentes/saidas/saidas.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuardService } from './_helpers/auth-guard.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'geral', component: GeralComponent, canActivate:[AuthGuardService]},
  {path: 'entradas', component: EntradasComponent, canActivate:[AuthGuardService]},
  {path: 'saidas', component: SaidasComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
