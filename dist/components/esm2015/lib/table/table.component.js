/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
export class TableComponent {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
        this.dbClick = new EventEmitter();
        this.displayedColumns = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.displayedColumns = this.columns.map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ name }) => name));
        }), 200);
        this.dataSource = new MatTableDataSource(this.rows);
        this.dataSource.paginator = this.paginator;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { rows } = changes;
        if (rows) {
            this.dataSource = new MatTableDataSource(rows.currentValue);
            this.dataSource.paginator = this.paginator;
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getRecord(row) {
        this.dbClick.emit(row);
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-table',
                template: " \r\n<div class=\"mat-elevation-z8 mat-table\">\r\n  <mat-table [dataSource]=\"dataSource\" >\r\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\r\n \r\n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\r\n       <mat-cell *matCellDef=\"let element\" > \r\n            <span [innerText]=\"element[column.name]\" libCopy></span> \r\n\r\n       </mat-cell> \r\n     \r\n  </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"getRecord(row)\"></mat-row>\r\n  \r\n  </mat-table>  \r\n\r\n<!-- <div class=\"paginator\">\r\n  <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>  \r\n  </div> -->\r\n</div>\r\n\r\n ",
                encapsulation: ViewEncapsulation.None,
                styles: ["body{font-family:\"Segoe UI\",Tahoma,Geneva,Verdana,sans-serif;direction:rtl}body *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;text-decoration:none}body a{color:#000}body .mat-select-panel.custom-select .mat-option{height:100px}:host{display:flex;flex-direction:column;overflow:hidden!important}:host .example-container.mat-elevation-z8{overflow-y:auto}:host mat-table{overflow:hidden;overflow-y:auto}:host .newButton{top:250px}mat-cell,mat-footer-cell,mat-header-cell{width:150px;justify-content:center}::ng-deep .mat-elevation-z8{overflow:scroll!important}.mat-table mat-header-cell{border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize}.mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}.mat-button-base{top:37vh!important;box-sizing:border-box;position:relative}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: MatDialog }
];
TableComponent.propDecorators = {
    columns: [{ type: Input }],
    rows: [{ type: Input }],
    dbClick: [{ type: Output }],
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }]
};
if (false) {
    /** @type {?} */
    TableComponent.prototype.columns;
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.dbClick;
    /** @type {?} */
    TableComponent.prototype.displayedColumns;
    /** @type {?} */
    TableComponent.prototype.dataSource;
    /** @type {?} */
    TableComponent.prototype.paginator;
    /** @type {?} */
    TableComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVVoRixNQUFNLE9BQU8sY0FBYzs7OztJQVV6QixZQUNTLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFSaEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMscUJBQWdCLEdBQVksRUFBRSxDQUFBO0lBUXhCLENBQUM7Ozs7SUFFUCxRQUFRO1FBQ04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFJLENBQUE7UUFDL0QsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO2NBQ3pCLEVBQUMsSUFBSSxFQUFDLEdBQUcsT0FBTztRQUN0QixJQUFHLElBQUksRUFBQztZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QztJQUNKLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwyMUJBQXFDO2dCQUVyQyxhQUFhLEVBQUMsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7WUFUUSxTQUFTOzs7c0JBV2YsS0FBSzttQkFDTCxLQUFLO3NCQUNMLE1BQU07d0JBTU4sU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7Ozs7SUFSdkMsaUNBQTBCOztJQUMxQiw4QkFBb0I7O0lBQ3BCLGlDQUE0Qzs7SUFDNUMsMENBQThCOztJQUM5QixvQ0FBVTs7SUFJVixtQ0FBaUU7O0lBRS9ELGdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICd0eXBlcyc7IFxyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOlZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGNvbHVtbnM6Q29sdW1uW107XHJcbiAgQElucHV0KCkgcm93czphbnlbXTtcclxuICBAT3V0cHV0KCkgZGJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID1bXVxyXG4gIGRhdGFTb3VyY2UgXHJcbiAgICBcclxuICAgIFxyXG5cclxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvciwge3N0YXRpYzogdHJ1ZX0pIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKCh7bmFtZX0pID0+IG5hbWUgICApXHJcbiAgICB9LCAyMDApO1xyXG4gICAgICBcclxuICAgIFxyXG4gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLnJvd3MpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgIGNvbnN0IHtyb3dzfSA9IGNoYW5nZXM7XHJcbiAgICAgaWYocm93cyl7XHJcbiAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4ocm93cy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gIGdldFJlY29yZChyb3cpe1xyXG4gICAgICB0aGlzLmRiQ2xpY2suZW1pdChyb3cpOyAgIFxyXG4gIH1cclxuXHJcbiAgLy8gIG5ubigpe1xyXG4gIC8vICAgLy8gc3dpdGNoKHRoaXMudGFibGVUeXBlKXtcclxuICAvLyAgICAgLy8gY2FzZSB0YWJsZVR5cGVFbnVtLlByb2plY3Q6XHJcbiAgLy8gICAgY29uc29sZS5sb2coXCJ0cmRmZ2hqa2hqXCIpO1xyXG5cclxuICAvLyAgICB9XHJcbiAgIFxyXG5cclxufVxyXG4iXX0=