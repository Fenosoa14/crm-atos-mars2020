import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginRootingModule } from './login-rooting.module';



@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    LoginRootingModule
  ]
})
export class LoginModule { }
