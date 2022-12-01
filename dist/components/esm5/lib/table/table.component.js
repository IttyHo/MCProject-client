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
        console.log(column);
        if (column.name === 'ProjectId')
            return 'none';
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
            console.log(column);
            if (column.name === 'ProjectId')
                return 'none';
        }));
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-table',
                    template: " \r\n<div class=\"mat-elevation-z8 mat-table\">\r\n  <mat-table [dataSource]=\"dataSource\" >\r\n  <ng-container *ngFor=\"let column of columns\"  [matColumnDef]=  \"column.name\">\r\n \r\n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\" [ngStyle]=\"{display:getProperty(column)}\"> </mat-header-cell>\r\n       <mat-cell *matCellDef=\"let element\" [ngStyle]=\"{display:getProperty(column)}\" > \r\n            <span [innerText]=\"element[column.name]\"  libCopy></span> \r\n       </mat-cell> \r\n     \r\n  </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"  (dblclick)=\"getRecord(row)\"></mat-row>\r\n      \r\n    </mat-table>  \r\n\r\n<!-- <div class=\"paginator\">\r\n  <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>  \r\n  </div> -->\r\n</div>\r\n\r\n ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["body{font-family:\"Segoe UI\",Tahoma,Geneva,Verdana,sans-serif;direction:rtl}body *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;text-decoration:none}body a{color:#000}body .mat-select-panel.custom-select .mat-option{height:100px}.example-container.mat-elevation-z8{display:flex;flex-direction:column;overflow:hidden!important;overflow-y:scroll}.example-container.mat-elevation-z8 mat-table{overflow:hidden;overflow-y:auto}.example-container.mat-elevation-z8 mat-table mat-header-cell{width:150px;justify-content:center;border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize;font-size:larger;font-weight:700;text-shadow:3px}.example-container.mat-elevation-z8 mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}.example-container.mat-elevation-z8 mat-table .header-row{background:#c0c545;color:#fff;font-size:18px}ion-col{border:1px solid #eceeef}.mat-button-base{top:37vh!important;box-sizing:border-box;position:relative}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFJLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXZFO0lBZ0JFO1FBUFUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMscUJBQWdCLEdBQVksRUFBRSxDQUFBO0lBUXhCLENBQUM7Ozs7SUFFUCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUFNLE9BQUEsSUFBSTtZQUFKLENBQUksRUFBSSxDQUFBO1FBQy9ELENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUdQLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUN4QixJQUFBLG1CQUFJO1FBQ1gsSUFBRyxJQUFJLEVBQUM7WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDNUM7SUFDSixDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxHQUFHO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUcsTUFBTSxDQUFDLElBQUksS0FBRyxXQUFXO1lBQzFCLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Ozs7O0lBRUQsc0NBQWE7Ozs7SUFBYixVQUFjLE9BQU87UUFDdkIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE1BQU07WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQixJQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUcsV0FBVztnQkFDMUIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix3N0JBQXFDO29CQUVyQyxhQUFhLEVBQUMsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7OzswQkFFRSxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsTUFBTTs0QkFNTixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7SUF5Q3pDLHFCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FsRFksY0FBYzs7O0lBQ3pCLGlDQUEwQjs7SUFDMUIsOEJBQW9COztJQUNwQixpQ0FBNEM7O0lBQzVDLDBDQUE4Qjs7SUFDOUIsb0NBQVU7O0lBSVYsbUNBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3R5cGVzJzsgXHJcbmltcG9ydCB7ICAgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG4gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246Vmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgY29sdW1uczpDb2x1bW5bXTtcclxuICBASW5wdXQoKSByb3dzOmFueVtdO1xyXG4gIEBPdXRwdXQoKSBkYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPVtdXHJcbiAgZGF0YVNvdXJjZSBcclxuICAgIFxyXG4gICAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAvLyBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2dcclxuICAgICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoKHtuYW1lfSkgPT4gbmFtZSAgIClcclxuICAgIH0sIDIwMCk7XHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMucm93cyk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgY29uc3Qge3Jvd3N9ID0gY2hhbmdlcztcclxuICAgICBpZihyb3dzKXtcclxuICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pihyb3dzLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVjb3JkKHJvdyl7XHJcbiAgICAgIHRoaXMuZGJDbGljay5lbWl0KHJvdyk7ICAgXHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eShjb2x1bW4pe1xyXG4gICAgY29uc29sZS5sb2coY29sdW1uKTtcclxuICAgIGlmKGNvbHVtbi5uYW1lPT09J1Byb2plY3RJZCcpXHJcbiAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICBcclxuICB9XHJcbiAgIFxyXG4gIGdldFByb3BlcnRpZXMoY29sdW1ucyl7XHJcbmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgIGNvbnNvbGUubG9nKGNvbHVtbik7XHJcbiAgICBpZihjb2x1bW4ubmFtZT09PSdQcm9qZWN0SWQnKVxyXG4gICAgICByZXR1cm4gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==