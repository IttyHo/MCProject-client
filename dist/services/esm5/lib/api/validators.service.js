/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/validators.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ValidatorsService.ctorParameters = function () { return []; };
    /** @nocollapse */ ValidatorsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidatorsService_Factory() { return new ValidatorsService(); }, token: ValidatorsService, providedIn: "root" });
    return ValidatorsService;
}());
export { ValidatorsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL3ZhbGlkYXRvcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBS0U7SUFBZ0IsQ0FBQzs7Ozs7SUFDakIsMENBQWM7Ozs7SUFBZCxVQUFlLE9BQU87UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ3RCLElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLEVBQUUsRUFBQztnQkFDakQsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztvQkFDOUMsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFDSTtnQkFDSCxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ2pDO1NBQ0Y7SUFDRCxDQUFDOzs7OztJQUNELDBDQUFjOzs7O0lBQWQsVUFBZSxPQUFPO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxFQUFFLEVBQUM7Z0JBQ2pELElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7b0JBQzlDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQ0k7Z0JBQ0gsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFDQywwQ0FBYzs7OztJQUFkLFVBQWUsT0FBTztRQUNwQixJQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNqQixzRUFBc0UsQ0FBQyxFQUN6RTtZQUNBLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7O2dCQXZDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs0QkFKRDtDQTRDQyxBQTFDRCxJQTBDQztTQXZDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JzU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgdGV4dFZhbGlkYXRvcnMoY29udHJvbCl7XHJcbiAgICBjb25zb2xlLmxvZyhjb250cm9sKTtcclxuICAgIGlmKGNvbnRyb2wudmFsdWUubGVuZ3RoKXtcclxuICAgICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGg+NyYmY29udHJvbC52YWx1ZS5sZW5ndGg8MTMpe1xyXG4gICAgICAgIGlmKGNvbnRyb2wudmFsdWUubWF0Y2goL15bMC05XSsoXFwuP1swLTldKyk/JC8pKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyBpbnZhbGlkUGhvbmU6IHRydWUgfTtcclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG4gIHBob25lVmFsaWRhdG9yKGNvbnRyb2wpe1xyXG4gIGNvbnNvbGUubG9nKGNvbnRyb2wpOyAgICBcclxuICAgIGlmKGNvbnRyb2wudmFsdWUubGVuZ3RoKXtcclxuICAgICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGg+NyYmY29udHJvbC52YWx1ZS5sZW5ndGg8MTMpe1xyXG4gICAgICAgIGlmKGNvbnRyb2wudmFsdWUubWF0Y2goL15b15At16pdKyhcXC4/W9eQLdeqXSspPyQvKSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaW52YWxpZFBob25lOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiAgZW1haWxWYWxpZGF0b3IoY29udHJvbCkge1xyXG4gICAgaWYgKFxyXG4gICAgICBjb250cm9sLnZhbHVlLm1hdGNoKFxyXG4gICAgICAgIC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8pXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBpbnZhbGlkRW1haWxBZGRyZXNzOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19