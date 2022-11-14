import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[OrdersComponent]
})
export class OrdersModule { }
