import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';

const routes: Routes = [
  // { path: 'prestations', component: PagePrestationsComponent },
  { 
    path: '', 
    component: PagePrestationsComponent ,
    data: {titreAprojeter: 'Titre via rooting', sousTitreAprojeter:'Sous titre via rooting'}
  },
  { 
    path: 'add', 
    component: PageAddPrestationComponent ,
    data: {titreAprojeter: 'Ajouter prestation via rooting', sousTitreAprojeter:'Ajouter prestation subtitle via rooting'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRootingModule { }
