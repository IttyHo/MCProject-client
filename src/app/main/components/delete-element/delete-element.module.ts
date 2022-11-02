import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {  MatButtonModule } from '@angular/material';
import { DeleteElementComponent } from './delete-element.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DeleteElementComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[DeleteElementComponent],
  exports:[DeleteElementComponent]
})
export class DeleteElementModule { }
