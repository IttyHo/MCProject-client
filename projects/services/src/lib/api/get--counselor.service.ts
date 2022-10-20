import { Injectable } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { Cunselor, HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';

@Injectable({ providedIn: 'root' })

export class GetCounselorService extends HttpServiceBase {

  counselors$: Observable<Cunselor[]> = NEVER;
  counselors:Cunselor[]=[];
  cunselorsOfficeType$:Observable<Cunselor[]>
  counselorToDelete={}
  historyDeletedCounselos=[]
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}counselor/`;
  }

  getCounselorOfficeTypeList$(): Observable<Cunselor[]> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getCounselorOfficeType',
    }));
   // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');

  }
  getCounselorList$(counselorType:string): Observable<Cunselor[]> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getCounselor',
      params:{counselorType}
    }));
   // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');

  }
  addCounselorType$(counselorType:string):Observable<boolean>{
    return this.post$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'addCounselorType',
      body: counselorType
  }));
  }
 addCounselor$(counselor:Cunselor):Observable<boolean>{
  return this.post$(new HttpRequestModel({
    url: this._serverUrl,
    action: 'addCounselor',
    body: counselor
}));
}
deleteCounselor$(counselor:Cunselor):Observable<boolean>{
  return this.post$(new HttpRequestModel({
    url: this._serverUrl,
    action: 'deleteCounselor',
    body: counselor
}));
}
}
