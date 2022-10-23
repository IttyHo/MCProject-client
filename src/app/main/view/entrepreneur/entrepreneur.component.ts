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


@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss']
})
export class EntrepreneurComponent implements OnInit {
  columns$: Observable<Column[]> = NEVER;
  deleteImg = { imgPath: environment.imgesPath, img: '/delete.png' };
  en = {}
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
  f(e) {
    console.log("fffffffffffffffffffffffffffffff");
    e.preventDefault()
    if (e.srcElement.localName == 'span') {
      this.en = e.srcElement.innerText;
      console.log(this.en, "logging");
      this.func(this.en);
    }
    

  }
  func(en) {
    this.entrepreneurService.entrepreneurs.forEach(el => {
      if (el.EntrepreneurCompany === en) {
        this.entrepreneurDetails.entrepreneurToDelete = el
        this.subscriptionService.Type='יזם'
        this.subscriptionService.detail=el.EntrepreneurCompany
        this.subscriptionService.dialogRef = this.dialog.open(DeleteElementComponent, {
          height: '200px',
          width: '250px',
          disableClose: true
        })      
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

