/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-error.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
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
export { GetErrorPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVycm9yLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtZXJyb3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBQUE7SUFzQkEsQ0FBQzs7Ozs7SUFuQkMsZ0NBQVM7Ozs7SUFBVCxVQUFVLE1BQXdCO1FBQ2hDLElBQUcsQ0FBQyxNQUFNLEVBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUNHLGVBQWUsR0FBRyxFQUFFO1FBQ3hCLHlDQUF5QztRQUN6QyxtQkFBbUI7UUFDbkIsd0VBQXdFO1FBQ3hFLGtCQUFrQjtRQUNsQiwrRkFBK0Y7UUFDL0Ysa0JBQWtCO1FBQ2xCLG1GQUFtRjtRQUNuRixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU87UUFDUCxPQUFPLGVBQWUsQ0FBRTtJQUMxQixDQUFDOztnQkFuQkYsSUFBSSxTQUFDLEVBQUcsSUFBSSxFQUFFLFVBQVUsRUFBQzs7SUFzQjFCLG1CQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBQaXBlKHsgIG5hbWU6ICdnZXRFcnJvcid9KVxyXG5leHBvcnQgY2xhc3MgR2V0RXJyb3JQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMpOiAgc3RyaW5nW10ge1xyXG4gICAgaWYoIWVycm9ycyl7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGxldCBlcnJvcnNUb0Rpc3BsYXkgPSBbXTtcclxuICAgIC8vIE9iamVjdC5rZXlzKGVycm9ycykuZm9yRWFjaChlcnJvciA9PiB7XHJcbiAgICAvLyAgIHN3aXRjaChlcnJvcil7XHJcbiAgICAvLyAgICAgY2FzZSdyZXF1aXJlZCc6IGVycm9yc1RvRGlzcGxheT0gWy4uLmVycm9yc1RvRGlzcGxheSwgJ9ep15PXlCDXl9eV15HXlCddXHJcbiAgICAvLyAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICBjYXNlJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiBlcnJvcnNUb0Rpc3BsYXk9IFsuLi5lcnJvcnNUb0Rpc3BsYXksICfXm9eq15XXkdeqINeQ157XmdeZ15wg15zXkCDXoNeb15XXoNeUJ11cclxuICAgIC8vICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIGNhc2UnbWF4bGVuZ3RoJzogZXJyb3JzVG9EaXNwbGF5PSBbLi4uZXJyb3JzVG9EaXNwbGF5LCAn157Xodek16gg16rXldeV15nXnSDXnNeQINeq16fXmdefJ11cclxuICAgIC8vICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTsgXHJcbiAgICByZXR1cm4gZXJyb3JzVG9EaXNwbGF5IDtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=