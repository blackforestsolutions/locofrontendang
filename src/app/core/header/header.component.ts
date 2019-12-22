import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openSidenavEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
