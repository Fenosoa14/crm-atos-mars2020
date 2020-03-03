import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRootingModule } from './prestations-rooting.module';



@NgModule({
  declarations: [PagePrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRootingModule
  ]
})
export class PrestationsModule { }
