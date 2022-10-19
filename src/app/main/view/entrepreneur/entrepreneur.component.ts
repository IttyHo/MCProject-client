import { Component, OnInit } from '@angular/core';
import { EntrepreneurDetailsService, GetEntrepreneurService } from 'services';
import { NEVER, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { Entrepreneur, Column } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss']
})
export class EntrepreneurComponent implements OnInit {
  columns$: Observable<Column[]> = NEVER;
  deleteImg = { imgPath: environment.imgesPath, img: '/delete.png' };
  en={}
  constructor(
    public entrepreneurService: GetEntrepreneurService,
    private readColumns: ReadColumnsService,
    private entrepreneurDetails: EntrepreneurDetailsService,
    private selectedService: SelectedNevigationService
  ) { }
  ngOnInit() {
    const Delete = this.deleteImg.imgPath + this.deleteImg.img;
    this.init();
    this.columns$ = this.readColumns.getColumns$(environment.enrepreneursTableColumns)
    // window.oncontextmenu = function (e) {
    //   e.preventDefault()
    //   if (e.srcElement.localName == 'span') {
    //     this.en =e.srcElement.innerText;
    //       console.log(this.en,"logging");
    //     alert("Inside div");
      
       
    //         // entrepreneurService.entrepreneurs.forEach(el=>{
    //         // console.log({ el });
    //         // if (el.EntrepreneurCompany === e.srcElement.innerText) {
    //         //   // this.entrepreneurDetails.entrepreneurToDelete = el
    //         // console.log("  this.entrepreneurDetails.entrepreneurToDelete = el");
               
    //         // this.func(this.en);
            
            // }
          // })
    //     // console.log(this.en, "this.en");

        // alert("Inside div");
      // }
      //  else {
      //   alert("Outside div");
      // }
    //   // console.log(e, "e.target")
    }
    // this.func(this.en);
  // }
  f(e){
    console.log("fffffffffffffffffffffffffffffff");
      e.preventDefault()
      if (e.srcElement.localName == 'span') {
        this.en =e.srcElement.innerText;
          console.log(this.en,"logging");
          alert("Inside div");
      
       this.func(this.en)
            // entrepreneurService.entrepreneurs.forEach(el=>{
            // console.log({ el });
            // if (el.EntrepreneurCompany === e.srcElement.innerText) {
            //     this.entrepreneurDetails.entrepreneurToDelete = el
            // console.log("  this.entrepreneurDetails.entrepreneurToDelete = el");
               
            // this.func(this.en);
            
            // }
          // })
        // console.log(this.en, "this.en");

        // alert("Inside div");
      }
       else {
        alert("Outside div");
      }
      // console.log(e, "e.target")
    // }
  }
  func(en){
    this.entrepreneurService.entrepreneurs.forEach(el=>{
      if (el.EntrepreneurCompany === en) {
        // this.entrepreneurDetails.entrepreneurToDelete = el
      this.entrepreneurService.deleteEntrepreneur$(el).pipe(
        tap(_ =>this.entrepreneurService.entrepreneur$= this.entrepreneurService.getEntrepreneurList$())
      ).subscribe()
      
    }
  })  
  // this.entrepreneurService.deleteEntrepreneur$()
  }

  getEntrepreneurDetalis(entrepreneur,e) {
    console.log(e.which);
    if (e.which === 1) {
        e.preventDefault();
      alert("left clicked!");
  }
    console.log(entrepreneur,"entrepreneur in getEntrepreneurDetalis before");
    this.entrepreneurService.entrepreneurs.forEach(el => {
      console.log({ el });
      if (el === entrepreneur) {
        this.entrepreneurDetails.entrepreneur = el
        this.selectedService.updateSelected('oneEntrepreneur')
        this.selectedService['oneYazam'] = el;
        // console.log(this.entrepreneurDetails.entrepreneur,"entrepreneur in getEntrepreneurDetalis after");
        //  break;
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




// this.entrepreneurs.forEach(el=>{
//   console.log(el);
//   if(el.EntrepreneurName==entrepreneur){
//     this.oneEntrepreneur=el;
//   }
// })
//***********************************************/
// export function func(en){
//   this.entrepreneurService.entrepreneurs.forEach(el=>{
//     console.log({ el });
//     if (el.EntrepreneurCompany === en) {
//       this.entrepreneurDetails.entrepreneurToDelete = el
//     console.log(this.entrepreneurDetails.entrepreneurToDelete,"ppppppppppppppppp");
//   }
// })  
// }