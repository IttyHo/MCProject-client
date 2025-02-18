import { Injectable } from '@angular/core';
import { Project } from 'types';
import { Observable } from 'rxjs';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';

@Injectable({
  providedIn: 'root'
})
export class GetProjectService extends HttpServiceBase {

  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}project/`;
  }



  getProjectList$(): Observable<Project[]> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getProject',
    }));
    // return this.http.get<Project[]>('localhost:3030/project/getProject');
  }}
