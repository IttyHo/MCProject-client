import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { GetCounselorService } from 'services';
import { Cunselor } from 'types';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-add-counselor-type',
  templateUrl: './add-counselor-type.component.html',
  styleUrls: ['./add-counselor-type.component.scss']
})
export class AddCounselorTypeComponent implements OnInit {
  formGroup: FormGroup;
  // cunselors$: Observable<Cunselor[]> = NEVER;
  result
  constructor(
    private formBuilder: FormBuilder,
    private counselorService: GetCounselorService,
    private subscriptionService: SubscriptionService

  ) { }

  ngOnInit() {
    console.log('i am in add counselor by type');

    this.initForm()
  }
  initForm() {
    this.formGroup = this.formBuilder.group({
      counselorType: ['', [Validators.required, Validators.pattern('[א-ת]*$')]]
    })
  }
  save() {
    console.log('value: ', this.formGroup.value);
    console.log('is dirty? ', this.formGroup.dirty);
    console.log('is valid? ', this.formGroup.valid);
    this.subscriptionService.value = this.formGroup.value;
    this.counselorService.addCounselorType$(this.formGroup.value).pipe(
      tap(_ => this.counselorService.cunselorsOfficeType$= this.counselorService.getCounselorOfficeTypeList$()),
    )
      .subscribe();
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
