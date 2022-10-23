/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/has-errors.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class HasErrorsPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLWVycm9ycy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaGFzLWVycm9ycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJcEQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUV4QixTQUFTLENBQUMsU0FBb0IsRUFBRSxXQUFrQjtRQUNoRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFFO0lBQ3ZFLENBQUM7OztZQUxGLElBQUksU0FBQyxFQUFHLElBQUksRUFBRSxXQUFXLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBQaXBlKHsgIG5hbWU6ICdoYXNFcnJvcnMnfSlcclxuZXhwb3J0IGNsYXNzIEhhc0Vycm9yc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sTmFtZTpzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lcnJvcnMpLmxlbmd0aCA7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=