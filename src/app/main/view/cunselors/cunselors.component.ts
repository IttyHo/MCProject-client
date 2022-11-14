import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetCounselorService  } from 'services';
import { NEVER, Observable } from 'rxjs';
 import { ReadColumnsService } from 'src/app/services/read-columns.service';
 import { Cunselor, Column } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { SubscriptionService } from '../../services/subscription.service';
import { DeleteElementComponent } from '../../components/delete-element/delete-element.component';
import { MatDialog } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cunselors',
  templateUrl: './cunselors.component.html',
  styleUrls: ['./cunselors.component.scss']
})
export class CunselorsComponent implements OnInit, OnChanges {
  @Input() selectedCunselor = '';
  //server שמחזיר לי את רשימת היועצים מה Observable מערך של יועצים מסוג 
  cunselors$: Observable<Cunselor[]> = NEVER;
  cunselors:Cunselor[]=[];
  cunselorsOfficeType$:Observable<Cunselor[]>
  columns$: Observable<Column[]> = NEVER;
  en = {}

  constructor(
    public  counselorService:GetCounselorService,
    private readColumns: ReadColumnsService,
    private selectedService:SelectedNevigationService,
    private subscriptionService:SubscriptionService,
    private dialog:MatDialog
  ) { }
  
  ngOnChanges({selectedCunselor}: SimpleChanges): void {
    if(selectedCunselor){
      const {currentValue} = selectedCunselor;
      this.cunselors$ = this.counselorService.getCounselorList$(currentValue) ;
    }
  }
 
  ngOnInit() {
   this.cunselors$ = this.counselorService.getCounselorList$('') ; 
   this.counselorService.cunselorsOfficeType$ = this.counselorService.getCounselorOfficeTypeList$() ; 
   this.counselorService.cunselorsType=this.counselorService.cunselorsOfficeType$
   this.columns$ = this.readColumns.getColumns$(environment.counselorsTableColumns)
   
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
    this.counselorService.cunselorsType.forEach(el => {
      if (el.TypeName === en) {
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

        this.subscriptionService.Type='סוג היועץ';
        this.subscriptionService.detail=el.TypeName
        // this.subscriptionService.counselorType=el.CounselorOfficeType
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
  
  getCounselorsOfficeTypeDetalis(counselorType){
    console.log(counselorType,"      type");    
    this.selectedService.counselorType=counselorType
    console.log(this.selectedService.counselorType,"type name");
    this.selectedService.updateSelected('CounselorsByType') 
    // this.cunselors$ = this.counselorService.getCounselorList$(counselorType.TypeName); 

  }
}
