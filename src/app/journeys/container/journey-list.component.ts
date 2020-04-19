import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiTokenAndUrlInformation, Journey } from '@blackforestsolutions/locodatamodel';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/reducers';
import { getApiToken } from 'src/app/store/api-token/api-token.selectors';
import { loadJourneysByToken } from 'src/app/store/journeys/journeys.actions';
import { getJourneysByApiToken, getJourneysLoading } from 'src/app/store/journeys/journeys.selectors';

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
