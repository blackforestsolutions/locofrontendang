import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Journey } from 'src/test/locodatamodel';

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
}
