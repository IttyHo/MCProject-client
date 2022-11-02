import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCounselorTypeComponent } from './add-counselor-type.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AddCounselorTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    IonicModule
  ],
  entryComponents:[AddCounselorTypeComponent],
  exports:[AddCounselorTypeComponent]
})
export class AddCounselorTypeModule { }
