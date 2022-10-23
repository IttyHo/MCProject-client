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
        this.projectToDelete = null;
        this.project$ = NEVER;
        this.projects = [];
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
    GetProjectService.prototype.projectToDelete;
    /** @type {?} */
    GetProjectService.prototype.project$;
    /** @type {?} */
    GetProjectService.prototype.projects;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2plY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLdEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGVBQWU7SUFIdEQ7O1FBS0Esb0JBQWUsR0FBSyxJQUFJLENBQUE7UUFDeEIsYUFBUSxHQUEwQixLQUFLLENBQUM7UUFDeEMsYUFBUSxHQUFjLEVBQUUsQ0FBQztLQThCeEI7Ozs7O0lBN0JDLElBQVksVUFBVTtRQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxVQUFVLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFlBQVk7U0FDckIsQ0FBQyxDQUFDLENBQUM7UUFDSix3RUFBd0U7SUFDMUUsQ0FBQzs7Ozs7SUFFRixXQUFXLENBQUMsT0FBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsZUFBZTtZQUN2QixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7OztZQWxDQSxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUQsNENBQW9COztJQUNwQiw0Q0FBd0I7O0lBQ3hCLHFDQUF3Qzs7SUFDeEMscUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBORVZFUiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdldFByb2plY3RTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcclxuc2VsZWN0ZWRQcm9qZWN0OmFueTtcclxucHJvamVjdFRvRGVsZXRlOmFueT1udWxsXHJcbnByb2plY3QkOiBPYnNlcnZhYmxlPFByb2plY3RbXT4gPSBORVZFUjtcclxucHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xyXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9cHJvamVjdC9gO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdExpc3QkKCk6IE9ic2VydmFibGU8UHJvamVjdFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2dldFByb2plY3QnLFxyXG4gICAgfSkpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvamVjdFtdPignbG9jYWxob3N0OjMwMzAvcHJvamVjdC9nZXRQcm9qZWN0Jyk7XHJcbiAgfVxyXG5cclxuIGFkZFByb2plY3QkKHByb2plY3Q6UHJvamVjdCk6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICAgIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2FkZFByb2plY3QnLFxyXG4gICAgICBib2R5OiBwcm9qZWN0XHJcbiAgfSkpO1xyXG59XHJcblxyXG5kZWxldGVQcm9qZWN0JChwcm9qZWN0OlByb2plY3QpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdkZWxldGVQcm9qZWN0JyxcclxuICAgIGJvZHk6IHByb2plY3RcclxufSkpO1xyXG59XHJcblxyXG5cclxufVxyXG5cclxuICAiXX0=