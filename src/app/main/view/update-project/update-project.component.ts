import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AllPipesModule } from 'pipes';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GetEntrepreneurService, ValidatorsService, EntrepreneurDetailsService, GetProjectService } from 'services';
import { environment } from 'src/environments/environment';
import { Entrepreneur } from 'types';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {
  formGroup: FormGroup;
  xImg={imgPath:environment.imgesPath,img: '/close.png'};
  x=this.xImg.imgPath+this.xImg.img;
  rova=['א','ב','ג','ד','ה','ו','ז','ח','ט','י','יא','יב','יג','יד','טו','טז','יז','סיטי']
  projectType=[
              {value: 1, viewValue: 'היתר בלבד'},
              {value: 2, viewValue: 'בקשה לתב"ע + היתר' },
              ];
  entrepreneur$:Observable<Entrepreneur[]>;
  entrepreneurs:Entrepreneur[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService,
    private entrepreneurService:GetEntrepreneurService,
    public projectService:GetProjectService,
    public hasErrors:AllPipesModule,
    private validatorService:ValidatorsService,
    private title:Title

  ) { }

  ngOnInit() {
    this.title.setTitle('עריכת פרויקט')
    console.log('i am in update project');
    this.getEntrepreneurs();
    this.initForm();
  }
  cancel(){
    console.log("cancel");
    this.subscriptionService.dialogRef.close()
  }
  initForm() {
    this.formGroup = this.formBuilder.group({
      ProjectId:[this.projectService.projectToUpdate.ProjectId, [Validators.required,]],
      ProjectName: [this.projectService.projectToUpdate.ProjectName, [Validators.required,Validators.minLength(2),this.validatorService.textValidators]],
      ProjectCompany: [this.projectService.projectToUpdate.ProjectCompany, [Validators.required,]],
      ProjectAdress: [this.projectService.projectToUpdate.ProjectAdress, [Validators.required,]],
      ProjectType:[this.projectService.projectToUpdate.projectType,[Validators.required,]],
      EntrepreneurId:[this.projectService.projectToUpdate.EntrepreneurId,[Validators.required,]],
      ProjectRova:[this.projectService.projectToUpdate.ProjectRova,[Validators.required,]],
    });
  }
  //Validators.pattern("^[א-0]*$")
  getEntrepreneurs(){
    
     this.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$()
    .pipe(
      map(entrepreneurs=>this.entrepreneurs=entrepreneurs),
      tap(entrepreneurs => console.log('entrepreneurs:' , entrepreneurs)),
   )
  }
  
  save() {
    this.subscriptionService.show=false;
    console.log('value: ', this.formGroup.value);
    console.log('is dirty? ', this.formGroup.dirty);
    console.log('is valid? ', this.formGroup.valid);
    this.subscriptionService.value=this.formGroup.value;
    console.log('entrepreneurs',this.entrepreneurs);
    this.projectService.updateProject$(this.formGroup.value).pipe(
      tap(_ => this.projectService.project$=this.projectService.getProjectList$())
    )
    .subscribe();
    console.log("after subscribe");
  
    this.reset();
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
