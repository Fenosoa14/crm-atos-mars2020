import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';

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
public add(prestation: any) {
  console.log(JSON.stringify(prestation));
  return this.http.post(`${environment.urlApi}prestations/`, prestation);
}

//update item collection
public updatePrestationState(prestation: Prestation, state: State) {
  let val = new Prestation(prestation);
  val.state = state;
  return this.updatePrestation(val);
}

public updatePrestation(prestat: Prestation) {
  return this.http.patch(`${environment.urlApi}prestations/${prestat.id}`, prestat);
}

//delete item collection
public delete(prestation: Prestation) {
  return this.http.delete(`${environment.urlApi}prestations/${prestation.id}`);
}


//get item by id from collection
public getItembyId(id: string) {
  return this.http.get<Prestation>(`${environment.urlApi}prestations/${id}`);
}

}
