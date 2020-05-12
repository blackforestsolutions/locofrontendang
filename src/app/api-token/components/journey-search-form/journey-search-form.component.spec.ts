import { ReactiveFormsModule } from '@angular/forms';
import { ApiTokenAndUrlInformation } from '@blackforestsolutions/locodatamodel';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { JourneySearchFormComponent } from './journey-search-form.component';

describe('JourneySearchFormComponent', () => {
  let spectator: Spectator<JourneySearchFormComponent>;
  const createComponent = createComponentFactory({
    component: JourneySearchFormComponent,
    imports: [ReactiveFormsModule],
  });

  describe('with valid token', () => {
    const validApiToken: ApiTokenAndUrlInformation = {
      departure: 'Berlin',
      arrival: 'München',
      arrivalDate: new Date().toISOString(),
      departureDate: new Date().toISOString(),
    };

    beforeEach(() => {
      spectator = createComponent({
        props: {
          apiToken: validApiToken,
        },
      });
    });

    it('should trigger an output event by method call', () => {
      let result: ApiTokenAndUrlInformation;
      spectator.output('submitTokenEvent').subscribe((output: ApiTokenAndUrlInformation) => (result = output));

      spectator.component.submitForm();

      expect(result).toEqual(validApiToken);
    });

    it('should trigger an output', () => {
      let result: ApiTokenAndUrlInformation;
      spectator.output('submitTokenEvent').subscribe((output: ApiTokenAndUrlInformation) => (result = output));

      spectator.click('button');

      expect(result).toEqual(validApiToken);
    });
  });

  describe('with no token', () => {
    beforeEach(() => (spectator = createComponent()));

    const token: ApiTokenAndUrlInformation = {
      arrival: '',
      departure: '',
      arrivalDate: expect.any(String),
      departureDate: expect.any(String),
    };

    it('should take an emergency token', () => {
      expect(spectator.component.apiToken).toEqual(expect.objectContaining({ departure: '', arrival: '' }));
    });
  });
});

// describe('JourneySearchFormComponent Integrationtest', () => {
//   // let spectator: Spec;
// });

// describe('JourneySearchFormComponent', () => {
//   let component: JourneySearchFormComponent;
//   let fixture: ComponentFixture<JourneySearchFormComponent>;

//   const validApiToken: ApiTokenAndUrlInformation = {
//     departure: 'Berlin',
//     arrival: 'München',
//     arrivalDate: new Date().toISOString(),
//     departureDate: new Date().toISOString(),
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [JourneySearchFormComponent],
//       imports: [ReactiveFormsModule],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(JourneySearchFormComponent);
//     component = fixture.componentInstance;
//     component.apiToken = validApiToken;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should init formGroup correctly', () => {
//     expect(component.apiTokenForm.value).toEqual(validApiToken);
//     expect(component.apiTokenForm.valid).toBeTruthy();
//   });

//   it('should render departure FormControl correctly', () => {
//     const compiled = fixture.debugElement.nativeElement;
//     const departureInput = compiled.querySelector('input[id="departure"]').value;

//     expect(departureInput).toBe(validApiToken.departure);
//     expect(departureInput).toBeTruthy();
//   });

//   it('should render arrival FormControl correctly', () => {
//     const compiled = fixture.debugElement.nativeElement;
//     const arrivalInput = compiled.querySelector('input[id="arrival"').value;

//     expect(arrivalInput).toBe(validApiToken.arrival);
//     expect(arrivalInput).toBeTruthy();
//   });

//   it('should render arrivalDate FormControl correctly', () => {
//     const compiled = fixture.debugElement.nativeElement;
//     const arrivalDateInput = compiled.querySelector('input[id="arrivalDate"').value;

//     expect(arrivalDateInput).toBe(validApiToken.arrivalDate);
//     expect(arrivalDateInput).toBeTruthy();
//   });

//   it('should render departureDate FormControl correctly', () => {
//     const compiled = fixture.debugElement.nativeElement;
//     const departureDateInput = compiled.querySelector('input[id="departureDate"').value;

//     expect(departureDateInput).toBe(validApiToken.departureDate);
//     expect(departureDateInput).toBeTruthy();
//   });

//   it('should validate departure FormControl correctly', () => {
//     const departureControl = component.apiTokenForm.get('departure');

//     expect(departureControl.errors).toBeNull();
//     departureControl.setValue('');
//     expect(departureControl.errors.required).toBeTruthy();
//   });

//   it('should validate arrival FormControl correctly', () => {
//     const arrivalControl = component.apiTokenForm.get('arrival');

//     expect(arrivalControl.errors).toBeNull();
//     arrivalControl.setValue('');
//     expect(arrivalControl.errors.required).toBeTruthy();
//   });

//   it('should validate arrivalDate FormControl correctly', () => {
//     const arrivalDateControl = component.apiTokenForm.get('arrivalDate');

//     expect(arrivalDateControl.errors).toBeNull();
//     arrivalDateControl.setValue(null);
//     expect(arrivalDateControl.errors.required).toBeTruthy();
//   });

//   it('should validate departureDate FormControl correctly', () => {
//     const departureDateControl = component.apiTokenForm.get('departureDate');

//     expect(departureDateControl.errors).toBeNull();
//     departureDateControl.setValue(null);
//     expect(departureDateControl.errors.required).toBeTruthy();
//   });

//   it('should emit the submitTokenEvent on click when ApiToken is valid', fakeAsync(() => {
//     spyOn(component.submitTokenEvent, 'emit');
//     fixture.nativeElement.querySelector('button').click();
//     tick();
//     expect(component.submitTokenEvent.emit).toHaveBeenCalledWith(validApiToken);
//     expect(component.submitTokenEvent.emit).toHaveBeenCalledTimes(1);
//   }));

//   it('should trigger an event on "submitForm" when ApiForm is valid', fakeAsync(() => {
//     spyOn(component.submitTokenEvent, 'emit');
//     component.submitForm();
//     tick();
//     expect(component.submitTokenEvent.emit).toHaveBeenCalledWith(validApiToken);
//     expect(component.submitTokenEvent.emit).toHaveBeenCalledTimes(1);
//   }));
// });

// describe('JourneySearchFormComponent', () => {
//   let component: JourneySearchFormComponent;
//   let fixture: ComponentFixture<JourneySearchFormComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [JourneySearchFormComponent],
//       imports: [ReactiveFormsModule],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(JourneySearchFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should not emit submitTokenEvent on click when API token is NOT valid', fakeAsync(() => {
//     spyOn(component.submitTokenEvent, 'emit');
//     fixture.nativeElement.querySelector('button').click();
//     tick();
//     expect(component.submitTokenEvent.emit).not.toHaveBeenCalled();
//   }));

//   it('should not trigger an event on "submitForm" when ApiForm is NOT valid', fakeAsync(() => {
//     spyOn(component.submitTokenEvent, 'emit');
//     component.submitForm();
//     tick();
//     expect(component.submitTokenEvent.emit).not.toHaveBeenCalled();
//   }));
// });
