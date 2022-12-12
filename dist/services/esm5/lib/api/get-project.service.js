/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-project.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NEVER } from 'rxjs';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var GetProjectService = /** @class */ (function (_super) {
    tslib_1.__extends(GetProjectService, _super);
    function GetProjectService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.projectToUpdate = null;
        _this.projectToDelete = null;
        _this.project$ = NEVER;
        _this.projects = [];
        _this.projectTitle = 'פרויקטים';
        return _this;
    }
    Object.defineProperty(GetProjectService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "project/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetProjectService.prototype.getProjectList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getProject',
        }));
        // return this.http.get<Project[]>('localhost:3030/project/getProject');
    };
    /**
     * @param {?} project
     * @return {?}
     */
    GetProjectService.prototype.addProject$ = /**
     * @param {?} project
     * @return {?}
     */
    function (project) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addProject',
            body: project
        }));
    };
    /**
     * @param {?} project
     * @return {?}
     */
    GetProjectService.prototype.updateProject$ = /**
     * @param {?} project
     * @return {?}
     */
    function (project) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateProject',
            body: project
        }));
    };
    /**
     * @param {?} project
     * @return {?}
     */
    GetProjectService.prototype.deleteProject$ = /**
     * @param {?} project
     * @return {?}
     */
    function (project) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteProject',
            body: project
        }));
    };
    GetProjectService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ GetProjectService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetProjectService_Factory() { return new GetProjectService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetProjectService, providedIn: "root" });
    return GetProjectService;
}(HttpServiceBase));
export { GetProjectService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2plY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBR3VDLDZDQUFlO0lBSHREO1FBQUEscUVBK0NDO1FBMUNELHFCQUFlLEdBQUssSUFBSSxDQUFDO1FBQ3pCLHFCQUFlLEdBQUssSUFBSSxDQUFBO1FBQ3hCLGNBQVEsR0FBMEIsS0FBSyxDQUFDO1FBQ3hDLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsa0JBQVksR0FBQyxVQUFVLENBQUE7O0tBc0N0QjtJQXJDQyxzQkFBWSx5Q0FBVTs7Ozs7UUFBdEI7WUFDRSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsYUFBVSxDQUFDO1FBQ2xELENBQUM7OztPQUFBOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0osd0VBQXdFO0lBQzFFLENBQUM7Ozs7O0lBRUYsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCwwQ0FBYzs7OztJQUFkLFVBQWUsT0FBZTtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGVBQWU7WUFDdkIsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDBDQUFjOzs7O0lBQWQsVUFBZSxPQUFlO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsZUFBZTtZQUN2QixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQTVDQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBUkQ7Q0FxREMsQUEvQ0QsQ0FHdUMsZUFBZSxHQTRDckQ7U0E1Q1ksaUJBQWlCOzs7SUFDOUIsNENBQW9COztJQUNwQiw0Q0FBeUI7O0lBQ3pCLDRDQUF3Qjs7SUFDeEIscUNBQXdDOztJQUN4QyxxQ0FBeUI7O0lBQ3pCLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJ3R5cGVzJztcclxuaW1wb3J0IHsgTkVWRVIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RNb2RlbCB9IGZyb20gJ3R5cGVzJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9qZWN0U2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcbnNlbGVjdGVkUHJvamVjdDphbnk7XHJcbnByb2plY3RUb1VwZGF0ZTphbnk9bnVsbDtcclxucHJvamVjdFRvRGVsZXRlOmFueT1udWxsXHJcbnByb2plY3QkOiBPYnNlcnZhYmxlPFByb2plY3RbXT4gPSBORVZFUjtcclxucHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xyXG5wcm9qZWN0VGl0bGU9J9ek16jXldeZ16fXmNeZ150nXHJcbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1wcm9qZWN0L2A7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0TGlzdCQoKTogT2JzZXJ2YWJsZTxQcm9qZWN0W10+IHtcclxuICAgIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnZ2V0UHJvamVjdCcsXHJcbiAgICB9KSk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9qZWN0W10+KCdsb2NhbGhvc3Q6MzAzMC9wcm9qZWN0L2dldFByb2plY3QnKTtcclxuICB9XHJcblxyXG4gYWRkUHJvamVjdCQocHJvamVjdDpQcm9qZWN0KTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnYWRkUHJvamVjdCcsXHJcbiAgICAgIGJvZHk6IHByb2plY3RcclxuICB9KSk7XHJcbn1cclxuXHJcbnVwZGF0ZVByb2plY3QkKHByb2plY3Q6UHJvamVjdCk6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgIGFjdGlvbjogJ3VwZGF0ZVByb2plY3QnLFxyXG4gICAgYm9keTogcHJvamVjdFxyXG59KSk7XHJcbn1cclxuXHJcbmRlbGV0ZVByb2plY3QkKHByb2plY3Q6UHJvamVjdCk6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgIGFjdGlvbjogJ2RlbGV0ZVByb2plY3QnLFxyXG4gICAgYm9keTogcHJvamVjdFxyXG59KSk7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG4gICJdfQ==