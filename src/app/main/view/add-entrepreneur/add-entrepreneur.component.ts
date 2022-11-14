import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetEntrepreneurService, ValidatorsService } from 'services';
import { environment } from 'src/environments/environment';
import { Entrepreneur } from 'types';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-add-entrepreneur',
  templateUrl: './add-entrepreneur.component.html',
  styleUrls: ['./add-entrepreneur.component.scss']
})
export class AddEntrepreneurComponent implements OnInit {
  xImg={imgPath:environment.imgesPath,img: '/close.png'};
  x=this.xImg.imgPath+this.xImg.img
  formGroup: FormGroup;
  // entrepreneur$:Observable<Entrepreneur[]>;
  // entrepreneurs:Entrepreneur[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    public entrepreneurService:GetEntrepreneurService,
    private validatorsService:ValidatorsService,
  ) { }

  ngOnInit() {
    console.log('i am in add entrepreneur');
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      EntrepreneurName: ['', Validators.required],
      EntrepreneurCompany: ['', [Validators.required]],
      EntrepreneurPhone: ['', Validators.required],
      EntrepreneurMail:['',Validators.required],
      OfficeAdress:['',Validators.required],
      EntrepreneurSecretary:['',Validators.required],
      EntrepreneurSecretaryPhone:['',Validators.required],
      EntrepreneurSecretaryMail:['',Validators.required ],
      EntrepreneurCompanyAddress:['',Validators.required ],
      EntrepreneurCompanyAddressToSend:['',Validators.required ],
      EntrepreneurCompanyPhone:['',[Validators.required,this.validatorsService.phoneValidator]],
      EntrepreneurCompanyMail:['',[Validators.required,this.validatorsService.emailValidator]],
      EntrepreneurCompanyFax:['',Validators.required ],
 });  
  }
  cancel(){
    console.log("cancel");
    this.subscriptionService.dialogRef.close()
  }
  save() {
    console.log('value: ', this.formGroup.value);
    console.log('is dirty? ', this.formGroup.dirty);
    console.log('is valid? ', this.formGroup.valid);
    this.subscriptionService.value=this.formGroup.value;
    this.entrepreneurService.addEntrepreneur$(this.formGroup.value).pipe(
      tap(_ =>this.entrepreneurService.entrepreneur$= this.entrepreneurService.getEntrepreneurList$())
    ).subscribe();
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
}
