import { Component, Injectable, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EntrepreneurDetailsService, GetEntrepreneurService } from 'services';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.scss']
})
export class DeleteElementComponent implements OnInit {
  constructor(
    public subscriptionService:SubscriptionService,
    public entrepreneurDetails: EntrepreneurDetailsService,
    public entrepreneurService:GetEntrepreneurService
  ) { }
  sentence=`בטוח שהנך רוצה למחוק את ה${this.subscriptionService.Type} ${this.subscriptionService.detail}`

  ngOnInit() {
  }
save(){
  console.log("save");
    this.entrepreneurService.deleteEntrepreneur$(this.entrepreneurDetails.entrepreneurToDelete)
    .pipe(
         tap(_ => this.entrepreneurService.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$())
         )           
    .subscribe()
//  }
  this.subscriptionService.dialogRef.close()
}
reset(){
  this.subscriptionService.flag=false;
  this.subscriptionService.dialogRef.close()

}
}
