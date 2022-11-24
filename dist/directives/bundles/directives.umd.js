(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('directives', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global.directives = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DirectivesService = /** @class */ (function () {
        function DirectivesService() {
        }
        DirectivesService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DirectivesService.ctorParameters = function () { return []; };
        /** @nocollapse */ DirectivesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DirectivesService_Factory() { return new DirectivesService(); }, token: DirectivesService, providedIn: "root" });
        return DirectivesService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DirectivesComponent = /** @class */ (function () {
        function DirectivesComponent() {
        }
        /**
         * @return {?}
         */
        DirectivesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        DirectivesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-directives',
                        template: "\n    <p>\n      directives works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        DirectivesComponent.ctorParameters = function () { return []; };
        return DirectivesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/copy.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CopyDirective = /** @class */ (function () {
        function CopyDirective(el) {
            this.el = el;
        }
        Object.defineProperty(CopyDirective.prototype, "copy", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CopyDirective.prototype.click = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var input = document.createElement('input');
            input.value = this._value || ((/** @type {?} */ (this.el.nativeElement))).innerText;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            input.remove();
        };
        CopyDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[libCopy]' },] }
        ];
        /** @nocollapse */
        CopyDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        CopyDirective.propDecorators = {
            copy: [{ type: core.Input, args: ['copy',] }],
            click: [{ type: core.HostListener, args: ['click',] }]
        };
        return CopyDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CopyDirective.prototype._value;
        /**
         * @type {?}
         * @private
         */
        CopyDirective.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/find-location.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { SelectedNevigationService } from 'src/app/main/services/selected-nevigation.service';
    var FindLocationDirective = /** @class */ (function () {
        function FindLocationDirective() {
        }
        /**
         * @return {?}
         */
        FindLocationDirective.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var datas = this.block.nativeElement.getBoundingClientRect();
            console.log("datas = ", datas);
        };
        FindLocationDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[libFindLocation]' },] }
        ];
        FindLocationDirective.propDecorators = {
            block: [{ type: core.ViewChild, args: ["block", { static: false },] }]
        };
        return FindLocationDirective;
    }());
    if (false) {
        /** @type {?} */
        FindLocationDirective.prototype.x;
        /** @type {?} */
        FindLocationDirective.prototype.block;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        DirectivesModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DirectivesComponent, CopyDirective, FindLocationDirective],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [DirectivesComponent,
                            CopyDirective,
                            FindLocationDirective]
                    },] }
        ];
        return DirectivesModule;
    }());

    exports.DirectivesComponent = DirectivesComponent;
    exports.DirectivesModule = DirectivesModule;
    exports.DirectivesService = DirectivesService;
    exports.ɵa = CopyDirective;
    exports.ɵb = FindLocationDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=directives.umd.js.map
