import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounselorsByTypeComponent } from './counselors-by-type.component';
import { MatDialogModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CounselorsByTypeComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    IonicModule
  ],
  exports:[CounselorsByTypeComponent]
})
export class CounselorsByTypeModule { }
