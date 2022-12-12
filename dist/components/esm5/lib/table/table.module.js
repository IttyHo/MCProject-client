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
var TableModule = /** @class */ (function () {
    function TableModule() {
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
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0csT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QztJQUFBO0lBZ0IyQixDQUFDOztnQkFoQjNCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzlCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBQyxDQUFDLGNBQWMsQ0FBQztpQkFDekI7O0lBQzBCLGtCQUFDO0NBQUEsQUFoQjVCLElBZ0I0QjtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZXNNb2R1bGUgfSBmcm9tICdkaXJlY3RpdmVzJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbi8vIGltcG9ydCB7IEFkZFByb2plY3RNb2R1bGUgfSBmcm9tICdzcmMvYXBwL21haW4vdmlldy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDbG9ja01vZHVsZSB9IGZyb20gJy4uL2Nsb2NrL2Nsb2NrLm1vZHVsZSc7XHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgRGlyZWN0aXZlc01vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ2xvY2tNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czpbVGFibGVDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9XHJcbiJdfQ==