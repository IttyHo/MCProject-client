import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEntrepreneurComponent } from './add-entrepreneur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AddEntrepreneurComponent],
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
  exports:[AddEntrepreneurComponent],
  entryComponents:[AddEntrepreneurComponent]
})
export class AddEntrepreneurModule { }
