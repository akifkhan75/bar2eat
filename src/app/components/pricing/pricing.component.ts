import { Component, OnInit,ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

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
