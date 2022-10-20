import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GetCounselorService  } from 'services';
import { NEVER, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'; 
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { environment } from 'src/environments/environment';
import { Cunselor, Column } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { SubscriptionService } from '../../services/subscription.service';

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
    public counselorService:GetCounselorService,
    private readColumns: ReadColumnsService,
    private selectedService:SelectedNevigationService,
    private subscriptionService:SubscriptionService
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
   this.columns$ = this.readColumns.getColumns$(environment.counselorsTableColumns)
   
  }

  
  getCounselorsOfficeTypeDetalis(counselorType){
    console.log(counselorType,"      type");    
    this.selectedService.counselorType=counselorType
    console.log(this.selectedService.counselorType,"type name");
    
    this.selectedService.updateSelected('CounselorsByType')
    this.cunselors$ = this.counselorService.getCounselorList$(counselorType.TypeName); 
  }
}
//deleteCounselor$