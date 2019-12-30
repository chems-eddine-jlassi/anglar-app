import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { ConvertiseurComponent } from './component/convertiseur/convertiseur.component';
import { WelcomeComponent } from './component/welcome/welcome.component';


const routes: Routes = [
  { path:'calcule', component: CalculatriceComponent},
  { path:'convert', component: ConvertiseurComponent},
  { path:'', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
