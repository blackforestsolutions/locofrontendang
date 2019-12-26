import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../travel-points-ngrx/reducers/travel-point.reducer';

@Component({
  selector: 'bs-journey-search',
  templateUrl: './journey-search.component.html',
  styleUrls: ['./journey-search.component.scss']
})
export class JourneySearchComponent implements OnInit {

  // constructor(private store: Store<fromStore.TravelPointState>) { }

  ngOnInit() {
  }

}
