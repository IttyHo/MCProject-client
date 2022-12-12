import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { GetCounselorService } from 'services';
import { environment } from 'src/environments/environment';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-update-conselor',
  templateUrl: './update-conselor.component.html',
  styleUrls: ['./update-conselor.component.scss']
})
export class UpdateConselorComponent implements OnInit {
  updateImg={imgPath:environment.imgesPath,img:'/pen.png'};
  xImg={imgPath:environment.imgesPath,img: '/close.png'};
  x=this.xImg.imgPath+this.xImg.img
  update=this.updateImg.imgPath+this.updateImg.img
  formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    public counselorService:GetCounselorService,
    public selectedService:SelectedNevigationService,
    private title:Title

  ) { }

  ngOnInit() {
    this.title.setTitle('עריכת יועץ')
    console.log('i am in add counselor');
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      CounselorOfficeId: [this.counselorService.counselorToUpdate.CounselorOfficeId, Validators.required],
      CounselorOfficeName: [this.counselorService.counselorToUpdate.CounselorOfficeName, Validators.required],
      CounselorOfficeAdress: [this.counselorService.counselorToUpdate.CounselorOfficeAdress, Validators.required],
      CounselorOfficePhone: [this.counselorService.counselorToUpdate.CounselorOfficePhone, Validators.required],
      CounselorOfficeType:[this.selectedService.counselorType.TypeId,Validators.required],
      CounselorOfficeManager:[this.counselorService.counselorToUpdate.CounselorOfficeManager,Validators.required],
      CounselorOfficeManagerPhone:[this.counselorService.counselorToUpdate.CounselorOfficeManagerPhone,Validators.required],
      CounselorOfficeManagerMail:[this.counselorService.counselorToUpdate.CounselorOfficeManagerMail,Validators.required],
      CounselorOfficeMainSecretary:[this.counselorService.counselorToUpdate.CounselorOfficeMainSecretary,Validators.required],
      CounselorOfficeMainSecretaryPhone:[this.counselorService.counselorToUpdate.CounselorOfficeMainSecretaryPhone,Validators.required],
      CounselorOfficeMainSecretaryMail:[this.counselorService.counselorToUpdate.CounselorOfficeMainSecretaryMail,Validators.required],
    });
  }
  cancel(){
    console.log("cancel");
    this.reset()

  }
  emailValidator(control) {
    if (
      control.value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }
  save() {
    console.log('value: ', this.formGroup.value);
    console.log('is dirty? ', this.formGroup.dirty);
    console.log('is valid? ', this.formGroup.valid);
    this.subscriptionService.value=this.formGroup.value;
    this.counselorService.updateCounselor$(this.formGroup.value).pipe(
      map(_ => this.counselorService.counselors$=this.counselorService.getCounselorList$(this.selectedService.counselorType.TypeName))
    )
   .subscribe();
   this.reset()
  }
  reset() {
    this.subscriptionService.show= false
    this.subscriptionService.close = true;
    console.log(this.subscriptionService.close, "before close");
    if (this.subscriptionService.close) {
      this.subscriptionService.close = false;
      this.subscriptionService.dialogRef.close();
      console.log(this.subscriptionService.close, "after close");
      console.log("i am closed");
    }
  }
}
