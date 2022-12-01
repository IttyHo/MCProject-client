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
        _this.projectToDelete = null;
        _this.project$ = NEVER;
        _this.projects = [];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2plY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBR3VDLDZDQUFlO0lBSHREO1FBQUEscUVBOENDO1FBeENELHFCQUFlLEdBQUssSUFBSSxDQUFBO1FBQ3hCLGNBQVEsR0FBMEIsS0FBSyxDQUFDO1FBQ3hDLGNBQVEsR0FBYyxFQUFFLENBQUM7O0tBc0N4QjtJQXJDQyxzQkFBWSx5Q0FBVTs7Ozs7UUFBdEI7WUFDRSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsYUFBVSxDQUFDO1FBQ2xELENBQUM7OztPQUFBOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0osd0VBQXdFO0lBQzFFLENBQUM7Ozs7O0lBRUYsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCwwQ0FBYzs7OztJQUFkLFVBQWUsT0FBZTtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGVBQWU7WUFDdkIsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDBDQUFjOzs7O0lBQWQsVUFBZSxPQUFlO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsZUFBZTtZQUN2QixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQTNDQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBUkQ7Q0FvREMsQUE5Q0QsQ0FHdUMsZUFBZSxHQTJDckQ7U0EzQ1ksaUJBQWlCOzs7SUFDOUIsNENBQW9COztJQUNwQiw0Q0FBZ0I7O0lBQ2hCLDRDQUF3Qjs7SUFDeEIscUNBQXdDOztJQUN4QyxxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICd0eXBlcyc7XHJcbmltcG9ydCB7IE5FVkVSLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0TW9kZWwgfSBmcm9tICd0eXBlcyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vaHR0cC1zZXJ2aWNlLmJhc2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvamVjdFNlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZUJhc2Uge1xyXG5zZWxlY3RlZFByb2plY3Q6YW55O1xyXG5wcm9qZWN0VG9VcGRhdGU7XHJcbnByb2plY3RUb0RlbGV0ZTphbnk9bnVsbFxyXG5wcm9qZWN0JDogT2JzZXJ2YWJsZTxQcm9qZWN0W10+ID0gTkVWRVI7XHJcbnByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcclxuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofXByb2plY3QvYDtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RMaXN0JCgpOiBPYnNlcnZhYmxlPFByb2plY3RbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRQcm9qZWN0JyxcclxuICAgIH0pKTtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2plY3RbXT4oJ2xvY2FsaG9zdDozMDMwL3Byb2plY3QvZ2V0UHJvamVjdCcpO1xyXG4gIH1cclxuXHJcbiBhZGRQcm9qZWN0JChwcm9qZWN0OlByb2plY3QpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdhZGRQcm9qZWN0JyxcclxuICAgICAgYm9keTogcHJvamVjdFxyXG4gIH0pKTtcclxufVxyXG5cclxudXBkYXRlUHJvamVjdCQocHJvamVjdDpQcm9qZWN0KTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgYWN0aW9uOiAndXBkYXRlUHJvamVjdCcsXHJcbiAgICBib2R5OiBwcm9qZWN0XHJcbn0pKTtcclxufVxyXG5cclxuZGVsZXRlUHJvamVjdCQocHJvamVjdDpQcm9qZWN0KTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgYWN0aW9uOiAnZGVsZXRlUHJvamVjdCcsXHJcbiAgICBib2R5OiBwcm9qZWN0XHJcbn0pKTtcclxufVxyXG5cclxuXHJcbn1cclxuXHJcbiAgIl19