/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
export class TableComponent {
    constructor() {
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
    /**
     * @param {?} column
     * @return {?}
     */
    getProperty(column) {
        if (column.name === 'ProjectId')
            return 'none';
    }
    /**
     * @param {?} column
     * @return {?}
     */
    getWidth(column) {
        if (column.name === 'ProjectRova')
            return '100px';
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-table',
                template: " \r\n<div class=\"mat-elevation-z8 mat-table\">\r\n  <mat-table [dataSource]=\"dataSource\" >\r\n  <ng-container *ngFor=\"let column of columns\"  [matColumnDef]=  \"column.name\">\r\n \r\n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\" [ngStyle]=\"{display:getProperty(column)}\"> </mat-header-cell>\r\n       <mat-cell *matCellDef=\"let element\" [ngStyle]=\"{display:getProperty(column),width:getWidth(column)}\" > \r\n            <span [innerText]=\"element[column.name]\"  libCopy></span> \r\n       </mat-cell> \r\n     \r\n  </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"  (dblclick)=\"getRecord(row)\"></mat-row>\r\n      \r\n    </mat-table>  \r\n\r\n<!-- <div class=\"paginator\">\r\n  <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>  \r\n  </div> -->\r\n</div>\r\n\r\n ",
                encapsulation: ViewEncapsulation.None,
                styles: ["body{font-family:\"Segoe UI\",Tahoma,Geneva,Verdana,sans-serif;direction:rtl}body *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;text-decoration:none}body a{color:#000}body .mat-select-panel.custom-select .mat-option{height:100px}.mat-elevation-z8{display:flex;flex-direction:column;overflow:hidden;overflow-y:auto}.mat-elevation-z8 mat-table mat-header-cell{width:150px;justify-content:center;border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize;font-weight:700;text-shadow:3px;font-size:larger}.mat-elevation-z8 mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}.mat-elevation-z8 mat-table mat-header-row{color:#fff;font-size:18px}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVXJFLE1BQU0sT0FBTyxjQUFjO0lBVXpCO1FBUFUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMscUJBQWdCLEdBQWEsRUFBRSxDQUFBO0lBUTNCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUE7UUFDOUQsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO2NBQzFCLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTztRQUN4QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QztJQUNILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXO1lBQzdCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBQ0QsUUFBUSxDQUFDLE1BQU07UUFDYixJQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssYUFBYTtZQUM5QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwrOEJBQXFDO2dCQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7O3NCQUVFLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxNQUFNO3dCQU1OLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBUnpDLGlDQUEyQjs7SUFDM0IsOEJBQXFCOztJQUNyQixpQ0FBNEM7O0lBQzVDLDBDQUErQjs7SUFDL0Isb0NBQVU7O0lBSVYsbUNBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3R5cGVzJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgY29sdW1uczogQ29sdW1uW107XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQE91dHB1dCgpIGRiQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdXHJcbiAgZGF0YVNvdXJjZVxyXG5cclxuXHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7IHN0YXRpYzogdHJ1ZSB9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8vIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZ1xyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKVxyXG4gICAgfSwgMjAwKTtcclxuXHJcblxyXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMucm93cyk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHJvd3MgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAocm93cykge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4ocm93cy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWNvcmQocm93KSB7XHJcbiAgICB0aGlzLmRiQ2xpY2suZW1pdChyb3cpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoY29sdW1uKSB7XHJcbiAgICBpZiAoY29sdW1uLm5hbWUgPT09ICdQcm9qZWN0SWQnKVxyXG4gICAgICByZXR1cm4gJ25vbmUnO1xyXG4gIH1cclxuICBnZXRXaWR0aChjb2x1bW4pe1xyXG4gICAgaWYoY29sdW1uLm5hbWUgPT09ICdQcm9qZWN0Um92YScpXHJcbiAgICAgIHJldHVybiAnMTAwcHgnO1xyXG4gIH1cclxufVxyXG4iXX0=