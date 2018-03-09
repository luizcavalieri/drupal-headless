import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {EventListComponent} from './event-list/event-list.component';
import {EventService} from '../../services/event.service';

const routes: Routes = [
  {
    path: 'event-list',
    component: EventListComponent,
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
