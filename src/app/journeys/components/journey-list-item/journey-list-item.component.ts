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

  originalOrder(a: KeyValue<number, string>, b: KeyValue<number, string>) {
    return 0;
  }
}
