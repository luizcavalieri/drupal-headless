import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {EventService} from '../services/event.service';
import {Event} from '../models/event'
import {HttpClientModule} from '@angular/common/http';
import {configs} from '../../util';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, AfterContentInit {
  events: Event[];
  urlBE: string;
  eventDetail: Event;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
    this.urlBE = configs.BE_BASE_URL;
  }

  ngAfterContentInit () {
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(
        events => this.events = events);
  }

  getEventDetail(event): void {
    console.log(event);
    this.eventDetail = event;
  }

  backToList(): void {
    this.eventDetail = null;
  }

}
