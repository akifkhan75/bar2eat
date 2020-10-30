import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit  {

  opened: boolean;
  panelOpenState
  @ViewChild(HeaderComponent) child;
  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage($event) {
    this.opened = $event
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
