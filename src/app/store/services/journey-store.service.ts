import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiTokenAndUrlInformation } from 'src/model/api-token-and-url-information';
import { Observable } from 'rxjs';
import { Journey } from 'src/model/locodatamodel';

@Injectable({
  providedIn: 'root',
})
export class JourneyStoreService {
  constructor(private http: HttpClient, @Inject('API_URL') private api: string) {}

  getJourneysBy(apiToken: ApiTokenAndUrlInformation): Observable<Journey[]> {
    return this.http.post<Journey[]>(`${this.api}/journeys`, apiToken);
  }
}
