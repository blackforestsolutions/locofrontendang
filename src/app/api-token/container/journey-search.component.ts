import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/reducers';
import { updateApiToken } from 'src/app/store/api-token/api-token.actions';
import { getApiToken } from 'src/app/store/api-token/api-token.selectors';
import { ApiTokenAndUrlInformation } from '@blackforestsolutions/locodatamodel';

@Component({
  selector: 'bs-journey-search',
  templateUrl: './journey-search.component.html',
  styleUrls: ['./journey-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneySearchComponent implements OnInit {
  apiToken$: Observable<ApiTokenAndUrlInformation>;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.apiToken$ = this.store.pipe(select(getApiToken));
  }

  submitToken(apiToken: ApiTokenAndUrlInformation) {
    this.store.dispatch(updateApiToken({ apiToken }));
    this.router.navigateByUrl('/journeys');
  }
}
