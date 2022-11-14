import { Component, Injectable, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { map, tap } from 'rxjs/operators';
import { EntrepreneurDetailsService, GetCounselorService, GetEntrepreneurService, GetProjectService, ProjectDetailsService } from 'services';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
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
    public projectDetails: ProjectDetailsService,
    private alertController: AlertController,
    public modalCtrl: ModalController,
    public selectedService: SelectedNevigationService,

  ) { }
  handlerMessage = '';
  roleMessage = '';
  flag: Boolean = false;
  // constructor(private alertController: AlertController,
  //             private modalCtrl:ModalController,
  //             public subscriptionService:SubscriptionService
  //             ) { }

  ngOnInit() {
    this.presentAlert();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: `בטוח שהנך רוצה למחוק את ה${this.subscriptionService.Type} ${this.subscriptionService.detail}`,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'ביטול',
          cssClass: 'alert-button-cancel',
          role: 'cancel',
        },
        {
          text: 'אישור',
          cssClass: 'alert-button-confirm',
          role: 'OK'
        },
      ],
    });

    (await alert).present();
    const { role } = await (await alert).onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
    this.subscriptionService.role = role
    if (role)
      this.subscriptionService.dialogRef.close();
    if (role === 'OK') {
      console.log("OK", role);

      switch (this.subscriptionService.Type) {
        case 'פרויקט':
          this.projectService.deleteProject$(this.projectService.projectToDelete)
            .pipe(
              tap(_ => this.projectService.project$ = this.projectService.getProjectList$())
            )
            .subscribe()
          break;
        case 'יזם':
          this.entrepreneurService.deleteEntrepreneur$(this.entrepreneurDetails.entrepreneurToDelete)
            .pipe(
              tap(_ => this.entrepreneurService.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$())
            )
            .subscribe()
          break;
        case 'יועץ':
          this.counselorService.deleteCounselor$(this.counselorService.counselorToDelete)
            .pipe(
              tap(_ => this.counselorService.counselors$ = this.counselorService.getCounselorList$(this.subscriptionService.counselorType))
            )
            .subscribe()
          break;
         case 'סוג היועץ':
          this.counselorService.deleteCounselor$(this.counselorService.counselorToDelete)
            .pipe(
              tap(_ => this.counselorService.counselors$ = this.counselorService.getCounselorList$(this.subscriptionService.counselorType))
            )
            .subscribe()
          break;
      }
    }
  }
} 