import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[PaymentComponent]
})
export class PaymentModule { }
