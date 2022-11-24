import { AfterViewChecked, Directive, ElementRef, HostListener, ViewChild } from '@angular/core';
// import { SelectedNevigationService } from 'src/app/main/services/selected-nevigation.service';

@Directive({selector: '[libFindLocation]'})
export class FindLocationDirective implements AfterViewChecked { 
   x:any;
   @ViewChild("block", { static: false }) block: ElementRef;

 
   ngAfterViewChecked() {
     let datas = this.block.nativeElement.getBoundingClientRect();
     console.log("datas = ", datas);
   }
  //  constructor(private el:ElementRef) { 
  //       const {x, y} = this.el.nativeElement.getBoundingClientRect();
  //          console.log(x+'      x');
  //          console.log(y+'      y');  

  //            }
 }


