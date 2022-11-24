import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directives.component';
import { CopyDirective } from './copy.directive';
import { CommonModule } from '@angular/common';
import { FindLocationDirective } from './find-location.directive';



@NgModule({
  declarations: [DirectivesComponent, CopyDirective, FindLocationDirective],
  imports: [
    CommonModule
  ],
  exports: [DirectivesComponent,
             CopyDirective,
            FindLocationDirective]
})
export class DirectivesModule { }
