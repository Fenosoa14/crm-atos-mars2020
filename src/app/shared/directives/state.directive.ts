import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
// export class StateDirective implements OnInit, OnChanges {
  export class StateDirective implements OnChanges {

  @Input() appState: any;
  @HostBinding('class') classTd: string;

  constructor() { }

  // ngOnInit(): void {
  //   console.log('========>' + this.appState);
  //   this.classTd = this.formatClass(this.appState);
  // }

  ngOnChanges(){
    this.classTd = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toLowerCase()}`;
  }

}
