import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../models/event';
import {configs} from '../../util';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  @Input() eventDetail: Event;
  urlBE: string;

  constructor() { }

  ngOnInit() {
    this.urlBE = configs.BE_BASE_URL;
  }

}
