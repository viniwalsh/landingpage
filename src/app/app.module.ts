import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BemVindoComponent } from './modules/bem-vindo/bem-vindo.component';
import { CartaoComponent } from './modules/cartao/cartao.component';
import { ContaComponent } from './modules/conta/conta.component';
import { ProdutoComponent } from './modules/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BemVindoComponent,
    ProdutoComponent,
    CartaoComponent,
    ContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
