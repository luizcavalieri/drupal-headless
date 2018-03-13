import { Component, OnInit } from '@angular/core';
import {routerTransition, slideToLeft} from '../../const/animations';

@Component({
  selector: 'app-event',
  animations: [ routerTransition ],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
