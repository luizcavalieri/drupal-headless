import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './services/event.service';
import { MessageService } from './services/message.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent
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
    MatCardModule
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
