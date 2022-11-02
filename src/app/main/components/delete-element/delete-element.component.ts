import { Component, Injectable, OnInit } from '@angular/core';
import { AlertController,ModalController  } from '@ionic/angular';
import { map, tap } from 'rxjs/operators';
import { EntrepreneurDetailsService, GetCounselorService, GetEntrepreneurService, GetProjectService, ProjectDetailsService } from 'services';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.scss']
})
export class DeleteElementComponent implements OnInit {
  constructor(
    public subscriptionService: SubscriptionService,
    public entrepreneurDetails: EntrepreneurDetailsService,
    public entrepreneurService: GetEntrepreneurService,
    public counselorService: GetCounselorService,
    public projectService: GetProjectService,
    public projectDetails:ProjectDetailsService,
    private alertController: AlertController,
    public modalCtrl: ModalController
  ) { }
  sentence = `בטוח שהנך רוצה למחוק את ה${this.subscriptionService.Type} ${this.subscriptionService.detail}`

  ngOnInit() {
  }
 

//   dismiss() {
//     this.modalCtrl.dismiss();
//   }
//   save() {
//     console.log("save");
//     switch (this.subscriptionService.Type) {
//       case 'יזם':
//         this.entrepreneurService.deleteEntrepreneur$(this.entrepreneurDetails.entrepreneurToDelete)
//           .pipe(
//             tap(_ => this.entrepreneurService.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$())
//           )
//           .subscribe()
//         this.subscriptionService.dialogRef.close()
//         break;

//       case 'יועץ':
//         this.counselorService.deleteCounselor$(this.counselorService.counselorToDelete)
//         .pipe(
//           tap(_ => this.counselorService.counselors$ = this.counselorService.getCounselorList$(this.subscriptionService.counselorType)),
//           map(_ => this.counselorService.historyDeletedCounselos.push(this.counselorService.counselorToDelete)),
//           tap(_ => console.log(this.counselorService.historyDeletedCounselos, "history"))
//         ).subscribe()

//         this.subscriptionService.dialogRef.close()
//         break;

//       case 'פרויקט':
//            this.projectService.deleteProject$(this.projectService.projectToDelete)
//            .pipe(
//             tap(_ => this.projectService.project$ = this.projectService.getProjectList$())
//           )
//           .subscribe()
//         this.subscriptionService.dialogRef.close()
//         break;
//     }
//   }
//   reset() {
//     this.subscriptionService.flag = false;
//     this.subscriptionService.dialogRef.close()

//   }
// }
name: string;

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
  do_something($event) {
    this.name = $event.target.value;
  }
}