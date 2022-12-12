import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAndClockComponent } from './date-and-clock.component';
import { DirectivesModule } from 'directives';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClockPickerLibModule } from 'ng-clock-picker-lib';


@NgModule({
  declarations: [DateAndClockComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    BrowserModule,
    NgClockPickerLibModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[DateAndClockComponent]
})
export class DateAndClockModule { }
