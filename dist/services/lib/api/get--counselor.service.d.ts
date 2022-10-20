import { Observable } from 'rxjs';
import { Cunselor } from 'types';
import { HttpServiceBase } from './http-service.base';
export declare class GetCounselorService extends HttpServiceBase {
    counselors$: Observable<Cunselor[]>;
    counselors: Cunselor[];
    cunselorsOfficeType$: Observable<Cunselor[]>;
    counselorToDelete: {};
    historyDeletedCounselos: any[];
    private readonly _serverUrl;
    getCounselorOfficeTypeList$(): Observable<Cunselor[]>;
    getCounselorList$(counselorType: string): Observable<Cunselor[]>;
    addCounselorType$(counselorType: string): Observable<boolean>;
    addCounselor$(counselor: Cunselor): Observable<boolean>;
    deleteCounselor$(counselor: Cunselor): Observable<boolean>;
}
