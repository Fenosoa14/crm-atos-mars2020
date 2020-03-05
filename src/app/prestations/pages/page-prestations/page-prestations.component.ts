import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable, Subscription } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;
  public entete: string[];
  // public states: State;
  public states = Object.values(State);

  //Titres a projeter dans le template
  public titreAprojeter: string;
  public sousTitreAprojeter: string;

  public titreBouton: string;
  public chemin: string;
  public externalLink: string;

  constructor(private ps: PrestationsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.entete = ['Type', 'Client', 'NbJours', 'TjhmHT', 'TotalHT', 'TotalTTC', 'State','Modifier statut'];
    this.collection$= this.ps.collection;

    
    this.titreBouton = 'Ajouter une prestation';
    this.chemin = 'add';
    this.externalLink = 'https://www.google.fr';
    
    //Recupe des données via rooting
    this.route.data.subscribe(
      (data) => {
        this.titreAprojeter = data.titreAprojeter;
        this.sousTitreAprojeter = data.sousTitreAprojeter;
      }
    );
    
    // this.ps.collection.subscribe(
    //     (prestations) => {
    //       this.collection = prestations;
    //     }
    // );
  }

  public changeState(prestation: Prestation, event) {
    this.ps.updatePrestationState(prestation, event.target.value).subscribe((retPrestat: Prestation) => {
      prestation.state = retPrestat.state;
    });
  }

}
