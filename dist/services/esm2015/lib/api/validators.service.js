/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/validators.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ValidatorsService {
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
/** @nocollapse */ ValidatorsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidatorsService_Factory() { return new ValidatorsService(); }, token: ValidatorsService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL3ZhbGlkYXRvcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsZ0JBQWdCLENBQUM7Ozs7O0lBQ2pCLGNBQWMsQ0FBQyxPQUFPO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxFQUFFLEVBQUM7Z0JBQ2pELElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7b0JBQzlDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQ0k7Z0JBQ0gsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNqQztTQUNGO0lBQ0QsQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsT0FBTztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUM7WUFDdEIsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsRUFBRSxFQUFDO2dCQUNqRCxJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO29CQUM5QyxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUNJO2dCQUNILE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7Ozs7O0lBQ0MsY0FBYyxDQUFDLE9BQU87UUFDcEIsSUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDakIsc0VBQXNFLENBQUMsRUFDekU7WUFDQSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yc1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIHRleHRWYWxpZGF0b3JzKGNvbnRyb2wpe1xyXG4gICAgY29uc29sZS5sb2coY29udHJvbCk7XHJcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCl7XHJcbiAgICAgIGlmKGNvbnRyb2wudmFsdWUubGVuZ3RoPjcmJmNvbnRyb2wudmFsdWUubGVuZ3RoPDEzKXtcclxuICAgICAgICBpZihjb250cm9sLnZhbHVlLm1hdGNoKC9eWzAtOV0rKFxcLj9bMC05XSspPyQvKSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaW52YWxpZFBob25lOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIH1cclxuICBwaG9uZVZhbGlkYXRvcihjb250cm9sKXtcclxuICBjb25zb2xlLmxvZyhjb250cm9sKTsgICAgXHJcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCl7XHJcbiAgICAgIGlmKGNvbnRyb2wudmFsdWUubGVuZ3RoPjcmJmNvbnRyb2wudmFsdWUubGVuZ3RoPDEzKXtcclxuICAgICAgICBpZihjb250cm9sLnZhbHVlLm1hdGNoKC9eW9eQLdeqXSsoXFwuP1vXkC3Xql0rKT8kLykpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IGludmFsaWRQaG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4gIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2wpIHtcclxuICAgIGlmIChcclxuICAgICAgY29udHJvbC52YWx1ZS5tYXRjaChcclxuICAgICAgICAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHsgaW52YWxpZEVtYWlsQWRkcmVzczogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==