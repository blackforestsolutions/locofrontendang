import { TravelPoint } from './../../../datamodel/travel-point';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const loadTravelPoints = createAction(
  '[TravelPoint] Load TravelPoints'
);

export const loadTravelPointsSuccess = createAction(
  '[TravelPoint] Load TravelPoints Success',
  props<{ travelPoints: TravelPoint[] }>()
);

export const loadTravelPointsFailure = createAction(
  '[TravelPoint] Load TravelPoints Failure',
  props<{ error: HttpErrorResponse }>()
);
