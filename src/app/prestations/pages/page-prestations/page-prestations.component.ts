import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable, Subscription } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;
  public entete: string[];
  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    this.entete = ['Type', 'Client', 'NbJours', 'TjhmHT', 'TotalHT', 'TotalTTC', 'State'];
    this.collection$= this.ps.collection;
    // this.ps.collection.subscribe(
    //     (prestations) => {
    //       this.collection = prestations;
    //     }
    // );
  }

}
