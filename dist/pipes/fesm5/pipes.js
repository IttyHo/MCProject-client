import { Injectable, ɵɵdefineInjectable, Component, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetOptionsService } from 'services';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipesService = /** @class */ (function () {
    function PipesService() {
    }
    PipesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PipesService.ctorParameters = function () { return []; };
    /** @nocollapse */ PipesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PipesService_Factory() { return new PipesService(); }, token: PipesService, providedIn: "root" });
    return PipesService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
    }
    /**
     * @return {?}
     */
    PipesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PipesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-pipes',
                    template: "\n    <p>\n      pipes works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    PipesComponent.ctorParameters = function () { return []; };
    return PipesComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PipesComponent],
                    imports: [],
                    exports: [PipesComponent]
                },] }
    ];
    return PipesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-img-path.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetImgPathPipe = /** @class */ (function () {
    function GetImgPathPipe(service) {
        this.service = service;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    GetImgPathPipe.prototype.transform = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        // console.log(img+"      img");    
        return this.service.getOptionByImage(img);
    };
    GetImgPathPipe.decorators = [
        { type: Pipe, args: [{ name: 'getImgPath' },] }
    ];
    /** @nocollapse */
    GetImgPathPipe.ctorParameters = function () { return [
        { type: GetOptionsService }
    ]; };
    return GetImgPathPipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetImgPathPipe.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/has-errors.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HasErrorsPipe = /** @class */ (function () {
    function HasErrorsPipe() {
    }
    /**
     * @param {?} formGroup
     * @param {?} controlName
     * @return {?}
     */
    HasErrorsPipe.prototype.transform = /**
     * @param {?} formGroup
     * @param {?} controlName
     * @return {?}
     */
    function (formGroup, controlName) {
        return !!Object.keys(formGroup.controls[controlName].errors).length;
    };
    HasErrorsPipe.decorators = [
        { type: Pipe, args: [{ name: 'hasErrors' },] }
    ];
    return HasErrorsPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-error.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetErrorPipe = /** @class */ (function () {
    function GetErrorPipe() {
    }
    /**
     * @param {?} errors
     * @return {?}
     */
    GetErrorPipe.prototype.transform = /**
     * @param {?} errors
     * @return {?}
     */
    function (errors) {
        if (!errors) {
            return [];
        }
        /** @type {?} */
        var errorsToDisplay = [];
        // Object.keys(errors).forEach(error => {
        //   switch(error){
        //     case'required': errorsToDisplay= [...errorsToDisplay, 'שדה חובה']
        //          break;
        //     case'invalidEmailAddress': errorsToDisplay= [...errorsToDisplay, 'כתובת אמייל לא נכונה']
        //          break;
        //     case'maxlength': errorsToDisplay= [...errorsToDisplay, 'מספר תווים לא תקין']
        //          break;
        //   }
        // }); 
        return errorsToDisplay;
    };
    GetErrorPipe.decorators = [
        { type: Pipe, args: [{ name: 'getError' },] }
    ];
    return GetErrorPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/all-pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AllPipesModule = /** @class */ (function () {
    function AllPipesModule() {
    }
    AllPipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [GetImgPathPipe, HasErrorsPipe, GetErrorPipe],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [GetImgPathPipe,
                        HasErrorsPipe,
                        GetErrorPipe,
                    ]
                },] }
    ];
    return AllPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: pipes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AllPipesModule, PipesComponent, PipesModule, PipesService, GetImgPathPipe as ɵa, HasErrorsPipe as ɵb, GetErrorPipe as ɵc };
//# sourceMappingURL=pipes.js.map
