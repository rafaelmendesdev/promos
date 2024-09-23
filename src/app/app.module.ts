import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampanhaComponent } from './campanha/campanha.component';
import { DetalhesCampanhaComponent } from './detalhes-campanha/detalhes-campanha.component';
import { DetalhesOptinCampanhaComponent } from './detalhes-optin-campanha/detalhes-optin-campanha.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CurrencyFormatPipe } from './currency-format.pipe';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    DetalhesCampanhaComponent,
    CampanhaComponent,
    DetalhesOptinCampanhaComponent,
    CurrencyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
