import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports:[PaymentComponent]
})
export class PaymentModule { }
