import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetProjectService } from 'services';
import { Observable, NEVER } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { environment } from 'src/environments/environment';
import { Column, Project } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';
import { SubscriptionService } from '../../services/subscription.service';
import { MatDialog } from '@angular/material';
import { DeleteElementComponent } from '../../components/delete-element/delete-element.component';
import { UpdateProjectComponent } from '../update-project/update-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Output() selectedProject = new EventEmitter<Project>();
  
  columns$: Observable<Column[]> = NEVER;
  en = {}
  projectDetails;
  deleteImg = { imgPath: environment.imgesPath, img: '/delete.png' };
  updateImg = { imgPath: environment.imgesPath, img: '/pen.png' };
  update = this.updateImg.imgPath + this.updateImg.img
  delete = this.deleteImg.imgPath + this.deleteImg.img
  constructor(
    public projectService: GetProjectService,
    private readColumns: ReadColumnsService,
    private selectedService: SelectedNevigationService,
    public subscriptionService:SubscriptionService,
    public dialog:MatDialog
  ) { }
  ngOnInit() {
    this.projectService.project$ = this.projectService.getProjectList$().pipe(
      map(project => this.projectService.projects = project),
      tap(project => console.log('projects:', project)),
    );
    this.columns$ = this.readColumns.getColumns$(environment.projectsTableColumns)
  }
  selectProject(project) {
    this.selectedService.project = project
    this.selectedService.updateSelected('oneProject');
  }
  Delete(e) {
    this.subscriptionService.show= true
    console.log(e);
    this.projectDetails=JSON.stringify(e.srcElement.parentElement.innerText)
    e.preventDefault()
    console.log(this.projectDetails);
    
    this.projectDetails=this.projectDetails.split('\\n');
    if (e.srcElement.localName === "mat-cell"||
        e.srcElement.localName ==="span") {
      this.en = e.srcElement.innerText;
      console.log(this.projectDetails[0], "logging");
    }
  }
 onContextMenuUpdate(item) {
    this.selectedService.selectedItem=item;
    console.log("to update");
    this.func(this.en);
  }

  onContextMenuDelete(item) {
    this.selectedService.selectedItem = item;
    this.func(this.en);
  }

  func(en) {
    this.projectService.projects.forEach(async el => {
      if (el.ProjectId === en) {
        if (this.selectedService.selectedItem === 'delete') {
          this.projectService.projectToDelete = el
          this.subscriptionService.Type = 'פרויקט'
          this.subscriptionService.detail = el.ProjectCompany
          this.subscriptionService.dialogRef = this.dialog.open(DeleteElementComponent, {
            height: '0px',
            width: '0px',
            disableClose: true,
            panelClass: 'deleteDialog'
          })
        }
        else {
          this.projectService.projectToUpdate = el
          this.subscriptionService.dialogRef = this.dialog.open(UpdateProjectComponent, {
            height: '560px',
            width: '550px',
            disableClose: true,
            data: true,
            panelClass: 'update'

          })
        }
      }
    })
  }

  }

