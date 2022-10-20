(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('rxjs'), require('types')) :
    typeof define === 'function' && define.amd ? define('services', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', 'rxjs', 'types'], factory) :
    (global = global || self, factory(global.services = {}, global.ng.core, global.ng.common.http, global.rxjs.operators, global.rxjs, global.types));
}(this, (function (exports, core, http, operators, rxjs, types) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicesService = /** @class */ (function () {
        function ServicesService() {
        }
        ServicesService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ServicesService.ctorParameters = function () { return []; };
        /** @nocollapse */ ServicesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ServicesService_Factory() { return new ServicesService(); }, token: ServicesService, providedIn: "root" });
        return ServicesService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicesComponent = /** @class */ (function () {
        function ServicesComponent() {
        }
        /**
         * @return {?}
         */
        ServicesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ServicesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-services',
                        template: "\n    <p>\n      services works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ServicesComponent.ctorParameters = function () { return []; };
        return ServicesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicesModule = /** @class */ (function () {
        function ServicesModule() {
        }
        ServicesModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ServicesComponent],
                        imports: [],
                        exports: [ServicesComponent]
                    },] }
        ];
        return ServicesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/get-options.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetOptionsService = /** @class */ (function () {
        function GetOptionsService(http) {
            this.http = http;
        }
        //
        //
        /**
         * @param {?} path
         * @param {?} imagesPath
         * @return {?}
         */
        GetOptionsService.prototype.initService = 
        //
        /**
         * @param {?} path
         * @param {?} imagesPath
         * @return {?}
         */
        function (path, imagesPath) {
            var _this = this;
            console.log("============" + path);
            return this.http.get(path).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return result.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (__assign({}, item, { imgSource: imagesPath + "/" + item['img'] + ".png" })); })); })), operators.tap((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return _this.options = result; })), operators.tap((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return console.log("**************" + { result: result }); }))).toPromise();
        };
        /**
         * @return {?}
         */
        GetOptionsService.prototype.getOptions = /**
         * @return {?}
         */
        function () {
            return this.options;
        };
        /**
         * @param {?} img
         * @return {?}
         */
        GetOptionsService.prototype.getOptionByImage = /**
         * @param {?} img
         * @return {?}
         */
        function (img) {
            if (!this.options) {
                return '';
            }
            return (this.options.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.img === img; })) || { imgSource: 'notFound' }).imgSource;
        };
        GetOptionsService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        GetOptionsService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ GetOptionsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GetOptionsService_Factory() { return new GetOptionsService(core.ɵɵinject(http.HttpClient)); }, token: GetOptionsService, providedIn: "root" });
        return GetOptionsService;
    }());
    if (false) {
        /** @type {?} */
        GetOptionsService.prototype.options;
        /**
         * @type {?}
         * @private
         */
        GetOptionsService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/configuration.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigurationService = /** @class */ (function () {
        function ConfigurationService(http) {
            this.http = http;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        ConfigurationService.prototype.initConfiguration = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            var _this = this;
            return rxjs.combineLatest(this.http.get(path + "/ipConfig.json"), this.http.get(path + "/settingsConfig.json")).pipe(operators.tap((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                var _a;
                return _a = __read(response, 2), _this.ips = _a[0], _this.settingConfig = _a[1], response;
            }))).toPromise();
        };
        ConfigurationService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ConfigurationService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ ConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(core.ɵɵinject(http.HttpClient)); }, token: ConfigurationService, providedIn: "root" });
        return ConfigurationService;
    }());
    if (false) {
        /** @type {?} */
        ConfigurationService.prototype.ips;
        /** @type {?} */
        ConfigurationService.prototype.settingConfig;
        /**
         * @type {?}
         * @private
         */
        ConfigurationService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/project-details.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProjectDetailsService = /** @class */ (function () {
        function ProjectDetailsService() {
            this.project = {
                ProjectName: '',
                ProjectCompany: '',
                ProjectAdress: '',
                ProjectType: 0,
                EntrepreneurId: '',
                ProjectRova: ''
            };
        }
        ProjectDetailsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ProjectDetailsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ProjectDetailsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ProjectDetailsService_Factory() { return new ProjectDetailsService(); }, token: ProjectDetailsService, providedIn: "root" });
        return ProjectDetailsService;
    }());
    if (false) {
        /** @type {?} */
        ProjectDetailsService.prototype.project;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/http-service.base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var HttpServiceBase = /** @class */ (function () {
        function HttpServiceBase(http, config) {
            this.http = http;
            this.config = config;
            this.index = 0;
        }
        /**
         * @template T
         * @param {?} httpRequest
         * @return {?}
         */
        HttpServiceBase.prototype.get$ = /**
         * @template T
         * @param {?} httpRequest
         * @return {?}
         */
        function (httpRequest) {
            if (httpRequest.isText) {
                return this._get$(httpRequest);
            }
            return this.http.get(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams) });
        };
        /**
         * @template T
         * @param {?} httpRequest
         * @return {?}
         */
        HttpServiceBase.prototype.delete$ = /**
         * @template T
         * @param {?} httpRequest
         * @return {?}
         */
        function (httpRequest) {
            return this.http.delete(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams) });
        };
        /**
         * @template T
         * @param {?} httpRequest
         * @return {?}
         */
        HttpServiceBase.prototype.post$ = /**
         * @template T
         * @param {?} httpRequest
         * @return {?}
         */
        function (httpRequest) {
            if (httpRequest.isText) {
                return this._post$(httpRequest);
            }
            return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: __assign({}, httpRequest.fullParams) });
        };
        /**
         * @param {?} httpRequest
         * @return {?}
         */
        HttpServiceBase.prototype.request$ = /**
         * @param {?} httpRequest
         * @return {?}
         */
        function (httpRequest) {
            return this.http.request('GET', httpRequest.fullUrl, {
                params: __assign({}, httpRequest.fullParams),
                observe: 'response',
                responseType: 'blob',
            });
        };
        /**
         * @param {?} httpRequest
         * @return {?}
         */
        HttpServiceBase.prototype.requestPost$ = /**
         * @param {?} httpRequest
         * @return {?}
         */
        function (httpRequest) {
            return this.http.request('POST', httpRequest.fullUrl, {
                body: __assign({}, httpRequest.body),
                params: __assign({}, httpRequest.fullParams),
                observe: 'response',
                responseType: 'blob',
            });
        };
        /**
         * @private
         * @param {?} httpRequest
         * @return {?}
         */
        HttpServiceBase.prototype._get$ = /**
         * @private
         * @param {?} httpRequest
         * @return {?}
         */
        function (httpRequest) {
            return this.http.get(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams), responseType: 'text' });
        };
        /**
         * @private
         * @param {?} httpRequest
         * @return {?}
         */
        HttpServiceBase.prototype._post$ = /**
         * @private
         * @param {?} httpRequest
         * @return {?}
         */
        function (httpRequest) {
            return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: __assign({}, httpRequest.fullParams), responseType: 'text' });
        };
        HttpServiceBase.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HttpServiceBase.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: ConfigurationService }
        ]; };
        return HttpServiceBase;
    }());
    if (false) {
        /** @type {?} */
        HttpServiceBase.prototype.index;
        /**
         * @type {?}
         * @protected
         */
        HttpServiceBase.prototype.http;
        /**
         * @type {?}
         * @protected
         */
        HttpServiceBase.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/get--counselor.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetCounselorService = /** @class */ (function (_super) {
        __extends(GetCounselorService, _super);
        function GetCounselorService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.counselors$ = rxjs.NEVER;
            _this.counselors = [];
            _this.counselorToDelete = {};
            _this.historyDeletedCounselos = [];
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
            return this.get$(new types.HttpRequestModel({
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
            return this.get$(new types.HttpRequestModel({
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
            return this.post$(new types.HttpRequestModel({
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
            return this.post$(new types.HttpRequestModel({
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
            return this.post$(new types.HttpRequestModel({
                url: this._serverUrl,
                action: 'deleteCounselor',
                body: counselor
            }));
        };
        GetCounselorService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ GetCounselorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GetCounselorService_Factory() { return new GetCounselorService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigurationService)); }, token: GetCounselorService, providedIn: "root" });
        return GetCounselorService;
    }(HttpServiceBase));
    if (false) {
        /** @type {?} */
        GetCounselorService.prototype.counselors$;
        /** @type {?} */
        GetCounselorService.prototype.counselors;
        /** @type {?} */
        GetCounselorService.prototype.cunselorsOfficeType$;
        /** @type {?} */
        GetCounselorService.prototype.counselorToDelete;
        /** @type {?} */
        GetCounselorService.prototype.historyDeletedCounselos;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/get-project.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetProjectService = /** @class */ (function (_super) {
        __extends(GetProjectService, _super);
        function GetProjectService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.project$ = rxjs.NEVER;
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
            return this.get$(new types.HttpRequestModel({
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
            return this.post$(new types.HttpRequestModel({
                url: this._serverUrl,
                action: 'addProject',
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
            return this.post$(new types.HttpRequestModel({
                url: this._serverUrl,
                action: 'deleteProject',
                body: project
            }));
        };
        GetProjectService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ GetProjectService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GetProjectService_Factory() { return new GetProjectService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigurationService)); }, token: GetProjectService, providedIn: "root" });
        return GetProjectService;
    }(HttpServiceBase));
    if (false) {
        /** @type {?} */
        GetProjectService.prototype.selectedProject;
        /** @type {?} */
        GetProjectService.prototype.project$;
        /** @type {?} */
        GetProjectService.prototype.projects;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/get-entrepreneur.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetEntrepreneurService = /** @class */ (function (_super) {
        __extends(GetEntrepreneurService, _super);
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
            return this.get$(new types.HttpRequestModel({
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
            return this.post$(new types.HttpRequestModel({
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
            return this.post$(new types.HttpRequestModel({
                url: this._serverUrl,
                action: 'deleteEntrepreneur',
                body: entrepreneur,
            }));
        };
        GetEntrepreneurService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ GetEntrepreneurService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GetEntrepreneurService_Factory() { return new GetEntrepreneurService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigurationService)); }, token: GetEntrepreneurService, providedIn: "root" });
        return GetEntrepreneurService;
    }(HttpServiceBase));
    if (false) {
        /** @type {?} */
        GetEntrepreneurService.prototype.entrepreneur$;
        /** @type {?} */
        GetEntrepreneurService.prototype.entrepreneurs;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/entrepreneur-details.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EntrepreneurDetailsService = /** @class */ (function () {
        function EntrepreneurDetailsService() {
            this.entrepreneur = {};
            this.entrepreneurToDelete = {};
        }
        EntrepreneurDetailsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EntrepreneurDetailsService.ctorParameters = function () { return []; };
        /** @nocollapse */ EntrepreneurDetailsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EntrepreneurDetailsService_Factory() { return new EntrepreneurDetailsService(); }, token: EntrepreneurDetailsService, providedIn: "root" });
        return EntrepreneurDetailsService;
    }());
    if (false) {
        /** @type {?} */
        EntrepreneurDetailsService.prototype.entrepreneur;
        /** @type {?} */
        EntrepreneurDetailsService.prototype.entrepreneurToDelete;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api/validators.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidatorsService = /** @class */ (function () {
        function ValidatorsService() {
        }
        /**
         * @param {?} control
         * @return {?}
         */
        ValidatorsService.prototype.textValidators = /**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            console.log(control);
            if (control.value.length) {
                if (control.value.length > 7 && control.value.length < 13) {
                    if (control.value.match(/^[0-9]+(\.?[0-9]+)?$/))
                        return null;
                }
                else {
                    return { invalidPhone: true };
                }
            }
        };
        /**
         * @param {?} control
         * @return {?}
         */
        ValidatorsService.prototype.phoneValidator = /**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            console.log(control);
            if (control.value.length) {
                if (control.value.length > 7 && control.value.length < 13) {
                    if (control.value.match(/^[א-ת]+(\.?[א-ת]+)?$/))
                        return null;
                }
                else {
                    return { invalidPhone: true };
                }
            }
        };
        /**
         * @param {?} control
         * @return {?}
         */
        ValidatorsService.prototype.emailValidator = /**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (control.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                return null;
            }
            else {
                return { invalidEmailAddress: true };
            }
        };
        ValidatorsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ValidatorsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ValidatorsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ValidatorsService_Factory() { return new ValidatorsService(); }, token: ValidatorsService, providedIn: "root" });
        return ValidatorsService;
    }());

    exports.ConfigurationService = ConfigurationService;
    exports.EntrepreneurDetailsService = EntrepreneurDetailsService;
    exports.GetCounselorService = GetCounselorService;
    exports.GetEntrepreneurService = GetEntrepreneurService;
    exports.GetOptionsService = GetOptionsService;
    exports.GetProjectService = GetProjectService;
    exports.ProjectDetailsService = ProjectDetailsService;
    exports.ServicesComponent = ServicesComponent;
    exports.ServicesModule = ServicesModule;
    exports.ServicesService = ServicesService;
    exports.ValidatorsService = ValidatorsService;
    exports.ɵa = HttpServiceBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=services.umd.js.map
