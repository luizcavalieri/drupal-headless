import {AfterContentInit, AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {EventService} from '../../../services/event.service';
import {Event} from '../../../models/event'
import {configs} from '../../../const/util';
import {slideToLeft, fadeInContent} from '../../../const/animations';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  animations: [slideToLeft]
})
export class EventListComponent implements OnInit, AfterContentInit {
  @HostBinding('@routerTransition') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

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

}
