import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import {SharedModuleModule} from "../../shared-module/shared-module.module";
import { EventComponent } from './event.component';
import {EventListComponent} from "./event-list/event-list.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    EventComponent,
    EventListComponent,
    EventDetailComponent
  ],
  exports: [EventComponent]
})
export class AppEventModule { }




