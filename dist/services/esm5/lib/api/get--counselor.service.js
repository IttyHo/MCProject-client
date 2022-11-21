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
    GetCounselorService.prototype.updateCounselor$ = /**
     * @param {?} counselor
     * @return {?}
     */
    function (counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateCounselor',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LS1jb3Vuc2Vsb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtLWNvdW5zZWxvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQVksZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBRXlDLCtDQUFlO0lBRnhEO1FBQUEscUVBMkRDO1FBdERDLGlCQUFXLEdBQTJCLEtBQUssQ0FBQztRQUM1QyxnQkFBVSxHQUFZLEVBQUUsQ0FBQzs7UUFHekIsdUJBQWlCLEdBQUssSUFBSSxDQUFBOztLQWtEM0I7SUFqREMsc0JBQVksMkNBQVU7Ozs7O1FBQXRCO1lBQ0UsT0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLGVBQVksQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTs7OztJQUVELHlEQUEyQjs7O0lBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSx3QkFBd0I7U0FDakMsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRkFBb0Y7SUFFckYsQ0FBQzs7Ozs7SUFDRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsYUFBb0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE1BQU0sRUFBQyxFQUFDLGFBQWEsZUFBQSxFQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsb0ZBQW9GO0lBRXJGLENBQUM7Ozs7O0lBQ0QsK0NBQWlCOzs7O0lBQWpCLFVBQWtCLGFBQW9CO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLElBQUksRUFBRSxhQUFhO1NBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRiwyQ0FBYTs7OztJQUFiLFVBQWMsU0FBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsU0FBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUNELDhDQUFnQjs7OztJQUFoQixVQUFpQixTQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixJQUFJLEVBQUUsU0FBUztTQUNsQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQTFEQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OEJBTGxDO0NBZ0VDLEFBM0RELENBRXlDLGVBQWUsR0F5RHZEO1NBekRZLG1CQUFtQjs7O0lBQy9CLGdEQUFzQjs7SUFDckIsNENBQWtCOztJQUNsQiwwQ0FBNEM7O0lBQzVDLHlDQUF5Qjs7SUFDekIsbURBQW9DOztJQUVwQyxnREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5FVkVSLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEN1bnNlbG9yLCBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q291bnNlbG9yU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcbiBjb3Vuc2Vsb3JUb1VwZGF0ZTphbnk7XHJcbiAgY3Vuc2Vsb3JzVHlwZTphbnk7XHJcbiAgY291bnNlbG9ycyQ6IE9ic2VydmFibGU8Q3Vuc2Vsb3JbXT4gPSBORVZFUjtcclxuICBjb3Vuc2Vsb3JzOkN1bnNlbG9yW109W107XHJcbiAgY3Vuc2Vsb3JzT2ZmaWNlVHlwZSQ6T2JzZXJ2YWJsZTxhbnk+XHJcbiAgLy8gaGlzdG9yeURlbGV0ZWRDb3Vuc2Vsb3JzPVtdXHJcbiAgY291bnNlbG9yVG9EZWxldGU6YW55PW51bGxcclxuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofWNvdW5zZWxvci9gO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q291bnNlbG9yT2ZmaWNlVHlwZUxpc3QkKCk6IE9ic2VydmFibGU8Q3Vuc2Vsb3JbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRDb3Vuc2Vsb3JPZmZpY2VUeXBlJyxcclxuICAgIH0pKTtcclxuICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q3Vuc2Vsb3JbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9jb3Vuc2Vsb3IvZ2V0Q291bnNlbG9yJyk7XHJcblxyXG4gIH1cclxuICBnZXRDb3Vuc2Vsb3JMaXN0JChjb3Vuc2Vsb3JUeXBlOnN0cmluZyk6IE9ic2VydmFibGU8Q3Vuc2Vsb3JbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRDb3Vuc2Vsb3InLFxyXG4gICAgICBwYXJhbXM6e2NvdW5zZWxvclR5cGV9XHJcbiAgICB9KSk7XHJcbiAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PEN1bnNlbG9yW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvY291bnNlbG9yL2dldENvdW5zZWxvcicpO1xyXG5cclxuICB9XHJcbiAgYWRkQ291bnNlbG9yVHlwZSQoY291bnNlbG9yVHlwZTpzdHJpbmcpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdhZGRDb3Vuc2Vsb3JUeXBlJyxcclxuICAgICAgYm9keTogY291bnNlbG9yVHlwZVxyXG4gIH0pKTtcclxuICB9XHJcbiBhZGRDb3Vuc2Vsb3IkKGNvdW5zZWxvcjpDdW5zZWxvcik6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgIGFjdGlvbjogJ2FkZENvdW5zZWxvcicsXHJcbiAgICBib2R5OiBjb3Vuc2Vsb3JcclxufSkpO1xyXG59XHJcbnVwZGF0ZUNvdW5zZWxvciQoY291bnNlbG9yOkN1bnNlbG9yKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgYWN0aW9uOiAndXBkYXRlQ291bnNlbG9yJyxcclxuICAgIGJvZHk6IGNvdW5zZWxvclxyXG59KSk7XHJcbn1cclxuZGVsZXRlQ291bnNlbG9yJChjb3Vuc2Vsb3I6Q3Vuc2Vsb3IpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdkZWxldGVDb3Vuc2Vsb3InLFxyXG4gICAgYm9keTogY291bnNlbG9yXHJcbn0pKTtcclxufVxyXG59XHJcbiJdfQ==