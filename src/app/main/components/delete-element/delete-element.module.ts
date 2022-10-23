import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {  MatButtonModule } from '@angular/material';
import { DeleteElementComponent } from './delete-element.component';



@NgModule({
  declarations: [DeleteElementComponent],
  imports: [
    CommonModule,
    // MatButtonModule
  ],
  entryComponents:[DeleteElementComponent],
  exports:[DeleteElementComponent]
})
export class DeleteElementModule { }
