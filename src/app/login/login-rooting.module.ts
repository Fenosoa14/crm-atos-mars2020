import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const routes: Routes = [
  // { path: 'clients', component: PagePrestationsComponent },
  { path: 'login', component: PageLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRootingModule { }
