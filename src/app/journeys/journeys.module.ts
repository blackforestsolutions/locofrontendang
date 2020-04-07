import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { JourneysEffects } from '../store/journeys/journeys.effects';
import * as fromJourneys from '../store/journeys/journeys.reducer';
import { JourneyListItemComponent } from './components/journey-list-item/journey-list-item.component';
import { JourneyListComponent } from './container/journey-list.component';
import { JourneysRoutingModule } from './journeys-routing.module';
import { ApiTokenModule } from '../api-token/api-token.module';

@NgModule({
  declarations: [JourneyListItemComponent, JourneyListComponent],
  imports: [
    CommonModule,
    JourneysRoutingModule,
    ApiTokenModule,
    StoreModule.forFeature(fromJourneys.journeysFeatureKey, fromJourneys.reducer),
    EffectsModule.forFeature([JourneysEffects]),
  ],
})
export class JourneysModule {}
