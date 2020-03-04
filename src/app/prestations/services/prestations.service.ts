import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection$: Observable<Prestation[]>;

  constructor(private http: HttpClient) {
    // this.collection = this.http.get<Prestation[]>(`${environment.urlApi}prestations`).
    // pipe(map(
    //     (prestations) => {
    //       return prestations.map((presta) => {
    //         return new Prestation(presta);
    //       })
    //     }
    // ));

    // this.collection = this.http.get<Prestation[]>(`${environment.urlApi}prestations`).
    // pipe(map(prestats => prestats.map(data => new Prestation(data))));

    this.collection = this.http.get<Prestation[]>(`${environment.urlApi}prestations`).
    pipe(map(prestats => prestats.map(data => new Prestation(data))));


   }

//get collection
public get collection(): Observable<Prestation[]> {
  return this.pCollection$;
}
// set collection
public set collection(col: Observable<Prestation[]>) {
  this.pCollection$ = col;
}

//add item collection

//update item collection

//delete item collection

//get item by id from collection


}
