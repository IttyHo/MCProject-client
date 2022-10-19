import { Injectable, ɵɵdefineInjectable, Component, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetOptionsService } from 'services';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipesService {
    constructor() { }
}
PipesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PipesService.ctorParameters = () => [];
/** @nocollapse */ PipesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PipesService_Factory() { return new PipesService(); }, token: PipesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PipesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pipes',
                template: `
    <p>
      pipes works!
    </p>
  `
            }] }
];
/** @nocollapse */
PipesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipesModule {
}
PipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PipesComponent],
                imports: [],
                exports: [PipesComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-img-path.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetImgPathPipe {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    transform(img) {
        // console.log(img+"      img");    
        return this.service.getOptionByImage(img);
    }
}
GetImgPathPipe.decorators = [
    { type: Pipe, args: [{ name: 'getImgPath' },] }
];
/** @nocollapse */
GetImgPathPipe.ctorParameters = () => [
    { type: GetOptionsService }
];
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
class HasErrorsPipe {
    /**
     * @param {?} formGroup
     * @param {?} controlName
     * @return {?}
     */
    transform(formGroup, controlName) {
        return !!Object.keys(formGroup.controls[controlName].errors).length;
    }
}
HasErrorsPipe.decorators = [
    { type: Pipe, args: [{ name: 'hasErrors' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-error.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetErrorPipe {
    /**
     * @param {?} errors
     * @return {?}
     */
    transform(errors) {
        if (!errors) {
            return [];
        }
        /** @type {?} */
        let errorsToDisplay = [];
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
    }
}
GetErrorPipe.decorators = [
    { type: Pipe, args: [{ name: 'getError' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/all-pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AllPipesModule {
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
