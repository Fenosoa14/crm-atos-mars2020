import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  // public collection$: Observable<Prestation[]>;
  // public collection$ =  new BehaviorSubject<Prestation[]>(null);
  // le subject ne stock pas de données tandis que le behavior le stock
  
   public collection$ =  new BehaviorSubject<Prestation[]>(null);
  public entete: string[];
  // public states: State;
  public states = Object.values(State);

  //Titres a projeter dans le template
  public titreAprojeter: string;
  public sousTitreAprojeter: string;

  public titreBouton: string;
  public chemin: string;
  public externalLink: string;

  // import du bouton supprimer depuis fontawesome
  public faTrashAlt = faTrashAlt;

  constructor(private ps: PrestationsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.entete = ['Type', 'Client', 'NbJours', 'TjhmHT', 'TotalHT', 'TotalTTC', 'State','Modifier statut','Actions'];
    //this.collection$= this.ps.collection;
    this.ps.collection.subscribe((datas) => {
      this.collection$.next(datas);
    });
    
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

  // delete
  public delete(prestation: Prestation) {
    this.ps.delete(prestation).subscribe(res => {
      //traiter ce que tu veux
      console.log(res);
      this.ps.collection.subscribe((datas) => {
        this.collection$.next(datas);
      });
    });
  }

  public changeState(prestation: Prestation, event) {
    this.ps.updatePrestationState(prestation, event.target.value).subscribe((retPrestat: Prestation) => {
      prestation.state = retPrestat.state;
    });
  }

  public edit(prestation: Prestation) {
    this.router.navigate(['prestations/edit', prestation.id]);
  }
  

}
