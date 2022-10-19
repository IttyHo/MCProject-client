import { Injectable, ɵɵdefineInjectable, Component, NgModule, ɵɵinject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { combineLatest, NEVER } from 'rxjs';
import { HttpRequestModel } from 'types';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServicesService {
    constructor() { }
}
ServicesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ServicesService.ctorParameters = () => [];
/** @nocollapse */ ServicesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ServicesService_Factory() { return new ServicesService(); }, token: ServicesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServicesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ServicesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-services',
                template: `
    <p>
      services works!
    </p>
  `
            }] }
];
/** @nocollapse */
ServicesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServicesModule {
}
ServicesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ServicesComponent],
                imports: [],
                exports: [ServicesComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetOptionsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    initService(path, imagesPath) {
        console.log(`============${path}`);
        return this.http.get(path).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.map((/**
         * @param {?} item
         * @return {?}
         */
        item => (Object.assign({}, item, { imgSource: `${imagesPath}/${item['img']}.png` })))))), tap((/**
         * @param {?} result
         * @return {?}
         */
        result => this.options = result)), tap((/**
         * @param {?} result
         * @return {?}
         */
        result => console.log(`**************${{ result }}`)))).toPromise();
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.options;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    getOptionByImage(img) {
        if (!this.options) {
            return '';
        }
        return (this.options.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.img === img)) || { imgSource: 'notFound' }).imgSource;
    }
}
GetOptionsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
GetOptionsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ GetOptionsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetOptionsService_Factory() { return new GetOptionsService(ɵɵinject(HttpClient)); }, token: GetOptionsService, providedIn: "root" });
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
class ConfigurationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    initConfiguration(path) {
        return combineLatest(this.http.get(`${path}/ipConfig.json`), this.http.get(`${path}/settingsConfig.json`)).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        response => [this.ips, this.settingConfig] = response))).toPromise();
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject(HttpClient)); }, token: ConfigurationService, providedIn: "root" });
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
class ProjectDetailsService {
    constructor() {
        this.project = {
            ProjectName: '',
            ProjectCompany: '',
            ProjectAdress: '',
            ProjectType: 0,
            EntrepreneurId: '',
            ProjectRova: ''
        };
    }
}
ProjectDetailsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ProjectDetailsService.ctorParameters = () => [];
/** @nocollapse */ ProjectDetailsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProjectDetailsService_Factory() { return new ProjectDetailsService(); }, token: ProjectDetailsService, providedIn: "root" });
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
class HttpServiceBase {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    get$(httpRequest) {
        if (httpRequest.isText) {
            return this._get$(httpRequest);
        }
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    delete$(httpRequest) {
        return this.http.delete(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    post$(httpRequest) {
        if (httpRequest.isText) {
            return this._post$(httpRequest);
        }
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: Object.assign({}, httpRequest.fullParams) });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    request$(httpRequest) {
        return this.http.request('GET', httpRequest.fullUrl, {
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    requestPost$(httpRequest) {
        return this.http.request('POST', httpRequest.fullUrl, {
            body: Object.assign({}, httpRequest.body),
            params: Object.assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _get$(httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    _post$(httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: Object.assign({}, httpRequest.fullParams), responseType: 'text' });
    }
}
HttpServiceBase.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpServiceBase.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
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
class GetCounselorService extends HttpServiceBase {
    constructor() {
        super(...arguments);
        this.counselors$ = NEVER;
        this.counselors = [];
    }
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}counselor/`;
    }
    /**
     * @return {?}
     */
    getCounselorOfficeTypeList$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselorOfficeType',
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    }
    /**
     * @param {?} counselorType
     * @return {?}
     */
    getCounselorList$(counselorType) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselor',
            params: { counselorType }
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    }
    /**
     * @param {?} counselorType
     * @return {?}
     */
    addCounselorType$(counselorType) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselorType',
            body: counselorType
        }));
    }
    /**
     * @param {?} counselor
     * @return {?}
     */
    addCounselor$(counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselor',
            body: counselor
        }));
    }
}
GetCounselorService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ GetCounselorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetCounselorService_Factory() { return new GetCounselorService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: GetCounselorService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GetCounselorService.prototype.counselors$;
    /** @type {?} */
    GetCounselorService.prototype.counselors;
    /** @type {?} */
    GetCounselorService.prototype.cunselorsOfficeType$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-project.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetProjectService extends HttpServiceBase {
    constructor() {
        super(...arguments);
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
}
GetProjectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ GetProjectService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetProjectService_Factory() { return new GetProjectService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: GetProjectService, providedIn: "root" });
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
class GetEntrepreneurService extends HttpServiceBase {
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
/** @nocollapse */ GetEntrepreneurService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GetEntrepreneurService_Factory() { return new GetEntrepreneurService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: GetEntrepreneurService, providedIn: "root" });
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
class EntrepreneurDetailsService {
    constructor() {
        this.entrepreneur = {};
        this.entrepreneurToDelete = {};
    }
}
EntrepreneurDetailsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntrepreneurDetailsService.ctorParameters = () => [];
/** @nocollapse */ EntrepreneurDetailsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EntrepreneurDetailsService_Factory() { return new EntrepreneurDetailsService(); }, token: EntrepreneurDetailsService, providedIn: "root" });
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
class ValidatorsService {
    constructor() { }
    /**
     * @param {?} control
     * @return {?}
     */
    textValidators(control) {
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
    }
    /**
     * @param {?} control
     * @return {?}
     */
    phoneValidator(control) {
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
    }
    /**
     * @param {?} control
     * @return {?}
     */
    emailValidator(control) {
        if (control.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    }
}
ValidatorsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ValidatorsService.ctorParameters = () => [];
/** @nocollapse */ ValidatorsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValidatorsService_Factory() { return new ValidatorsService(); }, token: ValidatorsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: services.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ConfigurationService, EntrepreneurDetailsService, GetCounselorService, GetEntrepreneurService, GetOptionsService, GetProjectService, ProjectDetailsService, ServicesComponent, ServicesModule, ServicesService, ValidatorsService, HttpServiceBase as ɵa };
//# sourceMappingURL=services.js.map
