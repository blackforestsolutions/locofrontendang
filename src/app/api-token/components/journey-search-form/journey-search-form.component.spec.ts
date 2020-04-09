import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiTokenAndUrlInformation } from 'src/test/api-token-and-url-information';
import { JourneySearchFormComponent } from './journey-search-form.component';
import { By } from '@angular/platform-browser';

describe('JourneySearchFormComponent', () => {
  let component: JourneySearchFormComponent;
  let fixture: ComponentFixture<JourneySearchFormComponent>;

  const validApiToken: ApiTokenAndUrlInformation = {
    departure: 'Berlin',
    arrival: 'München',
    departureDate: new Date(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JourneySearchFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneySearchFormComponent);
    component = fixture.componentInstance;
    component.apiToken = validApiToken;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init formGroup correctly', () => {
    expect(component.apiTokenForm.value).toEqual(validApiToken);
    expect(component.apiTokenForm.valid).toBeTruthy();
  });

  it('should render departure FormControl correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    const departureInput = compiled.querySelector('input[id="departure"]')
      .value;

    expect(departureInput).toBe(validApiToken.departure);
    expect(departureInput).toBeTruthy();
  });

  it('should render arrival FormControl correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    const arrivalInput = compiled.querySelector('input[id="arrival"').value;

    expect(arrivalInput).toBe(validApiToken.arrival);
    expect(arrivalInput).toBeTruthy();
  });

  it('should render departureDate FormControl correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    const departureDateInput = compiled.querySelector(
      'input[id="departureDate"'
    ).value;

    expect(departureDateInput).toBe(validApiToken.departureDate.toString());
    expect(departureDateInput).toBeTruthy();
  });

  it('should validate departure FormControl correctly', () => {
    const departureControl = component.apiTokenForm.get('departure');

    expect(departureControl.errors).toBeNull();
    departureControl.setValue('');
    expect(departureControl.errors.required).toBeTruthy();
  });

  it('should validate arrival FormControl correctly', () => {
    const arrivalControl = component.apiTokenForm.get('arrival');

    expect(arrivalControl.errors).toBeNull();
    arrivalControl.setValue('');
    expect(arrivalControl.errors.required).toBeTruthy();
  });

  it('should validate departureDate FormControl correctly', () => {
    const departureDateControl = component.apiTokenForm.get('departureDate');

    expect(departureDateControl.errors).toBeNull();
    departureDateControl.setValue(null);
    expect(departureDateControl.errors.required).toBeTruthy();
  });

  it('should emit the submitTokenEvent on click when ApiToken is valid', fakeAsync(() => {
    spyOn(component.submitTokenEvent, 'emit');
    fixture.nativeElement.querySelector('button').click();
    tick();
    expect(component.submitTokenEvent.emit).toHaveBeenCalledWith(validApiToken);
    expect(component.submitTokenEvent.emit).toHaveBeenCalledTimes(1);
  }));

  it('should trigger an event on "submitForm" when ApiForm is valid', fakeAsync(() => {
    spyOn(component.submitTokenEvent, 'emit');
    component.submitForm();
    tick();
    expect(component.submitTokenEvent.emit).toHaveBeenCalledWith(validApiToken);
    expect(component.submitTokenEvent.emit).toHaveBeenCalledTimes(1);
  }));
});

describe('JourneySearchFormComponent', () => {
  let component: JourneySearchFormComponent;
  let fixture: ComponentFixture<JourneySearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JourneySearchFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not emit submitTokenEvent on click when API token is NOT valid', fakeAsync(() => {
    spyOn(component.submitTokenEvent, 'emit');
    fixture.nativeElement.querySelector('button').click();
    tick();
    expect(component.submitTokenEvent.emit).not.toHaveBeenCalled();
  }));

  it('should not trigger an event on "submitForm" when ApiForm is NOT valid', fakeAsync(() => {
    spyOn(component.submitTokenEvent, 'emit');
    component.submitForm();
    tick();
    expect(component.submitTokenEvent.emit).not.toHaveBeenCalled();
  }));
});
