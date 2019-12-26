import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TravelPoint } from 'src/app/datamodel/travel-point';

@Injectable({
  providedIn: 'root'
})
export class TravelPointStoreService {

  constructor() { }

  getTravelPointsBy(): Observable<TravelPoint[]> {
    return null;
  }
}
