import { Injectable } from '@angular/core';
import { Project } from 'types';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {
project:Project
  constructor() { }
}
