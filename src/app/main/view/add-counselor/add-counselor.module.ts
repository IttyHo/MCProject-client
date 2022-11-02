import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCounselorComponent } from './add-counselor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AddCounselorComponent],
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
  exports:[AddCounselorComponent],
  entryComponents:[AddCounselorComponent]
})
export class AddCounselorModule { }
