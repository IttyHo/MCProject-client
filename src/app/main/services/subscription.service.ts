import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  projectSubsciption: boolean = false
  close: any;
  dialogRef: any;
  flag = false;
  Type = '';
  detail: any = null;
  counselorType: any
  value: {}
  role;
  show = false


  constructor() { }

}
