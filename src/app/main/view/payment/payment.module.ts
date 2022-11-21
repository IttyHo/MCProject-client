import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { IonicModule } from '@ionic/angular';
import {  MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import {  MatListModule } from '@angular/material';
// import { CdkMenuModule } from '@angular/cdk';
@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatMenuModule,
    MatListModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports:[PaymentComponent]
})
export class PaymentModule { }
