/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-entrepreneur.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class GetEntrepreneurService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.entrepreneurs = [];
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}entrepreneur/`;
    }
    /**
     * @return {?}
     */
    getEntrepreneurList$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getEntrepreneur',
        }));
        // return this.http.get<Entrepreneur[]>('http://localhost:3030/entrepreneur/getEntrepreneur');
    }
    /**
     * @param {?} entrepreneur
     * @return {?}
     */
    addEntrepreneur$(entrepreneur) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addEntrepreneur',
            body: entrepreneur
        }));
    }
    /**
     * @param {?} entrepreneur
     * @return {?}
     */
    deleteEntrepreneur$(entrepreneur) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteEntrepreneur',
            body: entrepreneur,
        }));
    }
}
GetEntrepreneurService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ GetEntrepreneurService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetEntrepreneurService_Factory() { return new GetEntrepreneurService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetEntrepreneurService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GetEntrepreneurService.prototype.entrepreneur$;
    /** @type {?} */
    GetEntrepreneurService.prototype.entrepreneurs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVudHJlcHJlbmV1ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1lbnRyZXByZW5ldXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLdEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGVBQWU7SUFIM0Q7O1FBU0Usa0JBQWEsR0FBZ0IsRUFBRSxDQUFDO0tBMkJqQzs7Ozs7SUEvQkMsSUFBWSxVQUFVO1FBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLGVBQWUsQ0FBQztJQUN2RCxDQUFDOzs7O0lBS0Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsaUJBQWlCO1NBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0osOEZBQThGO0lBRWhHLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsWUFBeUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsSUFBSSxFQUFFLFlBQVk7U0FDckIsQ0FBQyxDQUFDLENBQUM7SUFHTixDQUFDOzs7OztJQUNELG1CQUFtQixDQUFDLFlBQXlCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBbkNBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7O0lBUWhDLCtDQUF5Qzs7SUFDekMsK0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEVudHJlcHJlbmV1ciwgSHR0cFJlcXVlc3RNb2RlbCB9IGZyb20gJ3R5cGVzJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRFbnRyZXByZW5ldXJTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1lbnRyZXByZW5ldXIvYDtcclxuICB9XHJcbiAgZW50cmVwcmVuZXVyJDpPYnNlcnZhYmxlPEVudHJlcHJlbmV1cltdPjtcclxuICBlbnRyZXByZW5ldXJzOkVudHJlcHJlbmV1cltdPVtdO1xyXG5cclxuXHJcbiAgZ2V0RW50cmVwcmVuZXVyTGlzdCQoKTogT2JzZXJ2YWJsZTxFbnRyZXByZW5ldXJbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRFbnRyZXByZW5ldXInLFxyXG4gICAgfSkpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50cmVwcmVuZXVyW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvZW50cmVwcmVuZXVyL2dldEVudHJlcHJlbmV1cicpO1xyXG5cclxuICB9XHJcbiAgYWRkRW50cmVwcmVuZXVyJChlbnRyZXByZW5ldXI6RW50cmVwcmVuZXVyKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnYWRkRW50cmVwcmVuZXVyJyxcclxuICAgICAgYm9keTogZW50cmVwcmVuZXVyXHJcbiAgfSkpO1xyXG5cclxuICBcclxufVxyXG5kZWxldGVFbnRyZXByZW5ldXIkKGVudHJlcHJlbmV1cjpFbnRyZXByZW5ldXIpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdkZWxldGVFbnRyZXByZW5ldXInLFxyXG4gICAgYm9keTogZW50cmVwcmVuZXVyLFxyXG59KSk7XHJcbn1cclxufVxyXG5cclxuLy8iXX0=