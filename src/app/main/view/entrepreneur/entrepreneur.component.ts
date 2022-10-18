import { Component, OnInit } from '@angular/core';
import { EntrepreneurDetailsService, GetEntrepreneurService } from 'services';
import { NEVER, Observable } from 'rxjs';
import {  map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { environment } from 'src/environments/environment';
import { Entrepreneur, Column } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';


@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss']
})
export class EntrepreneurComponent implements OnInit {
  columns$: Observable<Column[]> = NEVER;
  constructor(
    public entrepreneurService:GetEntrepreneurService,
    private readColumns: ReadColumnsService,
    private entrepreneurDetails:EntrepreneurDetailsService,
    private selectedService:SelectedNevigationService
    ) { } 
  ngOnInit() {      
    this.init();
     this.columns$ = this.readColumns.getColumns$(environment.enrepreneursTableColumns)
    }
    getEntrepreneurDetalis(entrepreneur){
      // console.log(entrepreneur,"entrepreneur in getEntrepreneurDetalis before");
     this.entrepreneurService.entrepreneurs.forEach(el => {
      console.log({el});      
        if(el === entrepreneur)
         {
            this.entrepreneurDetails.entrepreneur=el
            this.selectedService.updateSelected('oneEntrepreneur')
            this.selectedService['oneYazam']=el;
            // console.log(this.entrepreneurDetails.entrepreneur,"entrepreneur in getEntrepreneurDetalis after");
        //  break;
         } 
        
      });
    }
    
    init(){
      this.entrepreneurService.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$().pipe(
        map(entrepreneurs=>this.entrepreneurService.entrepreneurs=entrepreneurs),
        tap(entrepreneurs => console.log('entrepreneurs:' , entrepreneurs)),
    );
    }

}


// this.entrepreneurs.forEach(el=>{
//   console.log(el);    
//   if(el.EntrepreneurName==entrepreneur){
//     this.oneEntrepreneur=el;
//   }
// })