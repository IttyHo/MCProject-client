import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { Title } from '@angular/platform-browser';
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
  deleteImg = { imgPath: environment.imgesPath, img: '/delete.png' };
  delete = this.deleteImg.imgPath + this.deleteImg.img
  show = false
  constructor(
    public selectedService: SelectedNevigationService,
    public counselorService: GetCounselorService,
    private dialog: MatDialog,
    private subscriptionService:SubscriptionService,
    private title:Title

  ) { }

  ngOnInit() {
    this.title.setTitle('יועץ')
    this.counselorService.counselors$ = this.counselorService.getCounselorList$(this.selectedService.counselorType.TypeName)
      .pipe(
        map(result => this.counselorService.counselors = result),
        tap(result => console.log('counselors:', result))
      );

  }
 
  @ViewChild(MatMenuTrigger,{static: false})
  contextMenu: MatMenuTrigger;

  @ViewChild("block", { static: false }) block: ElementRef;

 
  on(item: any) {
    console.log("item = ", item.target.getBoundingClientRect());
  }

  Delete(e) {
    this.subscriptionService.show= true
    console.log(e);
    console.log(e.x,e.y);
    // document.querySelector('ion-button').style.opacity='0.25';
    e.preventDefault(); 

     if (e.srcElement.localName == 'ion-button') {
      console.log(e.srcElement);
      this.en = e.srcElement.innerText;
      console.log(this.en, "logging");
    //  document.querySelector('.menu').style.backgroundColor = "red";;
      // m.style.display = '';    
      // this.block.nativeElement.removeAt(m)
      // m.style.x=e.x;
      // m.style.y=e.y;
        // m.style.left = e.x;
        // m.style.top = e.y;
      // this.block.nativeElement.appendChild(m);

      // m.setAttribute
      // e.offsetX=e.x
      // e.offsetY=e.y
      // console.log(m.style);
      
      // menu.style.position = 'absolute';
      // menu.style.left = 305 + 'px';
      // .style.offset=(953,95);
  
      // menu .style.backgroundColor='crimson';
      // this.contextMenu.openMenu();
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
   
  func(en) {
    this.counselorService.counselors.forEach(el => {
      if (el.CounselorOfficeName.toUpperCase() === en) {
        console.log(el);
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
            height: '450px',
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
