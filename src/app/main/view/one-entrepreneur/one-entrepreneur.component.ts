import { Component, OnInit } from '@angular/core';
import { EntrepreneurDetailsService } from 'services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-one-entrepreneur',
  templateUrl: './one-entrepreneur.component.html',
  styleUrls: ['./one-entrepreneur.component.scss']
})
export class OneEntrepreneurComponent implements OnInit {
  secretaryImg={imgPath:environment.imgesPath,img:'/secretary.png'};
  yazamImg={imgPath:environment.imgesPath,img:'/yazam.png'};               
  phoneImg={imgPath:environment.imgesPath,img:'/phone.png'};
  emailImg={imgPath:environment.imgesPath,img:'/email.png'}; 
  companyImg={imgPath:environment.imgesPath,img:'/company.png'}; 
  TypeImg={imgPath:environment.imgesPath,img:'/TypOfPermittion.png'};

  
  secretary=this.secretaryImg.imgPath+this.secretaryImg.img
  company=this.companyImg.imgPath+this.companyImg.img
  email=this.emailImg.imgPath+this.emailImg.img
  yazam=this.yazamImg.imgPath+this.yazamImg.img
  Type=this.TypeImg.imgPath+this.TypeImg.img
  phone=this.phoneImg.imgPath+this.phoneImg.img
  constructor(
    public entrepreneurDetails:EntrepreneurDetailsService,
  ) { }

  ngOnInit() {
  }

}
