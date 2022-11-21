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
        // historyDeletedCounselors=[]
        this.counselorToDelete = null;
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
    updateCounselor$(counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateCounselor',
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
    GetCounselorService.prototype.counselorToUpdate;
    /** @type {?} */
    GetCounselorService.prototype.cunselorsType;
    /** @type {?} */
    GetCounselorService.prototype.counselors$;
    /** @type {?} */
    GetCounselorService.prototype.counselors;
    /** @type {?} */
    GetCounselorService.prototype.cunselorsOfficeType$;
    /** @type {?} */
    GetCounselorService.prototype.counselorToDelete;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LS1jb3Vuc2Vsb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtLWNvdW5zZWxvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBWSxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFJdEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7SUFGeEQ7O1FBS0UsZ0JBQVcsR0FBMkIsS0FBSyxDQUFDO1FBQzVDLGVBQVUsR0FBWSxFQUFFLENBQUM7O1FBR3pCLHNCQUFpQixHQUFLLElBQUksQ0FBQTtLQWtEM0I7Ozs7O0lBakRDLElBQVksVUFBVTtRQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxZQUFZLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELDJCQUEyQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLHdCQUF3QjtTQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNMLG9GQUFvRjtJQUVyRixDQUFDOzs7OztJQUNELGlCQUFpQixDQUFDLGFBQW9CO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixNQUFNLEVBQUMsRUFBQyxhQUFhLEVBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRkFBb0Y7SUFFckYsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxhQUFvQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixJQUFJLEVBQUUsYUFBYTtTQUN0QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0YsYUFBYSxDQUFDLFNBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixJQUFJLEVBQUUsU0FBUztTQUNsQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsU0FBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUNELGdCQUFnQixDQUFDLFNBQWtCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBMURBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7O0lBR2pDLGdEQUFzQjs7SUFDckIsNENBQWtCOztJQUNsQiwwQ0FBNEM7O0lBQzVDLHlDQUF5Qjs7SUFDekIsbURBQW9DOztJQUVwQyxnREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5FVkVSLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEN1bnNlbG9yLCBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q291bnNlbG9yU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcbiBjb3Vuc2Vsb3JUb1VwZGF0ZTphbnk7XHJcbiAgY3Vuc2Vsb3JzVHlwZTphbnk7XHJcbiAgY291bnNlbG9ycyQ6IE9ic2VydmFibGU8Q3Vuc2Vsb3JbXT4gPSBORVZFUjtcclxuICBjb3Vuc2Vsb3JzOkN1bnNlbG9yW109W107XHJcbiAgY3Vuc2Vsb3JzT2ZmaWNlVHlwZSQ6T2JzZXJ2YWJsZTxhbnk+XHJcbiAgLy8gaGlzdG9yeURlbGV0ZWRDb3Vuc2Vsb3JzPVtdXHJcbiAgY291bnNlbG9yVG9EZWxldGU6YW55PW51bGxcclxuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofWNvdW5zZWxvci9gO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q291bnNlbG9yT2ZmaWNlVHlwZUxpc3QkKCk6IE9ic2VydmFibGU8Q3Vuc2Vsb3JbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRDb3Vuc2Vsb3JPZmZpY2VUeXBlJyxcclxuICAgIH0pKTtcclxuICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q3Vuc2Vsb3JbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9jb3Vuc2Vsb3IvZ2V0Q291bnNlbG9yJyk7XHJcblxyXG4gIH1cclxuICBnZXRDb3Vuc2Vsb3JMaXN0JChjb3Vuc2Vsb3JUeXBlOnN0cmluZyk6IE9ic2VydmFibGU8Q3Vuc2Vsb3JbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRDb3Vuc2Vsb3InLFxyXG4gICAgICBwYXJhbXM6e2NvdW5zZWxvclR5cGV9XHJcbiAgICB9KSk7XHJcbiAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PEN1bnNlbG9yW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvY291bnNlbG9yL2dldENvdW5zZWxvcicpO1xyXG5cclxuICB9XHJcbiAgYWRkQ291bnNlbG9yVHlwZSQoY291bnNlbG9yVHlwZTpzdHJpbmcpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdhZGRDb3Vuc2Vsb3JUeXBlJyxcclxuICAgICAgYm9keTogY291bnNlbG9yVHlwZVxyXG4gIH0pKTtcclxuICB9XHJcbiBhZGRDb3Vuc2Vsb3IkKGNvdW5zZWxvcjpDdW5zZWxvcik6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgIGFjdGlvbjogJ2FkZENvdW5zZWxvcicsXHJcbiAgICBib2R5OiBjb3Vuc2Vsb3JcclxufSkpO1xyXG59XHJcbnVwZGF0ZUNvdW5zZWxvciQoY291bnNlbG9yOkN1bnNlbG9yKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgYWN0aW9uOiAndXBkYXRlQ291bnNlbG9yJyxcclxuICAgIGJvZHk6IGNvdW5zZWxvclxyXG59KSk7XHJcbn1cclxuZGVsZXRlQ291bnNlbG9yJChjb3Vuc2Vsb3I6Q3Vuc2Vsb3IpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdkZWxldGVDb3Vuc2Vsb3InLFxyXG4gICAgYm9keTogY291bnNlbG9yXHJcbn0pKTtcclxufVxyXG59XHJcbiJdfQ==