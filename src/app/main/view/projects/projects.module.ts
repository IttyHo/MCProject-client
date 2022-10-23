import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { TableModule } from 'components';
import { DeleteElementModule } from '../../components/delete-element/delete-element.module';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    TableModule,
    DeleteElementModule
  ],
  exports:[ProjectsComponent]
})
export class ProjectsModule { }
