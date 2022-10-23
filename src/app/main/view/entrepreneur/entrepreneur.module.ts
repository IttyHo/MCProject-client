import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepreneurComponent } from './entrepreneur.component';
import { TableModule } from 'components';
import { DeleteElementModule } from '../../components/delete-element/delete-element.module';



@NgModule({
  declarations: [EntrepreneurComponent],
  imports: [
    CommonModule,
    TableModule,
    DeleteElementModule
  ],
  exports:[EntrepreneurComponent]
})
export class EntrepreneurModule { }
