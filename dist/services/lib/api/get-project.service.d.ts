import { Project } from 'types';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
export declare class GetProjectService extends HttpServiceBase {
    selectedProject: any;
    projectToUpdate: any;
    projectToDelete: any;
    project$: Observable<Project[]>;
    projects: Project[];
    projectTitle: string;
    private readonly _serverUrl;
    getProjectList$(): Observable<Project[]>;
    addProject$(project: Project): Observable<boolean>;
    updateProject$(project: Project): Observable<boolean>;
    deleteProject$(project: Project): Observable<boolean>;
}
