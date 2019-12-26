import { JourneySearchModule } from './journey-search/journey-search.module';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelPointsRoutingModule } from './travel-points-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTravelPoint from './travel-points-ngrx/reducers/travel-point.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TravelPointEffects } from './travel-points-ngrx/effects/travel-point.effects';

const modules = [
  JourneySearchModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TravelPointsRoutingModule,
    SharedModule,
    ...modules,
    StoreModule.forFeature(fromTravelPoint.travelPointFeatureKey, fromTravelPoint.reducer),
    EffectsModule.forFeature([TravelPointEffects])
  ]
})
export class TravelPointsModule { }
