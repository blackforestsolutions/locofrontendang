import { SharedModule } from './../../shared/shared.module';
import { Journey } from '../../datamodel/journey';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneysRoutingModule } from './journeys-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromJourney from './journey-ngrx/reducers/journey.reducer';
import { EffectsModule } from '@ngrx/effects';
import { JourneyEffects } from './journey-ngrx/effects/journey.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JourneysRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromJourney.journeyFeatureKey, fromJourney.reducer),
    EffectsModule.forFeature([JourneyEffects])
  ]
})
export class JourneysModule { }
