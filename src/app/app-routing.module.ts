import { Component, NgModule } from '@angular/core';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandeComponent } from './commande/commande.component';
import { PanierComponent } from './panier/panier.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'acc', component: AccueilComponent },
  { path: 'conn', component:  ConnexionComponent },
  { path: 'inscri', component: InscriptionComponent },
  { path: 'comm', component: CommandeComponent},
  { path: 'pann', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
