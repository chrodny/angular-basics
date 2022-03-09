import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeroesModule }     from './heroes/heroes.module';
import { ContadorModule }   from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
