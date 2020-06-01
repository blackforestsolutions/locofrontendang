import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySearchComponent } from './journey-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { JourneySearchFormComponent } from '../components/journey-search-form/journey-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { apiToken } from 'src/test/test-object-mother.spec';
import { SpectatorRouting } from '@ngneat/spectator/jest/public_api';
import { createRoutingFactory } from '@ngneat/spectator';
import { JourneyListComponent } from 'src/app/journeys/container/journey-list.component';
import { State } from 'src/app/reducers';

describe('JourneySearchComponent', () => {
  let component: JourneySearchComponent;
  let fixture: ComponentFixture<JourneySearchComponent>;

  const initialState = { apiToken };

  describe('Unit-Tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [JourneySearchComponent],
        imports: [RouterTestingModule],
        providers: [provideMockStore({ initialState })],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(JourneySearchComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Integrationtests', () => {
    let childComponent: JourneySearchFormComponent;
    let childFixture: ComponentFixture<JourneySearchFormComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [JourneySearchComponent, JourneySearchFormComponent],
        imports: [RouterTestingModule, ReactiveFormsModule],
        providers: [provideMockStore({ initialState })],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(JourneySearchComponent);
      childFixture = TestBed.createComponent(JourneySearchFormComponent);
      component = fixture.componentInstance;
      childComponent = childFixture.componentInstance;
      childComponent.apiToken = apiToken;
      childFixture.detectChanges();
      fixture.detectChanges();
    });

    // it('should create child component', () => {
    //   expect(childComponent).toBeTruthy();
    // });
  });
  describe('routing testing', () => {
    let spetator: SpectatorRouting<JourneySearchComponent>;
    const initialState: State = {
      apiToken,
      journeys: [],
    };
    const createComponent = createRoutingFactory({
      component: JourneySearchComponent,
      declarations: [
        JourneyListComponent,
        provideMockStore({
          initialState,
        }),
      ],
      stubsEnabled: false,
      routes: [
        {
          path: '',
          component: JourneySearchComponent,
        },
        {
          path: 'journeys',
          component: JourneyListComponent,
        },
      ],
    });

    it.only('should navigate to /journeys', async () => {
      const spectator = createComponent();
      await spectator.fixture.whenStable();

      expect(spectator.inject(Location).pathname).toBe('/');

      spectator.component.submitToken(apiToken);

      await spectator.fixture.whenStable();

      expect(spectator.inject(Location).pathname).toBe('/journeys');
    });
  });
});

// routing testen ->x click button to get to /journeys
// bekommen wir Daten aus dem store
// integrationstests store zu component
