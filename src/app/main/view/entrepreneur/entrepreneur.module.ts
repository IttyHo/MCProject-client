import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepreneurComponent } from './entrepreneur.component';
import { TableModule } from 'components';
import { DeleteElementModule } from '../../components/delete-element/delete-element.module';
import { IonicModule } from '@ionic/angular';
import { MatMenuModule } from '@angular/material';
import { DirectivesModule } from 'directives';



@NgModule({
  declarations: [EntrepreneurComponent],
  imports: [
    CommonModule,
    TableModule,
    DeleteElementModule,
    IonicModule,
    MatMenuModule,
    DirectivesModule
  ],
  exports:[EntrepreneurComponent]
})
export class EntrepreneurModule { }
