import { Observable } from 'rxjs';
import { Entrepreneur } from 'types';
import { HttpServiceBase } from './http-service.base';
export declare class GetEntrepreneurService extends HttpServiceBase {
    private readonly _serverUrl;
    entrepreneur$: Observable<Entrepreneur[]>;
    entrepreneurs: Entrepreneur[];
    updateEntrepreneur$(entrepreneur: Entrepreneur): Observable<boolean>;
    getEntrepreneurList$(): Observable<Entrepreneur[]>;
    addEntrepreneur$(entrepreneur: Entrepreneur): Observable<boolean>;
    deleteEntrepreneur$(entrepreneur: Entrepreneur): Observable<boolean>;
}
