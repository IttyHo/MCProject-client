import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EntrepreneurDetailsService, GetEntrepreneurService, ProjectDetailsService } from 'services';
import { environment } from 'src/environments/environment';
import { Entrepreneur, Project } from 'types';
import { SelectedNevigationService } from '../../services/selected-nevigation.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  yazamImg = { imgPath: environment.imgesPath, img: '/yazam.png' };
  phoneImg = { imgPath: environment.imgesPath, img: '/phone.png' };
  emailImg = { imgPath: environment.imgesPath, img: '/email.png' };
  companyImg = { imgPath: environment.imgesPath, img: '/company.png' };
  TypeImg = { imgPath: environment.imgesPath, img: '/TypOfPermittion.png' };
  rovaImg = { imgPath: environment.imgesPath, img: '/village.png' };
dialog
  rova = this.rovaImg.imgPath + this.rovaImg.img
  company = this.companyImg.imgPath + this.companyImg.img
  email = this.emailImg.imgPath + this.emailImg.img
  yazam = this.yazamImg.imgPath + this.yazamImg.img
  Type = this.TypeImg.imgPath + this.TypeImg.img
  @Output() selectSingleProject = new EventEmitter<Project>();
  @Output() send = new EventEmitter<any>();
  @Output() projects = new EventEmitter<any>();
  entrepreneur$: Observable<Entrepreneur[]>;
  entrepreneurs: Entrepreneur[] = [];
  @Input() project = {};
  oneEntrepreneur = {}
  constructor(
    public selectedService: SelectedNevigationService,
    public projectDetalis: ProjectDetailsService,
    private entrepreneurDetails: EntrepreneurDetailsService,
    private entrepreneurService: GetEntrepreneurService,
    private title:Title
   ) { }

  ngOnInit() {
    this.title.setTitle('פרויקט בודד')
    this.dialog=document.querySelector('.dialog')
    this.getEntrepreneurs();
    console.log(this.selectedService.project);
  }

  sender(se) {
    this.send.emit(se);
  }
  entrepreneurDetail(entrepreneur) {
    this.selectedService.updateSelected('oneEntrepreneur');
    this.entrepreneurs.forEach(el => {
      if (el.EntrepreneurName == entrepreneur) {
        this.oneEntrepreneur = el;
      }
    })
    this.entrepreneurDetails.entrepreneur = this.oneEntrepreneur;
  }

  getEntrepreneurs() {
    this.entrepreneur$ = this.entrepreneurService.getEntrepreneurList$()
      .pipe(
        map(entrepreneurs => this.entrepreneurs = entrepreneurs),
        tap(entrepreneurs => console.log('entrepreneurs:', entrepreneurs)),
      )
  }

}
