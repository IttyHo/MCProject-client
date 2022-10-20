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
  en = {}
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
        if (confirm("האם למחוק יזם זה?") === true) {
          this.entrepreneurService.deleteEntrepreneur$(el).pipe(
            tap(_ => this.entrepreneurService.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$())
          ).subscribe()
        }
        else {
          console.log("cancel");
        }
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
        // console.log(this.entrepreneurDetails.entrepreneur,"entrepreneur in getEntrepreneurDetalis after");
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

