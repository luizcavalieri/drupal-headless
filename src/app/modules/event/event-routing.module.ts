import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {EventListComponent} from './event-list/event-list.component';
import {EventService} from '../../services/event.service';
import {EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  {
    path: 'event-list',
    component: EventListComponent,
    data: { state: 'event-list' }
  },
  {
    path: 'event/:id',
    component: EventDetailComponent,
    data: { state: 'event' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    EventService
  ]
})
export class EventRoutingModule { }
