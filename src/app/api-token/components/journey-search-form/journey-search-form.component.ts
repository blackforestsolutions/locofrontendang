import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ApiTokenAndUrlInformation } from 'src/model/api-token-and-url-information';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bs-journey-search-form',
  templateUrl: './journey-search-form.component.html',
  styleUrls: ['./journey-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneySearchFormComponent implements OnInit {
  apiTokenForm: FormGroup;

  @Input() apiToken: ApiTokenAndUrlInformation = {
    arrival: '',
    departure: '',
    departureDate: new Date(),
  };
  @Output() submitTokenEvent = new EventEmitter<ApiTokenAndUrlInformation>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.apiTokenForm.patchValue(this.apiToken);
  }

  private initForm() {
    if (this.apiTokenForm) {
      return;
    }
    this.apiTokenForm = this.formBuilder.group(
      {
        departure: ['', [Validators.required]],
        arrival: ['', [Validators.required]],
        departureDate: [null, [Validators.required]],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  submitForm() {
    if (this.apiTokenForm.invalid) {
      return;
    }
    const formValue: ApiTokenAndUrlInformation = this.apiTokenForm.value;
    this.submitTokenEvent.emit(formValue);
  }
}
