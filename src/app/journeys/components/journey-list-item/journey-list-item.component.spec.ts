import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyListItemComponent } from './journey-list-item.component';
import { JourneyListComponent } from '../../container/journey-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component } from '@angular/core';
import { Journey } from '@blackforestsolutions/locodatamodel';

describe('JourneyListItemComponent', () => {
  let component: JourneyListItemComponent;
  let fixture: ComponentFixture<JourneyListItemComponent>;

  describe('Unit-Tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [JourneyListItemComponent],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(JourneyListItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Integrationtest', () => {
    let hostComponent: JourneyListComponent;
    let hostFixture: ComponentFixture<JourneyListComponent>;
    const journey: Journey = { id: '123' };

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [JourneyListItemComponent, JourneyListComponent],
        schemas: [NO_ERRORS_SCHEMA],
      });
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(JourneyListItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should pass input binding correctly', () => {
      expect(false).toBeTruthy();
    });
  });
});
