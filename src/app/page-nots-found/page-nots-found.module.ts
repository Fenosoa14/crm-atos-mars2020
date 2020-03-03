import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRootingModule } from './page-not-found-rooting.module';
import { PageNotFoundComponent } from '../page-not-found/pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRootingModule
  ]
})
export class PageNotsFoundModule { }
