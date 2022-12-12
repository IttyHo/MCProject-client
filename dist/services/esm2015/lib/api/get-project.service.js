/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-project.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NEVER } from 'rxjs';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class GetProjectService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.projectToUpdate = null;
        this.projectToDelete = null;
        this.project$ = NEVER;
        this.projects = [];
        this.projectTitle = 'פרויקטים';
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}project/`;
    }
    /**
     * @return {?}
     */
    getProjectList$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getProject',
        }));
        // return this.http.get<Project[]>('localhost:3030/project/getProject');
    }
    /**
     * @param {?} project
     * @return {?}
     */
    addProject$(project) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addProject',
            body: project
        }));
    }
    /**
     * @param {?} project
     * @return {?}
     */
    updateProject$(project) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateProject',
            body: project
        }));
    }
    /**
     * @param {?} project
     * @return {?}
     */
    deleteProject$(project) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteProject',
            body: project
        }));
    }
}
GetProjectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ GetProjectService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetProjectService_Factory() { return new GetProjectService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetProjectService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GetProjectService.prototype.selectedProject;
    /** @type {?} */
    GetProjectService.prototype.projectToUpdate;
    /** @type {?} */
    GetProjectService.prototype.projectToDelete;
    /** @type {?} */
    GetProjectService.prototype.project$;
    /** @type {?} */
    GetProjectService.prototype.projects;
    /** @type {?} */
    GetProjectService.prototype.projectTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2plY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLdEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGVBQWU7SUFIdEQ7O1FBS0Esb0JBQWUsR0FBSyxJQUFJLENBQUM7UUFDekIsb0JBQWUsR0FBSyxJQUFJLENBQUE7UUFDeEIsYUFBUSxHQUEwQixLQUFLLENBQUM7UUFDeEMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFDLFVBQVUsQ0FBQTtLQXNDdEI7Ozs7O0lBckNDLElBQVksVUFBVTtRQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxVQUFVLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFlBQVk7U0FDckIsQ0FBQyxDQUFDLENBQUM7UUFDSix3RUFBd0U7SUFDMUUsQ0FBQzs7Ozs7SUFFRixXQUFXLENBQUMsT0FBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsZUFBZTtZQUN2QixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQWU7UUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBNUNBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFRCw0Q0FBb0I7O0lBQ3BCLDRDQUF5Qjs7SUFDekIsNENBQXdCOztJQUN4QixxQ0FBd0M7O0lBQ3hDLHFDQUF5Qjs7SUFDekIseUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBORVZFUiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdldFByb2plY3RTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcclxuc2VsZWN0ZWRQcm9qZWN0OmFueTtcclxucHJvamVjdFRvVXBkYXRlOmFueT1udWxsO1xyXG5wcm9qZWN0VG9EZWxldGU6YW55PW51bGxcclxucHJvamVjdCQ6IE9ic2VydmFibGU8UHJvamVjdFtdPiA9IE5FVkVSO1xyXG5wcm9qZWN0czogUHJvamVjdFtdID0gW107XHJcbnByb2plY3RUaXRsZT0n16TXqNeV15nXp9eY15nXnSdcclxuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofXByb2plY3QvYDtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RMaXN0JCgpOiBPYnNlcnZhYmxlPFByb2plY3RbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRQcm9qZWN0JyxcclxuICAgIH0pKTtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2plY3RbXT4oJ2xvY2FsaG9zdDozMDMwL3Byb2plY3QvZ2V0UHJvamVjdCcpO1xyXG4gIH1cclxuXHJcbiBhZGRQcm9qZWN0JChwcm9qZWN0OlByb2plY3QpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdhZGRQcm9qZWN0JyxcclxuICAgICAgYm9keTogcHJvamVjdFxyXG4gIH0pKTtcclxufVxyXG5cclxudXBkYXRlUHJvamVjdCQocHJvamVjdDpQcm9qZWN0KTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgYWN0aW9uOiAndXBkYXRlUHJvamVjdCcsXHJcbiAgICBib2R5OiBwcm9qZWN0XHJcbn0pKTtcclxufVxyXG5cclxuZGVsZXRlUHJvamVjdCQocHJvamVjdDpQcm9qZWN0KTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgYWN0aW9uOiAnZGVsZXRlUHJvamVjdCcsXHJcbiAgICBib2R5OiBwcm9qZWN0XHJcbn0pKTtcclxufVxyXG5cclxuXHJcbn1cclxuXHJcbiAgIl19