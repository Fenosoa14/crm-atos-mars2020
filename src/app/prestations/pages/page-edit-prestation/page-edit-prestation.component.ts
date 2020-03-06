import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {

  //Titres a projeter dans le template
  public titreAprojeter: string;
  public sousTitreAprojeter: string;
  public item: any;
  public item$: Observable<Prestation>;
  public itemId: string;

  constructor(private ps: PrestationsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((data) => {
      this.titreAprojeter = 'Ajout de prestation';
      this.sousTitreAprojeter = 'Nouveau prestat';
    });

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   this.item$ = this.ps.getItembyId(params.get('id'));
    //  });

     // Pour enchainer les subscribtion et le faire gerer par rjrx on utilise switchMap à la place du codes en haut
     this.item$ = this.activatedRoute.paramMap.pipe(switchMap((params) => {
      this.itemId = params.get('id');
      return this.ps.getItembyId(params.get('id'));
     }));

  }

  public updateItem(prestation: any ) {
    prestation.id = this.itemId;
    this.ps.updatePrestation(prestation).subscribe(
      (reponse) => {
          this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
      }
    );
  }


}
