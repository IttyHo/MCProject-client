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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVudHJlcHJlbmV1ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1lbnRyZXByZW5ldXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBRzRDLGtEQUFlO0lBSDNEO1FBQUEscUVBb0NDO1FBM0JDLG1CQUFhLEdBQWdCLEVBQUUsQ0FBQzs7S0EyQmpDO0lBL0JDLHNCQUFZLDhDQUFVOzs7OztRQUF0QjtZQUNFLE9BQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxrQkFBZSxDQUFDO1FBQ3ZELENBQUM7OztPQUFBOzs7O0lBS0QscURBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGlCQUFpQjtTQUMxQixDQUFDLENBQUMsQ0FBQztRQUNKLDhGQUE4RjtJQUVoRyxDQUFDOzs7OztJQUNELGlEQUFnQjs7OztJQUFoQixVQUFpQixZQUF5QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixJQUFJLEVBQUUsWUFBWTtTQUNyQixDQUFDLENBQUMsQ0FBQztJQUdOLENBQUM7Ozs7O0lBQ0Qsb0RBQW1COzs7O0lBQW5CLFVBQW9CLFlBQXlCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBbkNBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztpQ0FMbEM7Q0F5Q0MsQUFwQ0QsQ0FHNEMsZUFBZSxHQWlDMUQ7U0FqQ1ksc0JBQXNCOzs7SUFLakMsK0NBQXlDOztJQUN6QywrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRW50cmVwcmVuZXVyLCBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEVudHJlcHJlbmV1clNlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZUJhc2Uge1xyXG5cclxuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofWVudHJlcHJlbmV1ci9gO1xyXG4gIH1cclxuICBlbnRyZXByZW5ldXIkOk9ic2VydmFibGU8RW50cmVwcmVuZXVyW10+O1xyXG4gIGVudHJlcHJlbmV1cnM6RW50cmVwcmVuZXVyW109W107XHJcblxyXG5cclxuICBnZXRFbnRyZXByZW5ldXJMaXN0JCgpOiBPYnNlcnZhYmxlPEVudHJlcHJlbmV1cltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2dldEVudHJlcHJlbmV1cicsXHJcbiAgICB9KSk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRyZXByZW5ldXJbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9lbnRyZXByZW5ldXIvZ2V0RW50cmVwcmVuZXVyJyk7XHJcblxyXG4gIH1cclxuICBhZGRFbnRyZXByZW5ldXIkKGVudHJlcHJlbmV1cjpFbnRyZXByZW5ldXIpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdhZGRFbnRyZXByZW5ldXInLFxyXG4gICAgICBib2R5OiBlbnRyZXByZW5ldXJcclxuICB9KSk7XHJcblxyXG4gIFxyXG59XHJcbmRlbGV0ZUVudHJlcHJlbmV1ciQoZW50cmVwcmVuZXVyOkVudHJlcHJlbmV1cik6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgIGFjdGlvbjogJ2RlbGV0ZUVudHJlcHJlbmV1cicsXHJcbiAgICBib2R5OiBlbnRyZXByZW5ldXIsXHJcbn0pKTtcclxufVxyXG59XHJcblxyXG4vLyJdfQ==