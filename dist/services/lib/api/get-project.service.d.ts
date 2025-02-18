import { Project } from 'types';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
export declare class GetProjectService extends HttpServiceBase {
    private readonly _serverUrl;
    getProjectList$(): Observable<Project[]>;
}
