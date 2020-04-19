import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { JourneyListComponent } from './journey-list.component';
import { ApiTokenAndUrlInformation } from '@blackforestsolutions/locodatamodel';

describe('JourneyListComponent', () => {
  let component: JourneyListComponent;
  let fixture: ComponentFixture<JourneyListComponent>;

  const emptyApiToken: ApiTokenAndUrlInformation = {
    departure: '',
    arrival: '',
    departureDate: new Date().toISOString(),
  };

  const initialState = {
    apiToken: emptyApiToken,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => fixture.destroy());

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
