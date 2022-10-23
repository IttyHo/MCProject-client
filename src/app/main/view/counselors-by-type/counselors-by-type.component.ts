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
  f(e) {
    console.log("fffffffffffffffffffffffffffffff");
    e.preventDefault()
    if (e.srcElement.localName == 'span') {
      console.log(e.srcElement);
      this.en = e.srcElement.innerText;
      console.log(this.en, "logging");
      this.func(this.en);
    }
    else {
      alert("Outside div");
    }

  }
  func(en) {
    this.counselorService.counselors.forEach(el => {
      if (el.CounselorOfficeName === en) {
        this.counselorService.counselorToDelete = el
        // if (confirm("האם למחוק יועץ זה?") === true) {
        //   this.counselorService.deleteCounselor$(el).pipe(
        //     tap(_ => this.counselorService.counselors$ = this.counselorService.getCounselorList$(el.CounselorOfficeType)),
        //     map(_ => this.counselorService.historyDeletedCounselos.push(el)),
        //     tap(_=>console.log(this.counselorService.historyDeletedCounselos,"history"))   
        //   ).subscribe()
        // }
        // else {
        //   console.log("cancel");
        // }

        this.subscriptionService.Type='יועץ';
        this.subscriptionService.detail=el.CounselorOfficeName
        this.subscriptionService.counselorType=el.CounselorOfficeType
        this.subscriptionService.dialogRef = this.dialog.open(DeleteElementComponent, {
          height: '200px',
          width: '250px',
          disableClose: true
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
