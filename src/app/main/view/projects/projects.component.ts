import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetProjectService } from 'services';
import { Observable, NEVER } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ReadColumnsService } from 'src/app/services/read-columns.service';
import { environment } from 'src/environments/environment';
import { Column, Project } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Output() selectedProject = new EventEmitter<Project>();
  
  columns$: Observable<Column[]> = NEVER;
  en = {}
  projectDetails
  constructor(
    public projectService: GetProjectService,
    private readColumns: ReadColumnsService,
    private selectedService: SelectedNevigationService,
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
  f(e) {
    console.log("fffffffffffffffffffffffffffffff");
    console.log(e,"eeeeeeeeeeeeeeee");
    
    console.log(e.srcElement.parentElement.innerText,"eeee");
    this.projectDetails=JSON.stringify(e.srcElement.parentElement.innerText)
    e.preventDefault()
    this.projectDetails=this.projectDetails.split('\\n');
    if (e.srcElement.localName === "mat-cell"||
        e.srcElement.localName ==="span") {
      this.en = e.srcElement.innerText;
      console.log(this.projectDetails[1], "logging");
      this.func(this.projectDetails[1]);
    }
    else {
      alert("Outside div");
    }

  }
  func(en) {
    this.projectService.projects.forEach(el => {
      if (el.ProjectAdress === en) {
        if (confirm("האם למחוק פרויקט זה?") === true) {
          this.projectService.deleteProject$(el).pipe(
            tap(_ => this.projectService.project$ = this.projectService.getProjectList$())
          ).subscribe()
        }
        else {
          console.log("cancel");
        }
      }
    })
  }

  }

