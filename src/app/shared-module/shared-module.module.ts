import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
