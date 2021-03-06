import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../models/event';
import {configs} from '../../../../util';
import {EventService} from '../../../services/event.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  eventDetail$: Observable<Event | Event[]>;
  urlBE: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {
    this.getEventDetail();
  }

  ngOnInit() {
    this.urlBE = configs.BE_BASE_URL;
  }

  getEventDetail(): void {
    this.eventDetail$ = this.route.paramMap
      .switchMap(
        (params: ParamMap) =>
      this.eventService
        .getEvent(
          params.get('id')
        )
      );
  }

  backToEventList(): void {
    this.router.navigate(['/event-list']);
  }

}
