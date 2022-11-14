import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CunselorsComponent } from './cunselors.component';
import { TableModule } from 'components';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CunselorsComponent],
  imports: [
    CommonModule,
    TableModule,
    IonicModule
  ],
  exports:[CunselorsComponent]
})
export class CunselorsModule { }
