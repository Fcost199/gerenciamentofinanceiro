import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeralComponent } from './componentes/geral/geral.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { SaidasComponent } from './componentes/saidas/saidas.component';
import { PrincipalHeaderComponent } from './componentes/principal-header/principal-header.component';
import { MovimentacaoComponent } from './componentes/movimentacao/movimentacao.component';
import { LoginComponent } from './componentes/login/login.component';
import { environment } from '../environments/environment';
import { API_URL, ApiUrlInterceptor } from './_helpers/http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GeralComponent,
    EntradasComponent,
    SaidasComponent,
    PrincipalHeaderComponent,
    MovimentacaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: API_URL, useValue: environment.apiUrl},
    {provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true, deps: [API_URL]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
