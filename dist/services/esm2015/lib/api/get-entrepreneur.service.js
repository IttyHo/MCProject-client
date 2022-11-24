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
     * @param {?} entrepreneur
     * @return {?}
     */
    updateEntrepreneur$(entrepreneur) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'updateEntrepreneur',
            body: entrepreneur
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVudHJlcHJlbmV1ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1lbnRyZXByZW5ldXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLdEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGVBQWU7SUFIM0Q7O1FBU0Usa0JBQWEsR0FBZ0IsRUFBRSxDQUFDO0tBa0NqQzs7Ozs7SUF0Q0MsSUFBWSxVQUFVO1FBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLGVBQWUsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUlELG1CQUFtQixDQUFDLFlBQXlCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGlCQUFpQjtTQUMxQixDQUFDLENBQUMsQ0FBQztRQUNKLDhGQUE4RjtJQUVoRyxDQUFDOzs7OztJQUNELGdCQUFnQixDQUFDLFlBQXlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBR04sQ0FBQzs7Ozs7SUFDRCxtQkFBbUIsQ0FBQyxZQUF5QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixJQUFJLEVBQUUsWUFBWTtTQUNyQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7OztZQTFDQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OztJQVFoQywrQ0FBeUM7O0lBQ3pDLCtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFbnRyZXByZW5ldXIsIEh0dHBSZXF1ZXN0TW9kZWwgfSBmcm9tICd0eXBlcyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vaHR0cC1zZXJ2aWNlLmJhc2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RW50cmVwcmVuZXVyU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcblxyXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9ZW50cmVwcmVuZXVyL2A7XHJcbiAgfVxyXG4gIGVudHJlcHJlbmV1ciQ6T2JzZXJ2YWJsZTxFbnRyZXByZW5ldXJbXT47XHJcbiAgZW50cmVwcmVuZXVyczpFbnRyZXByZW5ldXJbXT1bXTtcclxuXHJcbiAgdXBkYXRlRW50cmVwcmVuZXVyJChlbnRyZXByZW5ldXI6RW50cmVwcmVuZXVyKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAndXBkYXRlRW50cmVwcmVuZXVyJyxcclxuICAgICAgYm9keTogZW50cmVwcmVuZXVyXHJcbiAgfSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW50cmVwcmVuZXVyTGlzdCQoKTogT2JzZXJ2YWJsZTxFbnRyZXByZW5ldXJbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRFbnRyZXByZW5ldXInLFxyXG4gICAgfSkpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50cmVwcmVuZXVyW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvZW50cmVwcmVuZXVyL2dldEVudHJlcHJlbmV1cicpO1xyXG5cclxuICB9XHJcbiAgYWRkRW50cmVwcmVuZXVyJChlbnRyZXByZW5ldXI6RW50cmVwcmVuZXVyKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnYWRkRW50cmVwcmVuZXVyJyxcclxuICAgICAgYm9keTogZW50cmVwcmVuZXVyXHJcbiAgfSkpO1xyXG5cclxuICBcclxufVxyXG5kZWxldGVFbnRyZXByZW5ldXIkKGVudHJlcHJlbmV1cjpFbnRyZXByZW5ldXIpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdkZWxldGVFbnRyZXByZW5ldXInLFxyXG4gICAgYm9keTogZW50cmVwcmVuZXVyLFxyXG59KSk7XHJcbn1cclxufVxyXG5cclxuLy8iXX0=