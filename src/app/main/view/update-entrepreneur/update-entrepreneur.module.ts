import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEntrepreneurComponent } from './update-entrepreneur.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UpdateEntrepreneurComponent],
  imports: [
    CommonModule ,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[UpdateEntrepreneurComponent],
  exports:[UpdateEntrepreneurComponent]
})
export class UpdateEntrepreneurModule { }
