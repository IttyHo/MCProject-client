import { Injectable } from '@angular/core';
import { Entrepreneur } from 'types';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurDetailsService {
  entrepreneur={}
  entrepreneurToDelete:any
delete:any;
  constructor() { }
}
