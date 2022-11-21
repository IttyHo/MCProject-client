import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateConselorComponent } from './update-conselor.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

   @NgModule({
    declarations: [UpdateConselorComponent],
    imports: [
      CommonModule,
      IonicModule,
      ReactiveFormsModule,
      FormsModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    entryComponents:[UpdateConselorComponent],
    exports:[UpdateConselorComponent]
 })
export class UpdateConselorModule { }
