import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromApiToken from '../store/api-token/api-token.reducer';
import { ApiTokenRoutingModule } from './api-token-routing.module';
import { JourneySearchFormComponent } from './components/journey-search-form/journey-search-form.component';
import { JourneySearchComponent } from './container/journey-search.component';

@NgModule({
  declarations: [JourneySearchComponent, JourneySearchFormComponent],
  imports: [
    CommonModule,
    ApiTokenRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromApiToken.apiTokenFeatureKey,
      fromApiToken.reducer
    ),
  ],
  exports: [JourneySearchComponent],
})
export class ApiTokenModule {}
