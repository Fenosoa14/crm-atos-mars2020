import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states = Object.values(State);
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  public form: FormGroup;
  // on peut l'initialiser ici car dans l'edit en passant de ngOninit cette initialisation sera ecrasé par l'objet envoyé
  @Input() itemNikki = new Prestation();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      typepresta: [this.itemNikki.typePresta],
      client: [this.itemNikki.client],
      nbJours: [this.itemNikki.nbJours],
      tjmHt: [this.itemNikki.tjmHt],
      tva: [this.itemNikki.tva],
      state: [this.itemNikki.state],
      comments: [this.itemNikki.comment]
    });
  }


  public onSubmit() {
    console.log(this.form.value);
    // this.nItem.emit();
  }
}
