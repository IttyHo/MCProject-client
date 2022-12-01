import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EntrepreneurDetailsService, GetEntrepreneurService } from 'services';
import { NEVER, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { Entrepreneur, Column } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { environment } from 'src/environments/environment';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { SubscriptionService } from '../../services/subscription.service';
import { DeleteElementComponent } from '../../components/delete-element/delete-element.component';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { UpdateEntrepreneurComponent } from '../update-entrepreneur/update-entrepreneur.component';


@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss']
})
export class EntrepreneurComponent implements OnInit {
  columns$: Observable<Column[]> = NEVER;
  deleteImg = { imgPath: environment.imgesPath, img: '/delete.png' };
  en = {}
  updateImg = { imgPath: environment.imgesPath, img: '/pen.png' };
  update = this.updateImg.imgPath + this.updateImg.img
  delete = this.deleteImg.imgPath + this.deleteImg.img
  flag: Boolean = false;

  constructor(
    public entrepreneurService: GetEntrepreneurService,
    private readColumns: ReadColumnsService,
    public entrepreneurDetails: EntrepreneurDetailsService,
    private selectedService: SelectedNevigationService,
    public dialog: MatDialog,
    public subscriptionService: SubscriptionService,
  ) { }
  ngOnInit() {
    const Delete = this.deleteImg.imgPath + this.deleteImg.img;
    this.init();
    this.columns$ = this.readColumns.getColumns$(environment.enrepreneursTableColumns)
  }
  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu: MatMenuTrigger;

  @ViewChild("block", { static: false }) block: ElementRef;

  on(item: any) {
    console.log("item = ", item.target.getBoundingClientRect());
  }
  Delete(e) {
    this.subscriptionService.show= true
    e.preventDefault()
    console.log(e);
    console.log(e.x,e.y);
    // document.getElementById("ionButton").style.position= "absolute";
    // document.getElementById("section").offsetLeft= e.x;

    this.selectedService.location.x=e.x;
    this.selectedService.location.y=e.y;
    console.log(this.selectedService.location.x+"     location x");
    console.log(this.selectedService.location.y+"     location y");

    if (e.srcElement.localName == 'ion-button') {
      this.en = e.srcElement.innerText;
      console.log(this.en, "logging");
      // this.contextMenu.openMenu();
    }
  }
  onContextMenuUpdate(item) {
    this.selectedService.selectedItem=item;
    console.log("to update");
    this.func(this.en);
  }

  onContextMenuDelete(item) {
    this.selectedService.selectedItem = item;
    this.func(this.en);

  }

  func(en) {
    this.entrepreneurService.entrepreneurs.forEach(async el => {
      if (el.EntrepreneurCompany.toUpperCase() === en) {
        if (this.selectedService.selectedItem === 'delete') {
          this.entrepreneurDetails.entrepreneurToDelete = el
          this.subscriptionService.Type = 'יזם'
          this.subscriptionService.detail = el.EntrepreneurCompany
          this.subscriptionService.dialogRef = this.dialog.open(DeleteElementComponent, {
            height: '0px',
            width: '0px',
            disableClose: true,
            panelClass: 'deleteDialog'
          })
        }
        else {
          this.entrepreneurDetails.entrepreneurToUpdate = el
          this.subscriptionService.dialogRef = this.dialog.open(UpdateEntrepreneurComponent, {
            height: '560px',
            width: '550px',
            disableClose: true,
            data: true,
            panelClass: 'update'

          })
        }
      }
    })
  }

  getEntrepreneurDetalis(entrepreneur, e) {
    console.log(entrepreneur, "entrepreneur in getEntrepreneurDetalis before");
    this.entrepreneurService.entrepreneurs.forEach(el => {
      console.log({ el });
      if (el === entrepreneur) {
        this.entrepreneurDetails.entrepreneur = el
        this.selectedService.updateSelected('oneEntrepreneur')
        this.selectedService['oneYazam'] = el;
      }
    });
  }

  async init() {
    this.entrepreneurService.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$().pipe(
      map(entrepreneurs => this.entrepreneurService.entrepreneurs = entrepreneurs),
      tap(entrepreneurs => console.log('entrepreneurs:', this.entrepreneurService.entrepreneurs)),
    );
  }

}

