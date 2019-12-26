import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySearchFormComponent } from './journey-search-form.component';

describe('JourneySearchFormComponent', () => {
  let component: JourneySearchFormComponent;
  let fixture: ComponentFixture<JourneySearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneySearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
