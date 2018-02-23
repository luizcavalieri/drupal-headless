import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {EventListComponent} from './event-list/event-list.component';
import {EventService} from './services/event.service';

const indexRoute: Route = {
  path: '',
  redirectTo: '/event-list',
  pathMatch: 'full'
};

const routes: Routes = [
  {
    path: 'event-list',
    component: EventListComponent,
  },
  indexRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EventService]
})
export class AppRoutingModule { }
