import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounselorsByTypeComponent } from './counselors-by-type.component';
import { MatDialogModule, MatMenuItem, MatMenuModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';
import { UpdateConselorModule } from '../update-conselor/update-conselor.module';
import { UpdateConselorComponent } from '../update-conselor/update-conselor.component';


@NgModule({
  declarations: [CounselorsByTypeComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    IonicModule,
    MatMenuModule,
    
  ],
  exports:[CounselorsByTypeComponent]
})
export class CounselorsByTypeModule { }
