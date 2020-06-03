import { ReactiveFormsModule } from '@angular/forms'; // forms
import { ApiTokenAndUrlInformation } from '@blackforestsolutions/locodatamodel';
import { createComponentFactory, Spectator, SpectatorHost } from '@ngneat/spectator/jest'; // in order to use jest and not jasmine
import { JourneySearchFormComponent } from './journey-search-form.component'; // component which is tested
import { fakeAsync, async } from '@angular/core/testing';
import { Button } from 'protractor';
import { JourneySearchComponent } from '../../container/journey-search.component';
import { createHostFactory } from '@ngneat/spectator';
import { doc } from 'prettier';

describe('JourneySearchFormComponent', () => {
  // scope of Tests
  let spectator: Spectator<JourneySearchFormComponent>; //
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
          // anstatt @input - mocken
          apiToken: validApiToken, // hier wird das apitoken zur component gegeben
        },
      });
    });

    it('should trigger an output event by method call', () => {
      let result: ApiTokenAndUrlInformation;
      spectator.output('submitTokenEvent').subscribe((output: ApiTokenAndUrlInformation) => (result = output)); // habe valid token & putput event wird geschmissen

      spectator.component.submitForm();

      expect(result).toEqual(validApiToken);
    });

    it('should trigger an output', () => {
      let result: ApiTokenAndUrlInformation;
      spectator.output('submitTokenEvent').subscribe((output: ApiTokenAndUrlInformation) => (result = output));

      spectator.click('button');

      expect(result).toEqual(validApiToken);
    });

    it('should init formGroup correctly', () => {
      expect(spectator.component.apiTokenForm.value).toEqual(validApiToken);
      expect(spectator.component.apiTokenForm.valid).toBeTruthy();
    });

    it('should validate departure FormControl correctly', () => {
      const departureControl = spectator.component.apiTokenForm.get('departure');

      expect(departureControl.errors).toBeNull();
      departureControl.setValue('');
      expect(departureControl.errors.required).toBeTruthy();
    });

    it('should validate arrival FormControl correctly', () => {
      const arrivalControl = spectator.component.apiTokenForm.get('arrival');

      expect(arrivalControl.errors).toBeNull();
      arrivalControl.setValue('');
      expect(arrivalControl.errors.required).toBeTruthy();
    });
    it('should validate arrivalDate FormControl correctly', () => {
      const arrivalDateControl = spectator.component.apiTokenForm.get('arrivalDate');

      expect(arrivalDateControl.errors).toBeNull();
      arrivalDateControl.setValue(null);
      expect(arrivalDateControl.errors.required).toBeTruthy();
    });
    it('should validate departureDate FormControl correctly', () => {
      const departureDateControl = spectator.component.apiTokenForm.get('departureDate');

      expect(departureDateControl.errors).toBeNull();
      departureDateControl.setValue(null);
      expect(departureDateControl.errors.required).toBeTruthy();
    });
  });

  describe('with invalid token', () => {
    const invalidToken: ApiTokenAndUrlInformation = {
      arrival: '',
      departure: '',
      arrivalDate: expect.any(String),
      departureDate: expect.any(String),
    };

    beforeEach(() => {
      spectator = createComponent({
        props: {
          // anstatt @input - mocken
          apiToken: invalidToken, // hier wird das apitoken zur component gegeben
        },
      });
    });

    /* it('should take an emergency token', () => {
      expect(spectator.component.apiToken).toEqual(expect.objectContaining({ departure: '', arrival: '' }));
    });
 */
    it('should fill the empty departure formControl with valid input', () => {
      spectator.typeInElement('Furtwangen', '#departure');

      expect(spectator.component.apiTokenForm.get('departure').value).toEqual('Furtwangen');
    });

    it('should fill the empty arrival formControl with valid input', () => {
      spectator.typeInElement('Triberg', '#arrival');

      expect(spectator.component.apiTokenForm.get('arrival').value).toEqual('Triberg');
    });

    it('should fill the empty departureDate formControl with valid input', () => {
      spectator.typeInElement('2020-06-03T14:06:11.970Z', '#departureDate');

      expect(spectator.component.apiTokenForm.get('departureDate').value).toEqual('2020-06-03T14:06:11.970Z');
    });

    it('should fill the empty arrivalDate formControl with valid input', () => {
      spectator.typeInElement('2020-06-03T14:06:14.970Z', '#arrivalDate');

      expect(spectator.component.apiTokenForm.get('arrivalDate').value).toEqual('2020-06-03T14:06:14.970Z');
    });

    it('should fill the empty formControl with valid input', () => {
      spectator.typeInElement('Schwenningen', '#departure');
      spectator.typeInElement('Dauchingen', '#arrival');
      spectator.typeInElement('2020-06-05T14:06:11.970Z', '#departureDate');
      spectator.typeInElement('2020-06-07T14:06:11.970Z', '#arrivalDate');

      expect(spectator.component.apiTokenForm.get('departure').value).toEqual('Schwenningen');
      expect(spectator.component.apiTokenForm.get('arrival').value).toEqual('Dauchingen');
      expect(spectator.component.apiTokenForm.get('departureDate').value).toEqual('2020-06-05T14:06:11.970Z');
      expect(spectator.component.apiTokenForm.get('arrivalDate').value).toEqual('2020-06-07T14:06:11.970Z');
    });

    it('should not trigger an output', () => {
      let result: ApiTokenAndUrlInformation;
      const eventSpy = jest.spyOn(spectator.component.submitTokenEvent, 'emit');

      spectator.component.submitForm();

      expect(eventSpy).toHaveBeenCalledTimes(0);
    });
  });
});

//
/* describe('JourneySearchFormComponent Integrationtest', () => {
  let spectator: SpectatorHost<JourneySearchFormComponent, JourneySearchComponent>;
  const createHost = createHostFactory({
    component: JourneySearchFormComponent,
    host: JourneySearchComponent,
  });
  it('should do something', () => {
    spectator = createHost('<></>')
  });
}); */
