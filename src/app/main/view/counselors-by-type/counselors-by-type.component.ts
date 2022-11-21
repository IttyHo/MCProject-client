import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { Observable, NEVER } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetCounselorService } from 'services';
import { environment } from 'src/environments/environment';
import { Cunselor, Entrepreneur } from 'types';
import { DeleteElementComponent } from '../../components/delete-element/delete-element.component';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { SubscriptionService } from '../../services/subscription.service';
import { UpdateConselorComponent } from '../update-conselor/update-conselor.component';

@Component({
  selector: 'app-counselors-by-type',
  templateUrl: './counselors-by-type.component.html',
  styleUrls: ['./counselors-by-type.component.scss']
})
export class CounselorsByTypeComponent implements OnInit {
  counselors$: Observable<Cunselor[]> = NEVER;
  counselors: Cunselor[] = [];
  entrepreneur$: Observable<Entrepreneur[]>;
  entrepreneurs: Entrepreneur[] = [];
  en = {}
  updateImg={imgPath:environment.imgesPath,img:'/pen.png'};
  update=this.updateImg.imgPath+this.updateImg.img

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
 
  @ViewChild(MatMenuTrigger,{static: false})
  contextMenu: MatMenuTrigger;
  delete(e) {
    e.preventDefault();
     if (e.srcElement.localName == 'ion-button') {
      console.log(e.srcElement);
      this.en = e.srcElement.innerText;
      console.log(this.en, "logging");
      var menu = document.getElementById('section')
      // menu.style.display = '';
      // menu.style.position = 'absolute';
      // menu.style.left = 305 + 'px';
      // menu
      .style.top = 105 + 'px';
      // menu .style.backgroundColor='crimson';
      this.contextMenu.openMenu();
    }
  }
  onContextMenuUpdate(item) {
    this.selectedService.selectedItem=item;
    console.log("to update");
    this.func(this.en);
  }

  onContextMenuDelete(item) {
    this.selectedService.selectedItem=item;
    this.func(this.en);

  }
  // delete(e) {
  //   e.preventDefault()
  //   console.log(e,"eeeeeeee");
  //   if (e.srcElement.localName == 'ion-button') {
  //     console.log(e.srcElement);
  //     this.en = e.srcElement.innerText;
  //     console.log(this.en, "logging");
  //     this.func(this.en);
  //   }
     
  // }
  func(en) {
    this.counselorService.counselors.forEach(el => {
      if (el.CounselorOfficeName.toUpperCase() === en) {
        if(this.selectedService.selectedItem==='delete'){
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

        })      }
        else{
          
          this.counselorService.counselorToUpdate=el
          this.subscriptionService.dialogRef = this.dialog.open(UpdateConselorComponent, {
            height: '400px',
            width: '550px',
            disableClose: true,
            data:true,
            panelClass:'update'
  
          })      }
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
