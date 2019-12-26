import { SharedModule } from './../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { JourneySearchFormComponent } from './journey-search-form/journey-search-form.component';
import { JourneySearchComponent } from './journey-search.component';

const modules = [
  ReactiveFormsModule
];

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatIconModule,
  MatRadioModule
];

@NgModule({
  declarations: [
    JourneySearchComponent,
    JourneySearchFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ...modules,
    ...materialModules
  ]
})
export class JourneySearchModule { }
