import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySearchComponent } from './journey-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { JourneySearchFormComponent } from '../components/journey-search-form/journey-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { apiToken } from 'src/model/test-object-mother.spec';

describe('JourneySearchComponent', () => {
  let component: JourneySearchComponent;
  let fixture: ComponentFixture<JourneySearchComponent>;

  const initialState = {};

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

    it('should create child component', () => {
      expect(childComponent).toBeTruthy();
    });
  });
});
