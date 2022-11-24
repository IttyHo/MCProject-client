/**
 * @fileoverview added by tsickle
 * Generated from: lib/find-location.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, ViewChild } from '@angular/core';
// import { SelectedNevigationService } from 'src/app/main/services/selected-nevigation.service';
export class FindLocationDirective {
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        let datas = this.block.nativeElement.getBoundingClientRect();
        console.log("datas = ", datas);
    }
}
FindLocationDirective.decorators = [
    { type: Directive, args: [{ selector: '[libFindLocation]' },] }
];
FindLocationDirective.propDecorators = {
    block: [{ type: ViewChild, args: ["block", { static: false },] }]
};
if (false) {
    /** @type {?} */
    FindLocationDirective.prototype.x;
    /** @type {?} */
    FindLocationDirective.prototype.block;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1sb2NhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kaXJlY3RpdmVzLyIsInNvdXJjZXMiOlsibGliL2ZpbmQtbG9jYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUFnQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSWpHLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFLL0Isa0JBQWtCOztZQUNaLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTtRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFUSCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7OztvQkFHdEMsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFEckMsa0NBQU07O0lBQ04sc0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3Q2hlY2tlZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgU2VsZWN0ZWROZXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvbWFpbi9zZXJ2aWNlcy9zZWxlY3RlZC1uZXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tsaWJGaW5kTG9jYXRpb25dJ30pXG5leHBvcnQgY2xhc3MgRmluZExvY2F0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7IFxuICAgeDphbnk7XG4gICBAVmlld0NoaWxkKFwiYmxvY2tcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGJsb2NrOiBFbGVtZW50UmVmO1xuXG4gXG4gICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgIGxldCBkYXRhcyA9IHRoaXMuYmxvY2submF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgY29uc29sZS5sb2coXCJkYXRhcyA9IFwiLCBkYXRhcyk7XG4gICB9XG4gIC8vICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYpIHsgXG4gIC8vICAgICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgLy8gICAgICAgICAgY29uc29sZS5sb2coeCsnICAgICAgeCcpO1xuICAvLyAgICAgICAgICBjb25zb2xlLmxvZyh5KycgICAgICB5Jyk7ICBcblxuICAvLyAgICAgICAgICAgIH1cbiB9XG5cblxuIl19