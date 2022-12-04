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
    /**
     * @param {?} columns
     * @return {?}
     */
    getProperties(columns) {
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            if (column.name === 'ProjectId')
                return 'none';
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVXJFLE1BQU0sT0FBTyxjQUFjO0lBVXpCO1FBUFUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMscUJBQWdCLEdBQWEsRUFBRSxDQUFBO0lBUTNCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUE7UUFDOUQsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO2NBQzFCLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTztRQUN4QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QztJQUNILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXO1lBQzdCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBQ0QsUUFBUSxDQUFDLE1BQU07UUFDYixJQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssYUFBYTtZQUM5QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7OztJQUNELGFBQWEsQ0FBQyxPQUFPO1FBQ25CLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVc7Z0JBQzFCLE9BQU8sTUFBTSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsKzhCQUFxQztnQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztzQkFFRSxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsTUFBTTt3QkFNTixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQVJ6QyxpQ0FBMkI7O0lBQzNCLDhCQUFxQjs7SUFDckIsaUNBQTRDOztJQUM1QywwQ0FBK0I7O0lBQy9CLG9DQUFVOztJQUlWLG1DQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICd0eXBlcyc7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGNvbHVtbnM6IENvbHVtbltdO1xyXG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xyXG4gIEBPdXRwdXQoKSBkYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXVxyXG4gIGRhdGFTb3VyY2VcclxuXHJcblxyXG5cclxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvciwgeyBzdGF0aWM6IHRydWUgfSkgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAvLyBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSlcclxuICAgIH0sIDIwMCk7XHJcblxyXG5cclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLnJvd3MpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyByb3dzIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKHJvd3MpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHJvd3MuY3VycmVudFZhbHVlKTtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVjb3JkKHJvdykge1xyXG4gICAgdGhpcy5kYkNsaWNrLmVtaXQocm93KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KGNvbHVtbikge1xyXG4gICAgaWYgKGNvbHVtbi5uYW1lID09PSAnUHJvamVjdElkJylcclxuICAgICAgcmV0dXJuICdub25lJztcclxuICB9XHJcbiAgZ2V0V2lkdGgoY29sdW1uKXtcclxuICAgIGlmKGNvbHVtbi5uYW1lID09PSAnUHJvamVjdFJvdmEnKVxyXG4gICAgICByZXR1cm4gJzEwMHB4JztcclxuICB9XHJcbiAgZ2V0UHJvcGVydGllcyhjb2x1bW5zKSB7XHJcbiAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKGNvbHVtbi5uYW1lID09PSAnUHJvamVjdElkJylcclxuICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==