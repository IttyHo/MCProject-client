import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { GetCounselorService } from 'services';
import { environment } from 'src/environments/environment';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-add-counselor',
  templateUrl: './add-counselor.component.html',
  styleUrls: ['./add-counselor.component.scss']
})
export class AddCounselorComponent implements OnInit {
  xImg={imgPath:environment.imgesPath,img: '/close.png'};
  x=this.xImg.imgPath+this.xImg.img
  formGroup: FormGroup;
  // counselorType=[
  //             {value: 1, viewValue: 'נגישות'},
  //             {value: 2, viewValue: 'אינסטלציה'},
  //             {value: 3, viewValue: 'מיזוג אויר'},
  //             {value: 4, viewValue: 'חשמל'},
  //             {value: 5, viewValue: 'פיתוח'},
  //             {value: 6, viewValue: 'קונסטרוקציה'},
  //             {value: 7, viewValue: 'תנועה'},
  //             {value: 8, viewValue: 'בטיחות'}
  //           ];

  constructor(
    public formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    public counselorService:GetCounselorService,
    public selectedService:SelectedNevigationService
  ) { }

  ngOnInit() {
    console.log('i am in add counselor');
    
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      CounselorOfficeName: ['', Validators.required],
      CounselorOfficeAdress: ['', [Validators.required]],
      CounselorOfficePhone: ['', Validators.required],
      CounselorOfficeType:[this.selectedService.counselorType.TypeId,Validators.required],
      CounselorOfficeManager:['',Validators.required],
      CounselorOfficeManagerPhone:['',Validators.required],
      CounselorOfficeManagerMail:['',Validators.required],
      CounselorOfficeMainSecretary:['',Validators.required],
      CounselorOfficeMainSecretaryPhone:['',Validators.required],
      CounselorOfficeMainSecretaryMail:['',Validators.required],

    });
  }
  cancel(){
    console.log("cancel");
    this.subscriptionService.dialogRef.close()
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
    this.counselorService.addCounselor$(this.formGroup.value).pipe(
      map(_ => this.counselorService.counselors$=this.counselorService.getCounselorList$(this.selectedService.counselorType.TypeName))
    )
    .subscribe(
      // this.counselorService.getCounselorList$('').subscribe()
    );
   this.reset()
  }
  reset() {
    this.subscriptionService.close = true;
    console.log(this.subscriptionService.close, "before close");
    if (this.subscriptionService.close) {
      this.subscriptionService.close = false;
      this.subscriptionService.dialogRef.close();
      console.log(this.subscriptionService.close, "after close");
      console.log("i am closed");
    }
  }
  removeSecretary(index: number) {
    // this.phoneList.removeAt(index);
 }

 addSecretary() {
  //  this.phoneList.push(new FormControl(''));
 }
}
