import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRootingModule } from './prestations-rooting.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { DetailsComponent } from '../prestations/components/details/details.component';
import { CommentsComponent } from '../prestations/components/comments/comments.component';



@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationComponent, FormPrestationComponent, PageEditPrestationComponent, DetailsComponent, CommentsComponent],
  imports: [
    CommonModule,
    PrestationsRootingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
