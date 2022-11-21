import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'ng-clock-picker-lib/lib/classes/abstract-dialog';
import { Menu } from 'types';
import { SelectedNevigationService } from '../services/selected-nevigation.service';
import { SubscriptionService } from '../services/subscription.service';
import { AddCounselorTypeComponent } from './add-counselor-type/add-counselor-type.component';
import { AddCounselorComponent } from './add-counselor/add-counselor.component';
import { AddEntrepreneurComponent } from './add-entrepreneur/add-entrepreneur.component';
import { AddProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  items: any = [];
  menu: Menu
  component = ''
  project = {};
  constructor(
    public selectedService: SelectedNevigationService,
    private dialog: MatDialog,
    private subscriptionService: SubscriptionService,
  ) { }

  ngOnInit() { }
  selectedName(item) {
    console.log(item + "    item");
    this.selectedService.selectedCounselor = item;
  }
  openDialog() {
    switch (this.selectedService.selected) {
      case 'פרויקטים':
        this.subscriptionService.dialogRef = this.dialog.open(AddProjectComponent, {
          height: '550px',
          width: '450px',
          disableClose: true,
          panelClass:'dialog'

        })
        break;
      case 'יועצים':
        this.subscriptionService.dialogRef = this.dialog.open(AddCounselorTypeComponent, {
          height: '163px',
          width: '200px',
          disableClose: true,
          panelClass:'dialog',

        })
        break;
      case 'יזמים':
        this.subscriptionService.dialogRef = this.dialog.open(AddEntrepreneurComponent, {
          height: '550px',
          width: '550px',
          disableClose: true,
          panelClass:'dialog'

        })
        break;
      case 'CounselorsByType':
        this.subscriptionService.dialogRef = this.dialog.open(AddCounselorComponent, {
          height: '400px',
          width: '550px',
          disableClose: true,
          panelClass:'dialog'
        })
        break;

      
    } 
  }
}
