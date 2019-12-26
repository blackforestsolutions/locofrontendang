import { Journey } from './../../../../datamodel/journey';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TravelPoint } from 'src/app/datamodel/travel-point';

@Component({
  selector: 'bs-journey-search-form',
  templateUrl: './journey-search-form.component.html',
  styleUrls: ['./journey-search-form.component.scss']
})
export class JourneySearchFormComponent implements OnInit {

  journeySearchForm: FormGroup;

  @Input() starts: TravelPoint[];
  @Input() destinations: TravelPoint[];
  @Output() submitJourney = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    if (this.journeySearchForm) {
      return;
    }

    this.journeySearchForm = this.formBuilder.group({
      start: '',
      destination: '',
      outwardJourneyArrivalTime: '',
      returnJourneyArrivalTime: ''
    });
  }

}
