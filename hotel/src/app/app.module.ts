import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';    //Importa Il modulo http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaprenotazioniComponent } from './listaprenotazioni/listaprenotazioni.component';
import { DettaglistanzaComponent } from './dettaglistanza/dettaglistanza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaprenotazioniComponent,
    DettaglistanzaComponent
  ],
  imports: [
    BrowserModule,  HttpClientModule,      //Aggiungi il modulo http qui
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
