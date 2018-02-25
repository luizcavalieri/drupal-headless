import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './services/event.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule
      .register(
        '/ngsw-worker.js',
        {
          enabled: environment.production
        }),
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    EventService,
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
