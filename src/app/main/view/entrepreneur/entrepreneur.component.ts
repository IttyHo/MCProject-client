import { Component, OnInit } from '@angular/core';
import { EntrepreneurDetailsService, GetEntrepreneurService } from 'services';
import { NEVER, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { Entrepreneur, Column } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material';
import { SubscriptionService } from '../../services/subscription.service';
import { DeleteElementComponent } from '../../components/delete-element/delete-element.component';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss']
})
export class EntrepreneurComponent implements OnInit {
  columns$: Observable<Column[]> = NEVER;
  deleteImg = { imgPath: environment.imgesPath, img: '/delete.png' };
  en = {}
  flag:Boolean=false;

  constructor(
    public entrepreneurService: GetEntrepreneurService,
    private readColumns: ReadColumnsService,
    public entrepreneurDetails: EntrepreneurDetailsService,
    private selectedService: SelectedNevigationService,
    public dialog: MatDialog,
    public subscriptionService: SubscriptionService,
    private alertController: AlertController
  ) { }
  ngOnInit() {
    const Delete = this.deleteImg.imgPath + this.deleteImg.img;
    this.init();
    this.columns$ = this.readColumns.getColumns$(environment.enrepreneursTableColumns)
  }
  delete(e) {
    console.log("fffffffffffffffffffffffffffffff");
    e.preventDefault()
    if (e.srcElement.localName == 'ion-button') {
      this.en = e.srcElement.innerText;
      console.log(this.en, "logging");
      this.func(this.en);
    }
  }
  func(en) {
    this.entrepreneurService.entrepreneurs.forEach(async el => {
      if (el.EntrepreneurCompany.toUpperCase() === en) {
        this.entrepreneurDetails.entrepreneurToDelete = el
        this.subscriptionService.Type='יזם'
        this.subscriptionService.detail=el.EntrepreneurCompany
        this.subscriptionService.dialogRef = this.dialog.open(DeleteElementComponent, {
          height: '0px',
          width: '0px',
          disableClose: true,
          panelClass:'deleteDialog'
        }) 
        // const alert = this.alertController.create({
        //   header: ` ${this.subscriptionService.detail}האם אתה בטוח שאתה רוצה למחוק את היזם?`,
        //   cssClass: 'custom-alert',
        //   buttons: [
        //     {
        //       text: 'No',
        //       role:'no',
        //       cssClass: 'alert-button-cancel',
        //       handler: () => {
        //         this.flag = false;
        //       },
        //     },
        //     {
        //       text: 'Yes',
        //       role:'yes',
        //       cssClass: 'alert-button-confirm',
        //       handler: () => {
        //         this.flag = true;
        //       },
        //     },
        //   ],
        // });
    
        //  (await alert).present();
        // const { role } = await (await alert).onDidDismiss();
        // console.log('onDidDismiss resolved with role', role);
        // if(this.flag===false){
        //   console.log('false');
        // }
        // else{
        //   console.log('yes');
        //   this.entrepreneurService.deleteEntrepreneur$(this.entrepreneurDetails.entrepreneurToDelete)
        //   .pipe(
        //     tap(_ => this.entrepreneurService.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$())
        //   )
        //   .subscribe()
        // }
        // this.subscriptionService.dialogRef = this.dialog.open(DeleteElementComponent, {
        //   height: '200px',
        //   width: '250px',
        //   disableClose: true
        // })      
    //  if(this.subscriptionService.role=='cancel') {
        // console.log(false);
        // this.subscriptionService.dialogRef.close()
      
    //  }
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

