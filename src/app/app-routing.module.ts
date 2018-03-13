import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

import {EventService} from './services/event.service';

const indexRoute: Route = {
  path: '',
  redirectTo: '/event-list',
  pathMatch: 'full',
  data: { state: 'event-list' }
};

const routes: Routes = [
  indexRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EventService]
})
export class AppRoutingModule { }
