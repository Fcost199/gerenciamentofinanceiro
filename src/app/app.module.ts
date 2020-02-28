import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeralComponent } from './componentes/geral/geral.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { SaidasComponent } from './componentes/saidas/saidas.component';
import { PrincipalHeaderComponent } from './componentes/principal-header/principal-header.component';

@NgModule({
  declarations: [
    AppComponent,
    GeralComponent,
    EntradasComponent,
    SaidasComponent,
    PrincipalHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
