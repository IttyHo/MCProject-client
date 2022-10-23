import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounselorsByTypeComponent } from './counselors-by-type.component';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [CounselorsByTypeComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports:[CounselorsByTypeComponent]
})
export class CounselorsByTypeModule { }
