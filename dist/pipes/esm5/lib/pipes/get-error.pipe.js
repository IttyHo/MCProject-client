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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVycm9yLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtZXJyb3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBQUE7SUFzQkEsQ0FBQzs7Ozs7SUFuQkMsZ0NBQVM7Ozs7SUFBVCxVQUFVLE1BQXdCO1FBQ2hDLElBQUcsQ0FBQyxNQUFNLEVBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUNHLGVBQWUsR0FBRyxFQUFFO1FBQ3hCLHlDQUF5QztRQUN6QyxtQkFBbUI7UUFDbkIsd0VBQXdFO1FBQ3hFLGtCQUFrQjtRQUNsQiwrRkFBK0Y7UUFDL0Ysa0JBQWtCO1FBQ2xCLG1GQUFtRjtRQUNuRixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU87UUFDUCxPQUFPLGVBQWUsQ0FBRTtJQUMxQixDQUFDOztnQkFuQkYsSUFBSSxTQUFDLEVBQUcsSUFBSSxFQUFFLFVBQVUsRUFBQzs7SUFzQjFCLG1CQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBQaXBlKHsgIG5hbWU6ICdnZXRFcnJvcid9KVxuZXhwb3J0IGNsYXNzIEdldEVycm9yUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMpOiAgc3RyaW5nW10ge1xuICAgIGlmKCFlcnJvcnMpe1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBsZXQgZXJyb3JzVG9EaXNwbGF5ID0gW107XG4gICAgLy8gT2JqZWN0LmtleXMoZXJyb3JzKS5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAvLyAgIHN3aXRjaChlcnJvcil7XG4gICAgLy8gICAgIGNhc2UncmVxdWlyZWQnOiBlcnJvcnNUb0Rpc3BsYXk9IFsuLi5lcnJvcnNUb0Rpc3BsYXksICfXqdeT15Qg15fXldeR15QnXVxuICAgIC8vICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiBlcnJvcnNUb0Rpc3BsYXk9IFsuLi5lcnJvcnNUb0Rpc3BsYXksICfXm9eq15XXkdeqINeQ157XmdeZ15wg15zXkCDXoNeb15XXoNeUJ11cbiAgICAvLyAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgY2FzZSdtYXhsZW5ndGgnOiBlcnJvcnNUb0Rpc3BsYXk9IFsuLi5lcnJvcnNUb0Rpc3BsYXksICfXnteh16TXqCDXqteV15XXmdedINec15Ag16rXp9eZ158nXVxuICAgIC8vICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgfVxuICAgIC8vIH0pOyBcbiAgICByZXR1cm4gZXJyb3JzVG9EaXNwbGF5IDtcbiAgfVxuXG5cbn1cbiJdfQ==