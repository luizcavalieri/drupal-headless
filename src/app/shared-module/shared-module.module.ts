import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Extra Modules.
import {
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Custom created modules.

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  declarations: []
})
export class SharedModuleModule { }
