/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.dbClick = new EventEmitter();
        this.displayedColumns = [];
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.displayedColumns = _this.columns.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var name = _a.name;
                return name;
            }));
        }), 200);
        this.dataSource = new MatTableDataSource(this.rows);
        this.dataSource.paginator = this.paginator;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var rows = changes.rows;
        if (rows) {
            this.dataSource = new MatTableDataSource(rows.currentValue);
            this.dataSource.paginator = this.paginator;
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TableComponent.prototype.getRecord = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.dbClick.emit(row);
    };
    /**
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.getProperty = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.name === 'ProjectId')
            return 'none';
    };
    /**
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.getWidth = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.name === 'ProjectRova')
            return '100px';
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    TableComponent.prototype.getProperties = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.name === 'ProjectId')
                return 'none';
        }));
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-table',
                    template: " \r\n<div class=\"mat-elevation-z8 mat-table\">\r\n  <mat-table [dataSource]=\"dataSource\" >\r\n  <ng-container *ngFor=\"let column of columns\"  [matColumnDef]=  \"column.name\">\r\n \r\n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\" [ngStyle]=\"{display:getProperty(column)}\"> </mat-header-cell>\r\n       <mat-cell *matCellDef=\"let element\" [ngStyle]=\"{display:getProperty(column),width:getWidth(column)}\" > \r\n            <span [innerText]=\"element[column.name]\"  libCopy></span> \r\n       </mat-cell> \r\n     \r\n  </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"  (dblclick)=\"getRecord(row)\"></mat-row>\r\n      \r\n    </mat-table>  \r\n\r\n<!-- <div class=\"paginator\">\r\n  <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>  \r\n  </div> -->\r\n</div>\r\n\r\n ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["body{font-family:\"Segoe UI\",Tahoma,Geneva,Verdana,sans-serif;direction:rtl}body *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;text-decoration:none}body a{color:#000}body .mat-select-panel.custom-select .mat-option{height:100px}.mat-elevation-z8{display:flex;flex-direction:column;overflow:hidden;overflow-y:auto}.mat-elevation-z8 mat-table mat-header-cell{width:150px;justify-content:center;border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize;font-weight:700;text-shadow:3px;font-size:larger}.mat-elevation-z8 mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}.mat-elevation-z8 mat-table mat-header-row{color:#fff;font-size:18px}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        columns: [{ type: Input }],
        rows: [{ type: Input }],
        dbClick: [{ type: Output }],
        paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }]
    };
    return TableComponent;
}());
export { TableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXJFO0lBZ0JFO1FBUFUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMscUJBQWdCLEdBQWEsRUFBRSxDQUFBO0lBUTNCLENBQUM7Ozs7SUFFTCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUFPLE9BQUEsSUFBSTtZQUFKLENBQUksRUFBQyxDQUFBO1FBQzlELENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUdSLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUN4QixJQUFBLG1CQUFJO1FBQ1osSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxHQUFHO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVztZQUM3QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7OztJQUNELGlDQUFROzs7O0lBQVIsVUFBUyxNQUFNO1FBQ2IsSUFBRyxNQUFNLENBQUMsSUFBSSxLQUFLLGFBQWE7WUFDOUIsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFDRCxzQ0FBYTs7OztJQUFiLFVBQWMsT0FBTztRQUNuQixPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTTtZQUNwQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVztnQkFDMUIsT0FBTyxNQUFNLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwrOEJBQXFDO29CQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7OzswQkFFRSxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsTUFBTTs0QkFNTixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUF5QzNDLHFCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FsRFksY0FBYzs7O0lBQ3pCLGlDQUEyQjs7SUFDM0IsOEJBQXFCOztJQUNyQixpQ0FBNEM7O0lBQzVDLDBDQUErQjs7SUFDL0Isb0NBQVU7O0lBSVYsbUNBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3R5cGVzJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgY29sdW1uczogQ29sdW1uW107XHJcbiAgQElucHV0KCkgcm93czogYW55W107XHJcbiAgQE91dHB1dCgpIGRiQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdXHJcbiAgZGF0YVNvdXJjZVxyXG5cclxuXHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7IHN0YXRpYzogdHJ1ZSB9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8vIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZ1xyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKVxyXG4gICAgfSwgMjAwKTtcclxuXHJcblxyXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMucm93cyk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHJvd3MgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAocm93cykge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4ocm93cy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWNvcmQocm93KSB7XHJcbiAgICB0aGlzLmRiQ2xpY2suZW1pdChyb3cpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoY29sdW1uKSB7XHJcbiAgICBpZiAoY29sdW1uLm5hbWUgPT09ICdQcm9qZWN0SWQnKVxyXG4gICAgICByZXR1cm4gJ25vbmUnO1xyXG4gIH1cclxuICBnZXRXaWR0aChjb2x1bW4pe1xyXG4gICAgaWYoY29sdW1uLm5hbWUgPT09ICdQcm9qZWN0Um92YScpXHJcbiAgICAgIHJldHVybiAnMTAwcHgnO1xyXG4gIH1cclxuICBnZXRQcm9wZXJ0aWVzKGNvbHVtbnMpIHtcclxuICAgIGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLm5hbWUgPT09ICdQcm9qZWN0SWQnKVxyXG4gICAgICAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19