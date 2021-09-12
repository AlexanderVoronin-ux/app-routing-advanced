import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhraseDetailesComponent } from './phrase-detailes/phrase-detailes.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhraseDetailesComponent,
    PhrasesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
