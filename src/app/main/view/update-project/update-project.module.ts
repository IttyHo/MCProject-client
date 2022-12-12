import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProjectComponent } from './update-project.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatIconModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { PipesModule } from 'pipes';
import { DirectivesModule } from 'directives';



@NgModule({
  declarations: [UpdateProjectComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    PipesModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    DirectivesModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    IonicModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[UpdateProjectComponent],
  exports:[UpdateProjectComponent]
})
export class UpdateProjectModule { }
