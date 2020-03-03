import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRootingModule } from './clients-rooting.module';



@NgModule({
  declarations: [PageClientsComponent],
  imports: [
    CommonModule,
    ClientsRootingModule
  ]
})
export class ClientsModule { }
