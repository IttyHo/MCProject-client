/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-entrepreneur.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var GetEntrepreneurService = /** @class */ (function (_super) {
    tslib_1.__extends(GetEntrepreneurService, _super);
    function GetEntrepreneurService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.entrepreneurs = [];
        return _this;
    }
    Object.defineProperty(GetEntrepreneurService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "entrepreneur/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} entrepreneur
     * @return {?}
     */
    GetEntrepreneurService.prototype.updateEntrepreneur$ = /**
     * @param {?} entrepreneur
     * @return {?}
     */
    function (entrepreneur) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateEntrepreneur',
            body: entrepreneur
        }));
    };
    /**
     * @return {?}
     */
    GetEntrepreneurService.prototype.getEntrepreneurList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getEntrepreneur',
        }));
        // return this.http.get<Entrepreneur[]>('http://localhost:3030/entrepreneur/getEntrepreneur');
    };
    /**
     * @param {?} entrepreneur
     * @return {?}
     */
    GetEntrepreneurService.prototype.addEntrepreneur$ = /**
     * @param {?} entrepreneur
     * @return {?}
     */
    function (entrepreneur) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addEntrepreneur',
            body: entrepreneur
        }));
    };
    /**
     * @param {?} entrepreneur
     * @return {?}
     */
    GetEntrepreneurService.prototype.deleteEntrepreneur$ = /**
     * @param {?} entrepreneur
     * @return {?}
     */
    function (entrepreneur) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteEntrepreneur',
            body: entrepreneur,
        }));
    };
    GetEntrepreneurService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetEntrepreneurService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetEntrepreneurService_Factory() { return new GetEntrepreneurService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetEntrepreneurService, providedIn: "root" });
    return GetEntrepreneurService;
}(HttpServiceBase));
export { GetEntrepreneurService };
if (false) {
    /** @type {?} */
    GetEntrepreneurService.prototype.entrepreneur$;
    /** @type {?} */
    GetEntrepreneurService.prototype.entrepreneurs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVudHJlcHJlbmV1ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1lbnRyZXByZW5ldXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBRzRDLGtEQUFlO0lBSDNEO1FBQUEscUVBMkNDO1FBbENDLG1CQUFhLEdBQWdCLEVBQUUsQ0FBQzs7S0FrQ2pDO0lBdENDLHNCQUFZLDhDQUFVOzs7OztRQUF0QjtZQUNFLE9BQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxrQkFBZSxDQUFDO1FBQ3ZELENBQUM7OztPQUFBOzs7OztJQUlELG9EQUFtQjs7OztJQUFuQixVQUFvQixZQUF5QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixJQUFJLEVBQUUsWUFBWTtTQUNyQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxREFBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsaUJBQWlCO1NBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0osOEZBQThGO0lBRWhHLENBQUM7Ozs7O0lBQ0QsaURBQWdCOzs7O0lBQWhCLFVBQWlCLFlBQXlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBR04sQ0FBQzs7Ozs7SUFDRCxvREFBbUI7Ozs7SUFBbkIsVUFBb0IsWUFBeUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxvQkFBb0I7WUFDNUIsSUFBSSxFQUFFLFlBQVk7U0FDckIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOztnQkExQ0EsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O2lDQUxsQztDQWdEQyxBQTNDRCxDQUc0QyxlQUFlLEdBd0MxRDtTQXhDWSxzQkFBc0I7OztJQUtqQywrQ0FBeUM7O0lBQ3pDLCtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFbnRyZXByZW5ldXIsIEh0dHBSZXF1ZXN0TW9kZWwgfSBmcm9tICd0eXBlcyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vaHR0cC1zZXJ2aWNlLmJhc2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RW50cmVwcmVuZXVyU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcblxyXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9ZW50cmVwcmVuZXVyL2A7XHJcbiAgfVxyXG4gIGVudHJlcHJlbmV1ciQ6T2JzZXJ2YWJsZTxFbnRyZXByZW5ldXJbXT47XHJcbiAgZW50cmVwcmVuZXVyczpFbnRyZXByZW5ldXJbXT1bXTtcclxuXHJcbiAgdXBkYXRlRW50cmVwcmVuZXVyJChlbnRyZXByZW5ldXI6RW50cmVwcmVuZXVyKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAndXBkYXRlRW50cmVwcmVuZXVyJyxcclxuICAgICAgYm9keTogZW50cmVwcmVuZXVyXHJcbiAgfSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW50cmVwcmVuZXVyTGlzdCQoKTogT2JzZXJ2YWJsZTxFbnRyZXByZW5ldXJbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRFbnRyZXByZW5ldXInLFxyXG4gICAgfSkpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50cmVwcmVuZXVyW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvZW50cmVwcmVuZXVyL2dldEVudHJlcHJlbmV1cicpO1xyXG5cclxuICB9XHJcbiAgYWRkRW50cmVwcmVuZXVyJChlbnRyZXByZW5ldXI6RW50cmVwcmVuZXVyKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnYWRkRW50cmVwcmVuZXVyJyxcclxuICAgICAgYm9keTogZW50cmVwcmVuZXVyXHJcbiAgfSkpO1xyXG5cclxuICBcclxufVxyXG5kZWxldGVFbnRyZXByZW5ldXIkKGVudHJlcHJlbmV1cjpFbnRyZXByZW5ldXIpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdkZWxldGVFbnRyZXByZW5ldXInLFxyXG4gICAgYm9keTogZW50cmVwcmVuZXVyLFxyXG59KSk7XHJcbn1cclxufVxyXG5cclxuLy8iXX0=