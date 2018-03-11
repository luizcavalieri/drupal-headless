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
  MatCardModule,
  MatIconModule
} from '@angular/material';

import { EventService } from './services/event.service';
import { MessageService } from './services/message.service';
import {SharedModuleModule} from './shared-module/shared-module.module';
import { AppEventModule } from './modules/event/event.module';
import {LazyModule} from './directives/lazy-load/lazy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ServiceWorkerModule
      .register(
        '/ngsw-worker.js',
        {
          enabled: environment.production
        }),
    SharedModuleModule,
    AppEventModule,
    AppEventModule,
    LazyModule,
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
