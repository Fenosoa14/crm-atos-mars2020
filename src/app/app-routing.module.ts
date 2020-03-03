import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { PagePrestationsComponent } from './prestations/pages/page-prestations/page-prestations.component';
import { PageClientsComponent } from './clients/pages/page-clients/page-clients.component';


// const routes: Routes = [
//   {path:'login', component: PageLoginComponent},
//   {path:'prestations', component: PagePrestationsComponent},
//   {path:'clients', component: PageClientsComponent},
//   { path: '',
//     redirectTo: '/login',
//     pathMatch: 'full'
// },
// ];

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: () => import('./prestations/prestations.module').then(m => m.PrestationsModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-nots-found/page-nots-found.module').then(m => m.PageNotsFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
