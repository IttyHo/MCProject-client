/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get--counselor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NEVER } from 'rxjs';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class GetCounselorService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.counselors$ = NEVER;
        this.counselors = [];
        this.counselorToDelete = {};
        this.historyDeletedCounselos = [];
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}counselor/`;
    }
    /**
     * @return {?}
     */
    getCounselorOfficeTypeList$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselorOfficeType',
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    }
    /**
     * @param {?} counselorType
     * @return {?}
     */
    getCounselorList$(counselorType) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselor',
            params: { counselorType }
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    }
    /**
     * @param {?} counselorType
     * @return {?}
     */
    addCounselorType$(counselorType) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselorType',
            body: counselorType
        }));
    }
    /**
     * @param {?} counselor
     * @return {?}
     */
    addCounselor$(counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselor',
            body: counselor
        }));
    }
    /**
     * @param {?} counselor
     * @return {?}
     */
    deleteCounselor$(counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteCounselor',
            body: counselor
        }));
    }
}
GetCounselorService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ GetCounselorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetCounselorService_Factory() { return new GetCounselorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetCounselorService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GetCounselorService.prototype.counselors$;
    /** @type {?} */
    GetCounselorService.prototype.counselors;
    /** @type {?} */
    GetCounselorService.prototype.cunselorsOfficeType$;
    /** @type {?} */
    GetCounselorService.prototype.counselorToDelete;
    /** @type {?} */
    GetCounselorService.prototype.historyDeletedCounselos;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LS1jb3Vuc2Vsb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtLWNvdW5zZWxvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBWSxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFJdEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7SUFGeEQ7O1FBSUUsZ0JBQVcsR0FBMkIsS0FBSyxDQUFDO1FBQzVDLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFFekIsc0JBQWlCLEdBQUMsRUFBRSxDQUFBO1FBQ3BCLDRCQUF1QixHQUFDLEVBQUUsQ0FBQTtLQTJDM0I7Ozs7O0lBMUNDLElBQVksVUFBVTtRQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxZQUFZLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELDJCQUEyQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLHdCQUF3QjtTQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNMLG9GQUFvRjtJQUVyRixDQUFDOzs7OztJQUNELGlCQUFpQixDQUFDLGFBQW9CO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixNQUFNLEVBQUMsRUFBQyxhQUFhLEVBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRkFBb0Y7SUFFckYsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxhQUFvQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixJQUFJLEVBQUUsYUFBYTtTQUN0QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0YsYUFBYSxDQUFDLFNBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixJQUFJLEVBQUUsU0FBUztTQUNsQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsU0FBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7WUFsREEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7SUFJaEMsMENBQTRDOztJQUM1Qyx5Q0FBeUI7O0lBQ3pCLG1EQUEyQzs7SUFDM0MsZ0RBQW9COztJQUNwQixzREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5FVkVSLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEN1bnNlbG9yLCBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q291bnNlbG9yU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcblxyXG4gIGNvdW5zZWxvcnMkOiBPYnNlcnZhYmxlPEN1bnNlbG9yW10+ID0gTkVWRVI7XHJcbiAgY291bnNlbG9yczpDdW5zZWxvcltdPVtdO1xyXG4gIGN1bnNlbG9yc09mZmljZVR5cGUkOk9ic2VydmFibGU8Q3Vuc2Vsb3JbXT5cclxuICBjb3Vuc2Vsb3JUb0RlbGV0ZT17fVxyXG4gIGhpc3RvcnlEZWxldGVkQ291bnNlbG9zPVtdXHJcbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1jb3Vuc2Vsb3IvYDtcclxuICB9XHJcblxyXG4gIGdldENvdW5zZWxvck9mZmljZVR5cGVMaXN0JCgpOiBPYnNlcnZhYmxlPEN1bnNlbG9yW10+IHtcclxuICAgIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnZ2V0Q291bnNlbG9yT2ZmaWNlVHlwZScsXHJcbiAgICB9KSk7XHJcbiAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PEN1bnNlbG9yW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvY291bnNlbG9yL2dldENvdW5zZWxvcicpO1xyXG5cclxuICB9XHJcbiAgZ2V0Q291bnNlbG9yTGlzdCQoY291bnNlbG9yVHlwZTpzdHJpbmcpOiBPYnNlcnZhYmxlPEN1bnNlbG9yW10+IHtcclxuICAgIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnZ2V0Q291bnNlbG9yJyxcclxuICAgICAgcGFyYW1zOntjb3Vuc2Vsb3JUeXBlfVxyXG4gICAgfSkpO1xyXG4gICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxDdW5zZWxvcltdPignaHR0cDovL2xvY2FsaG9zdDozMDMwL2NvdW5zZWxvci9nZXRDb3Vuc2Vsb3InKTtcclxuXHJcbiAgfVxyXG4gIGFkZENvdW5zZWxvclR5cGUkKGNvdW5zZWxvclR5cGU6c3RyaW5nKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnYWRkQ291bnNlbG9yVHlwZScsXHJcbiAgICAgIGJvZHk6IGNvdW5zZWxvclR5cGVcclxuICB9KSk7XHJcbiAgfVxyXG4gYWRkQ291bnNlbG9yJChjb3Vuc2Vsb3I6Q3Vuc2Vsb3IpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdhZGRDb3Vuc2Vsb3InLFxyXG4gICAgYm9keTogY291bnNlbG9yXHJcbn0pKTtcclxufVxyXG5kZWxldGVDb3Vuc2Vsb3IkKGNvdW5zZWxvcjpDdW5zZWxvcik6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgIGFjdGlvbjogJ2RlbGV0ZUNvdW5zZWxvcicsXHJcbiAgICBib2R5OiBjb3Vuc2Vsb3JcclxufSkpO1xyXG59XHJcbn1cclxuIl19