import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    if(value){
      if(args[0]){
        return value.totalTtc();
      }else return value.totalHt();
    }
    return 'ERREUR';
  }

}
