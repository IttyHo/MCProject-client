/**
 * @fileoverview added by tsickle
 * Generated from: lib/find-location.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, ViewChild } from '@angular/core';
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
        { type: Directive, args: [{ selector: '[libFindLocation]' },] }
    ];
    FindLocationDirective.propDecorators = {
        block: [{ type: ViewChild, args: ["block", { static: false },] }]
    };
    return FindLocationDirective;
}());
export { FindLocationDirective };
if (false) {
    /** @type {?} */
    FindLocationDirective.prototype.x;
    /** @type {?} */
    FindLocationDirective.prototype.block;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1sb2NhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kaXJlY3RpdmVzLyIsInNvdXJjZXMiOlsibGliL2ZpbmQtbG9jYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUFnQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR2pHO0lBQUE7SUFnQkMsQ0FBQzs7OztJQVZDLGtEQUFrQjs7O0lBQWxCOztZQUNNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTtRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFUSCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7Ozt3QkFHdEMsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBYXZDLDRCQUFDO0NBQUEsQUFoQkYsSUFnQkU7U0FmVyxxQkFBcUI7OztJQUMvQixrQ0FBTTs7SUFDTixzQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdDaGVja2VkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBTZWxlY3RlZE5ldmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9tYWluL3NlcnZpY2VzL3NlbGVjdGVkLW5ldmlnYXRpb24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2xpYkZpbmRMb2NhdGlvbl0nfSlcbmV4cG9ydCBjbGFzcyBGaW5kTG9jYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHsgXG4gICB4OmFueTtcbiAgIEBWaWV3Q2hpbGQoXCJibG9ja1wiLCB7IHN0YXRpYzogZmFsc2UgfSkgYmxvY2s6IEVsZW1lbnRSZWY7XG5cbiBcbiAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgbGV0IGRhdGFzID0gdGhpcy5ibG9jay5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICBjb25zb2xlLmxvZyhcImRhdGFzID0gXCIsIGRhdGFzKTtcbiAgIH1cbiAgLy8gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZikgeyBcbiAgLy8gICAgICAgY29uc3Qge3gsIHl9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAvLyAgICAgICAgICBjb25zb2xlLmxvZyh4KycgICAgICB4Jyk7XG4gIC8vICAgICAgICAgIGNvbnNvbGUubG9nKHkrJyAgICAgIHknKTsgIFxuXG4gIC8vICAgICAgICAgICAgfVxuIH1cblxuXG4iXX0=