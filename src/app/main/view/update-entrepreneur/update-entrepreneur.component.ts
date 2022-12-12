import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { map, tap } from 'rxjs/operators';
import { EntrepreneurDetailsService, GetEntrepreneurService, ValidatorsService } from 'services';
import { environment } from 'src/environments/environment';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-update-entrepreneur',
  templateUrl: './update-entrepreneur.component.html',
  styleUrls: ['./update-entrepreneur.component.scss']
})
export class UpdateEntrepreneurComponent implements OnInit {

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
    public entrepreneurDetails: EntrepreneurDetailsService,
    private title:Title

  ) { }

  ngOnInit() {
    this.title.setTitle('עריכת יזם')
    console.log('i am in add entrepreneur');
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      EntrepreneurId: [this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurId, Validators.required],
      EntrepreneurName: [this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurName, Validators.required],
      EntrepreneurCompany: [this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurCompany, [Validators.required]],
      EntrepreneurPhone: [this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurPhone, Validators.required],
      EntrepreneurMail:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurMail,Validators.required],
      OfficeAdress:[this.entrepreneurDetails.entrepreneurToUpdate.OfficeAdress,Validators.required],
      EntrepreneurSecretary:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurSecretary,Validators.required],
      EntrepreneurSecretaryPhone:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurSecretaryPhone,Validators.required],
      EntrepreneurSecretaryMail:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurSecretaryMail,Validators.required ],
      EntrepreneurCompanyAddress:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurCompanyAddress,Validators.required ],
      EntrepreneurCompanyAddressToSend:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurCompanyAddressToSend,Validators.required ],
      EntrepreneurCompanyPhone:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurCompanyPhone,[Validators.required]],
      EntrepreneurCompanyMail:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurCompanyMail,[Validators.required]],
      EntrepreneurCompanyFax:[this.entrepreneurDetails.entrepreneurToUpdate.EntrepreneurCompanyFax,Validators.required ],
 });  
  }
  cancel(){
    console.log("cancel");
    this.reset();
  }
  save() {
    console.log('value: ', this.formGroup.value);
    console.log('is dirty? ', this.formGroup.dirty);
    console.log('is valid? ', this.formGroup.valid);
    this.subscriptionService.value=this.formGroup.value;
    this.entrepreneurService.updateEntrepreneur$(this.formGroup.value).pipe(
      map(_ =>this.entrepreneurService.entrepreneur$= this.entrepreneurService.getEntrepreneurList$())
    ).subscribe();
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
