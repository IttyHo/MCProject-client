import { Project } from 'types';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
export declare class GetProjectService extends HttpServiceBase {
    selectedProject: any;
    projectToDelete: any;
    project$: Observable<Project[]>;
    projects: Project[];
    private readonly _serverUrl;
    getProjectList$(): Observable<Project[]>;
    addProject$(project: Project): Observable<boolean>;
    deleteProject$(project: Project): Observable<boolean>;
}
