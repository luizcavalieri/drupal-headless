import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Extra Modules.
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LazyModule} from '../directives/lazy-load/lazy.module';
// Custom created modules.


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LazyModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    LazyModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class SharedModuleModule { }
