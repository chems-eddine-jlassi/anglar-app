import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { MenuComponent } from './component/menu/menu.component';
import { ConvertiseurComponent } from './component/convertiseur/convertiseur.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponent,
    MenuComponent,
    ConvertiseurComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
