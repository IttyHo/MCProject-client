(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('services'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('pipes', ['exports', '@angular/core', '@angular/common', 'services', '@angular/forms'], factory) :
    (global = global || self, factory(global.pipes = {}, global.ng.core, global.ng.common, global.services, global.ng.forms));
}(this, (function (exports, core, common, services, forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pipes.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PipesService = /** @class */ (function () {
        function PipesService() {
        }
        PipesService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PipesService.ctorParameters = function () { return []; };
        /** @nocollapse */ PipesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PipesService_Factory() { return new PipesService(); }, token: PipesService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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
            { type: core.Pipe, args: [{ name: 'getImgPath' },] }
        ];
        /** @nocollapse */
        GetImgPathPipe.ctorParameters = function () { return [
            { type: services.GetOptionsService }
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
            { type: core.Pipe, args: [{ name: 'hasErrors' },] }
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
            { type: core.Pipe, args: [{ name: 'getError' },] }
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
            { type: core.NgModule, args: [{
                        declarations: [GetImgPathPipe, HasErrorsPipe, GetErrorPipe],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        exports: [GetImgPathPipe,
                            HasErrorsPipe,
                            GetErrorPipe,
                        ]
                    },] }
        ];
        return AllPipesModule;
    }());

    exports.AllPipesModule = AllPipesModule;
    exports.PipesComponent = PipesComponent;
    exports.PipesModule = PipesModule;
    exports.PipesService = PipesService;
    exports.ɵa = GetImgPathPipe;
    exports.ɵb = HasErrorsPipe;
    exports.ɵc = GetErrorPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pipes.umd.js.map
