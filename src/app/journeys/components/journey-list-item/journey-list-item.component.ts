import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Journey } from '@blackforestsolutions/locodatamodel';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'bs-journey-list-item',
  templateUrl: './journey-list-item.component.html',
  styleUrls: ['./journey-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyListItemComponent implements OnInit {
  @Input() journey: Journey;

  constructor() {}

  ngOnInit(): void {}

  points(): { [key: string]: Journey } {
    return (this.journey as { [key: string]: any }) || {};
  }

  originalOrder(a: KeyValue<string, any>, b: KeyValue<string, any>) {
    return 0;
  }
}
