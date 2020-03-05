import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from '../../models/prestation';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableauLightComponent implements OnInit {

  @Input() entete: string[];
  // inutile car le composant ne sera pas réutilisable
  // @Input() collection$: Observable<Prestation[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
