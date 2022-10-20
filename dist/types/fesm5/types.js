import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { __read, __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypesService = /** @class */ (function () {
    function TypesService() {
    }
    TypesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TypesService.ctorParameters = function () { return []; };
    /** @nocollapse */ TypesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TypesService_Factory() { return new TypesService(); }, token: TypesService, providedIn: "root" });
    return TypesService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypesComponent = /** @class */ (function () {
    function TypesComponent() {
    }
    /**
     * @return {?}
     */
    TypesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TypesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-types',
                    template: "\n    <p>\n      types works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    TypesComponent.ctorParameters = function () { return []; };
    return TypesComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TypesModule = /** @class */ (function () {
    function TypesModule() {
    }
    TypesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TypesComponent],
                    imports: [],
                    exports: [TypesComponent]
                },] }
    ];
    return TypesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HttpRequestModel = /** @class */ (function () {
    function HttpRequestModel(copy) {
        this.params = {};
        this.body = {};
        Object.assign(this, copy);
        this.params = Object.entries(this.params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], val = _c[1];
            return (__assign({}, state, (_b = {}, _b[key] = val, _b)));
        }), {});
        if (Array.isArray(this.body)) {
            return;
        }
        this.body = Object.entries(this.body)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], val = _c[1];
            return (__assign({}, state, (_b = {}, _b[key] = val, _b)));
        }), {});
        this.body = Object.keys(this.body).length ? this.body : null;
    }
    Object.defineProperty(HttpRequestModel.prototype, "queryParams", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = this._queryParams(this.params);
            return /&/.test(result) ? "?" + result : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    HttpRequestModel.prototype._queryParams = /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    function (params, prefix) {
        var _this = this;
        if (prefix === void 0) { prefix = ''; }
        /** @type {?} */
        var result = Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), value = _b[1];
            return typeof (value) !== 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return "" + prefix + key + "=" + decodeURIComponent(value);
        }))
            .join('&');
        return Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), value = _b[1];
            return typeof (value) === 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return _this._queryParams(value, key + ".");
        }))
            .concat(result)
            .join('&');
    };
    Object.defineProperty(HttpRequestModel.prototype, "fullUrl", {
        get: /**
         * @return {?}
         */
        function () { return "" + this.url + this.action; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpRequestModel.prototype, "fullParams", {
        get: /**
         * @return {?}
         */
        function () {
            return this.params;
        },
        enumerable: true,
        configurable: true
    });
    return HttpRequestModel;
}());
if (false) {
    /** @type {?} */
    HttpRequestModel.prototype.component;
    /** @type {?} */
    HttpRequestModel.prototype.logMessage;
    /** @type {?} */
    HttpRequestModel.prototype.url;
    /** @type {?} */
    HttpRequestModel.prototype.action;
    /** @type {?} */
    HttpRequestModel.prototype.params;
    /** @type {?} */
    HttpRequestModel.prototype.body;
    /** @type {?} */
    HttpRequestModel.prototype.isText;
    /** @type {?} */
    HttpRequestModel.prototype.headers;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/cunselor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Cunselor() { }
if (false) {
    /** @type {?} */
    Cunselor.prototype.CounselorOfficeId;
    /** @type {?} */
    Cunselor.prototype.CounselorOfficeName;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficeAdress;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficePhone;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficeType;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficeManager;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficeManagerPhone;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficeManagerMail;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficeMainSecretary;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficeMainSecretaryPhone;
    /** @type {?|undefined} */
    Cunselor.prototype.CounselorOfficeMainSecretaryMail;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/ip-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IpConfig() { }
if (false) {
    /** @type {?|undefined} */
    IpConfig.prototype.servicePath;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Column() { }
if (false) {
    /** @type {?} */
    Column.prototype.header;
    /** @type {?} */
    Column.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/settings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Setting() { }
if (false) {
    /** @type {?|undefined} */
    Setting.prototype.companyName;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/entrepreneur.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Entrepreneur() { }
if (false) {
    /** @type {?|undefined} */
    Entrepreneur.prototype.EntrepreneurId;
    /** @type {?} */
    Entrepreneur.prototype.EntrepreneurCompany;
    /** @type {?} */
    Entrepreneur.prototype.EntrepreneurName;
    /** @type {?} */
    Entrepreneur.prototype.EntrepreneurPhone;
    /** @type {?} */
    Entrepreneur.prototype.EntrepreneurMail;
    /** @type {?|undefined} */
    Entrepreneur.prototype.OfficeAdress;
    /** @type {?} */
    Entrepreneur.prototype.EntrepreneurSecretary;
    /** @type {?|undefined} */
    Entrepreneur.prototype.EntrepreneurSecretaryPhone;
    /** @type {?|undefined} */
    Entrepreneur.prototype.EntrepreneurSecretaryMail;
    /** @type {?|undefined} */
    Entrepreneur.prototype.EntrepreneurCompanyFax;
    /** @type {?|undefined} */
    Entrepreneur.prototype.EntrepreneurCompanyPhone;
    /** @type {?|undefined} */
    Entrepreneur.prototype.EntrepreneurCompanyMail;
    /** @type {?|undefined} */
    Entrepreneur.prototype.EntrepreneurCompanyAddress;
    /** @type {?|undefined} */
    Entrepreneur.prototype.EntrepreneurCompanyAddressToSend;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/project.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Project() { }
if (false) {
    /** @type {?} */
    Project.prototype.ProjectId;
    /** @type {?} */
    Project.prototype.ProjectName;
    /** @type {?|undefined} */
    Project.prototype.ProjectCompany;
    /** @type {?} */
    Project.prototype.ProjectAdress;
    /** @type {?|undefined} */
    Project.prototype.ProjectType;
    /** @type {?|undefined} */
    Project.prototype.EntrepreneurId;
    /** @type {?|undefined} */
    Project.prototype.ProjectRova;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/menu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Menu() { }
if (false) {
    /** @type {?} */
    Menu.prototype.Project;
    /** @type {?} */
    Menu.prototype.Cunselor;
    /** @type {?} */
    Menu.prototype.Entrepreneur;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HttpRequestModel, TypesComponent, TypesModule, TypesService };
//# sourceMappingURL=types.js.map
