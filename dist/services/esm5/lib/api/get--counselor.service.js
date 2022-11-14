/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get--counselor.service.ts
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
var GetCounselorService = /** @class */ (function (_super) {
    tslib_1.__extends(GetCounselorService, _super);
    function GetCounselorService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.counselors$ = NEVER;
        _this.counselors = [];
        // historyDeletedCounselors=[]
        _this.counselorToDelete = null;
        return _this;
    }
    Object.defineProperty(GetCounselorService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "counselor/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetCounselorService.prototype.getCounselorOfficeTypeList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselorOfficeType',
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    };
    /**
     * @param {?} counselorType
     * @return {?}
     */
    GetCounselorService.prototype.getCounselorList$ = /**
     * @param {?} counselorType
     * @return {?}
     */
    function (counselorType) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselor',
            params: { counselorType: counselorType }
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    };
    /**
     * @param {?} counselorType
     * @return {?}
     */
    GetCounselorService.prototype.addCounselorType$ = /**
     * @param {?} counselorType
     * @return {?}
     */
    function (counselorType) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselorType',
            body: counselorType
        }));
    };
    /**
     * @param {?} counselor
     * @return {?}
     */
    GetCounselorService.prototype.addCounselor$ = /**
     * @param {?} counselor
     * @return {?}
     */
    function (counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselor',
            body: counselor
        }));
    };
    /**
     * @param {?} counselor
     * @return {?}
     */
    GetCounselorService.prototype.deleteCounselor$ = /**
     * @param {?} counselor
     * @return {?}
     */
    function (counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteCounselor',
            body: counselor
        }));
    };
    GetCounselorService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetCounselorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetCounselorService_Factory() { return new GetCounselorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetCounselorService, providedIn: "root" });
    return GetCounselorService;
}(HttpServiceBase));
export { GetCounselorService };
if (false) {
    /** @type {?} */
    GetCounselorService.prototype.aaaaa;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LS1jb3Vuc2Vsb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtLWNvdW5zZWxvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQVksZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBRXlDLCtDQUFlO0lBRnhEO1FBQUEscUVBb0RDO1FBL0NDLGlCQUFXLEdBQTJCLEtBQUssQ0FBQztRQUM1QyxnQkFBVSxHQUFZLEVBQUUsQ0FBQzs7UUFHekIsdUJBQWlCLEdBQUssSUFBSSxDQUFBOztLQTJDM0I7SUExQ0Msc0JBQVksMkNBQVU7Ozs7O1FBQXRCO1lBQ0UsT0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLGVBQVksQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTs7OztJQUVELHlEQUEyQjs7O0lBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSx3QkFBd0I7U0FDakMsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRkFBb0Y7SUFFckYsQ0FBQzs7Ozs7SUFDRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsYUFBb0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE1BQU0sRUFBQyxFQUFDLGFBQWEsZUFBQSxFQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsb0ZBQW9GO0lBRXJGLENBQUM7Ozs7O0lBQ0QsK0NBQWlCOzs7O0lBQWpCLFVBQWtCLGFBQW9CO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLElBQUksRUFBRSxhQUFhO1NBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRiwyQ0FBYTs7OztJQUFiLFVBQWMsU0FBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsU0FBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOztnQkFuREEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzhCQUxsQztDQXlEQyxBQXBERCxDQUV5QyxlQUFlLEdBa0R2RDtTQWxEWSxtQkFBbUI7OztJQUMvQixvQ0FBVTs7SUFDVCw0Q0FBa0I7O0lBQ2xCLDBDQUE0Qzs7SUFDNUMseUNBQXlCOztJQUN6QixtREFBb0M7O0lBRXBDLGdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkVWRVIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ3Vuc2Vsb3IsIEh0dHBSZXF1ZXN0TW9kZWwgfSBmcm9tICd0eXBlcyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vaHR0cC1zZXJ2aWNlLmJhc2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRDb3Vuc2Vsb3JTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcclxuIGFhYWFhOmFueTtcclxuICBjdW5zZWxvcnNUeXBlOmFueTtcclxuICBjb3Vuc2Vsb3JzJDogT2JzZXJ2YWJsZTxDdW5zZWxvcltdPiA9IE5FVkVSO1xyXG4gIGNvdW5zZWxvcnM6Q3Vuc2Vsb3JbXT1bXTtcclxuICBjdW5zZWxvcnNPZmZpY2VUeXBlJDpPYnNlcnZhYmxlPGFueT5cclxuICAvLyBoaXN0b3J5RGVsZXRlZENvdW5zZWxvcnM9W11cclxuICBjb3Vuc2Vsb3JUb0RlbGV0ZTphbnk9bnVsbFxyXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9Y291bnNlbG9yL2A7XHJcbiAgfVxyXG5cclxuICBnZXRDb3Vuc2Vsb3JPZmZpY2VUeXBlTGlzdCQoKTogT2JzZXJ2YWJsZTxDdW5zZWxvcltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2dldENvdW5zZWxvck9mZmljZVR5cGUnLFxyXG4gICAgfSkpO1xyXG4gICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxDdW5zZWxvcltdPignaHR0cDovL2xvY2FsaG9zdDozMDMwL2NvdW5zZWxvci9nZXRDb3Vuc2Vsb3InKTtcclxuXHJcbiAgfVxyXG4gIGdldENvdW5zZWxvckxpc3QkKGNvdW5zZWxvclR5cGU6c3RyaW5nKTogT2JzZXJ2YWJsZTxDdW5zZWxvcltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2dldENvdW5zZWxvcicsXHJcbiAgICAgIHBhcmFtczp7Y291bnNlbG9yVHlwZX1cclxuICAgIH0pKTtcclxuICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q3Vuc2Vsb3JbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9jb3Vuc2Vsb3IvZ2V0Q291bnNlbG9yJyk7XHJcblxyXG4gIH1cclxuICBhZGRDb3Vuc2Vsb3JUeXBlJChjb3Vuc2Vsb3JUeXBlOnN0cmluZyk6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICAgIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2FkZENvdW5zZWxvclR5cGUnLFxyXG4gICAgICBib2R5OiBjb3Vuc2Vsb3JUeXBlXHJcbiAgfSkpO1xyXG4gIH1cclxuIGFkZENvdW5zZWxvciQoY291bnNlbG9yOkN1bnNlbG9yKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgYWN0aW9uOiAnYWRkQ291bnNlbG9yJyxcclxuICAgIGJvZHk6IGNvdW5zZWxvclxyXG59KSk7XHJcbn1cclxuZGVsZXRlQ291bnNlbG9yJChjb3Vuc2Vsb3I6Q3Vuc2Vsb3IpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdkZWxldGVDb3Vuc2Vsb3InLFxyXG4gICAgYm9keTogY291bnNlbG9yXHJcbn0pKTtcclxufVxyXG59XHJcbiJdfQ==