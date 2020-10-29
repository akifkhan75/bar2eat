import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  opened: boolean;
  panelOpenState
  @ViewChild(HeaderComponent) child;
  constructor() { }

  ngOnInit(): void {
  }

  

  receiveMessage($event) {
    this.opened = $event
  }

}
