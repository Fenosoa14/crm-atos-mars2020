import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableauDarkComponent implements OnInit {

  @Input() entete: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
