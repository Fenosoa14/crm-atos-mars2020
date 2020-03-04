import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    console.log('Valeurs envoyés' + value);
    console.log('Les arguments' + args);
    if(value){
      if(args[0]){
        return value.totalTtc();
      }else return value.totalHt();
    }
    return 'ERREUR';
  }

}
