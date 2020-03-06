import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  //Titres a projeter dans le template
  public titreAprojeter: string;
  public sousTitreAprojeter: string;

  constructor(private ps: PrestationsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.titreAprojeter = 'Ajout de prestation';
    this.sousTitreAprojeter = 'Nouveau prestat';

  }

  public addItem(prestation: any ) {
    this.ps.add(prestation).subscribe(
      (reponse) => {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

}
