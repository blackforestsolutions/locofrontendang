import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/reducers';
import { getApiToken } from 'src/app/store/api-token/api-token.selectors';
import { loadJourneysByToken } from 'src/app/store/journeys/journeys.actions';
import {
  getJourneysByApiToken,
  getJourneysLoading,
} from 'src/app/store/journeys/journeys.selectors';
import { ApiTokenAndUrlInformation } from 'src/test/api-token-and-url-information';
import { Journey } from 'src/test/locodatamodel';

@Component({
  selector: 'bs-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyListComponent implements OnInit {
  journeys$: Observable<Journey[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(getJourneysLoading));
    this.journeys$ = this.store.pipe(select(getJourneysByApiToken));
    this.store.pipe(select(getApiToken)).subscribe((apiToken: ApiTokenAndUrlInformation) => {
      if (apiToken.arrival || apiToken.departure) {
        this.store.dispatch(loadJourneysByToken({ apiToken }));
      } else {
        this.router.navigateByUrl('');
      }
    });
  }
}
