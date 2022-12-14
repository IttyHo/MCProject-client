import { Component, OnInit, Input, ViewChild, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Column } from 'types';
import { MatMenuTrigger, MatPaginator, MatTableDataSource } from '@angular/material';



@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnChanges {
  @Input() columns: Column[];
  @Input() rows: any[];
  @Output() dbClick = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  displayedColumns: string[] = []
  dataSource

  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu: MatMenuTrigger;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    // public dialog: MatDialog
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.displayedColumns = this.columns.map(({ name }) => name)
    }, 200);


    this.dataSource = new MatTableDataSource<any>(this.rows);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { rows } = changes;
    if (rows) {
      this.dataSource = new MatTableDataSource<any>(rows.currentValue);
      this.dataSource.paginator = this.paginator;
    }
  }

  getRecord(row) {
    this.dbClick.emit(row);
  }

  getProperty(column) {
    if (column.name === 'ProjectId')
      return 'none';
  }
  getWidth(column){
    if(column.name === 'ProjectRova')
      return '100px';
  }

  onDelete(event,row){
    event.preventDefault()
    this.delete.emit({event,row})
  }
}
