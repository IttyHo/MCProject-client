import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, NEVER } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetCounselorService, GetEntrepreneurService } from 'services';
import { Cunselor, Entrepreneur } from 'types';
import { DeleteElementComponent } from '../../components/delete-element/delete-element.component';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-counselors-by-type',
  templateUrl: './counselors-by-type.component.html',
  styleUrls: ['./counselors-by-type.component.scss']
})
export class CounselorsByTypeComponent implements OnInit {
  emailAddress = "itty@gmail.com"
  counselors$: Observable<Cunselor[]> = NEVER;
  counselors: Cunselor[] = [];
  entrepreneur$: Observable<Entrepreneur[]>;
  entrepreneurs: Entrepreneur[] = [];
  en = {}

  constructor(
    public selectedService: SelectedNevigationService,
    public counselorService: GetCounselorService,
    private dialog: MatDialog,
    private subscriptionService:SubscriptionService
  ) { }

  ngOnInit() {
    this.counselorService.counselors$ = this.counselorService.getCounselorList$(this.selectedService.counselorType.TypeName)
      .pipe(
        map(result => this.counselorService.counselors = result),
        tap(result => console.log('counselors:', result))
      );

  }
  delete(e) {
    console.log("fffffffffffffffffffffffffffffff");
    e.preventDefault()
    console.log(e,"eeeeeeee");
    if (e.srcElement.localName == 'ion-button') {
      console.log(e.srcElement);
      this.en = e.srcElement.innerText;
      console.log(this.en, "logging");
      this.func(this.en);
    }
     
  }
  func(en) {
    this.counselorService.counselors.forEach(el => {
      if (el.CounselorOfficeName.toUpperCase() === en) {
        this.counselorService.counselorToDelete = el
        this.subscriptionService.Type='יועץ';
        this.subscriptionService.detail=el.CounselorOfficeName
        this.subscriptionService.counselorType=el.CounselorOfficeType
        this.subscriptionService.dialogRef = this.dialog.open(DeleteElementComponent, {
          height: '0px',
          width: '0px',
          disableClose: true,
          data:true,
          panelClass:'deleteDialog'

        })      
      }
    })
  }


  getCounselorOfficeDetails(counselor) {
    this.counselorService.counselors.forEach(el => {
      if (el.CounselorOfficeName == counselor) {
        console.log(el, "selected");
        this.selectedService.counselor = el
        this.selectedService.updateSelected('OneCounselor');
      }
    })
  }
}
