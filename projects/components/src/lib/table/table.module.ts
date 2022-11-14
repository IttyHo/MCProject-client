import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule, MatDialogModule, MatPaginatorModule } from '@angular/material';
import { DirectivesModule } from 'directives';
import { FormsModule } from '@angular/forms';
// import { AddProjectModule } from 'src/app/main/view/add-project/add-project.module';
import { ClockModule } from '../clock/clock.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    DirectivesModule,
    MatDialogModule,
    FormsModule,
    ClockModule,
    IonicModule
  ],
  exports:[TableComponent],
})
export class TableModule { }
