/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { DirectivesModule } from 'directives';
import { FormsModule } from '@angular/forms';
// import { AddProjectModule } from 'src/app/main/view/add-project/add-project.module';
import { ClockModule } from '../clock/clock.module';
import { IonicModule } from '@ionic/angular';
export class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
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
                    IonicModule,
                    MatFormFieldModule
                ],
                exports: [TableComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0csT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW1CN0MsTUFBTSxPQUFPLFdBQVc7OztZQWhCdkIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFDLENBQUMsY0FBYyxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlLCBNYXREaWFsb2dNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG4vLyBpbXBvcnQgeyBBZGRQcm9qZWN0TW9kdWxlIH0gZnJvbSAnc3JjL2FwcC9tYWluL3ZpZXcvYWRkLXByb2plY3QvYWRkLXByb2plY3QubW9kdWxlJztcclxuaW1wb3J0IHsgQ2xvY2tNb2R1bGUgfSBmcm9tICcuLi9jbG9jay9jbG9jay5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RhYmxlQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIERpcmVjdGl2ZXNNb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENsb2NrTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6W1RhYmxlQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHsgfVxyXG4iXX0=