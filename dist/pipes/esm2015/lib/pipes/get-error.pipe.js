/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-error.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class GetErrorPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVycm9yLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtZXJyb3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSXBELE1BQU0sT0FBTyxZQUFZOzs7OztJQUV2QixTQUFTLENBQUMsTUFBd0I7UUFDaEMsSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNULE9BQU8sRUFBRSxDQUFDO1NBQ1g7O1lBQ0csZUFBZSxHQUFHLEVBQUU7UUFDeEIseUNBQXlDO1FBQ3pDLG1CQUFtQjtRQUNuQix3RUFBd0U7UUFDeEUsa0JBQWtCO1FBQ2xCLCtGQUErRjtRQUMvRixrQkFBa0I7UUFDbEIsbUZBQW1GO1FBQ25GLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLE9BQU8sZUFBZSxDQUFFO0lBQzFCLENBQUM7OztZQW5CRixJQUFJLFNBQUMsRUFBRyxJQUFJLEVBQUUsVUFBVSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQFBpcGUoeyAgbmFtZTogJ2dldEVycm9yJ30pXHJcbmV4cG9ydCBjbGFzcyBHZXRFcnJvclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyk6ICBzdHJpbmdbXSB7XHJcbiAgICBpZighZXJyb3JzKXtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgbGV0IGVycm9yc1RvRGlzcGxheSA9IFtdO1xyXG4gICAgLy8gT2JqZWN0LmtleXMoZXJyb3JzKS5mb3JFYWNoKGVycm9yID0+IHtcclxuICAgIC8vICAgc3dpdGNoKGVycm9yKXtcclxuICAgIC8vICAgICBjYXNlJ3JlcXVpcmVkJzogZXJyb3JzVG9EaXNwbGF5PSBbLi4uZXJyb3JzVG9EaXNwbGF5LCAn16nXk9eUINeX15XXkdeUJ11cclxuICAgIC8vICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIGNhc2UnaW52YWxpZEVtYWlsQWRkcmVzcyc6IGVycm9yc1RvRGlzcGxheT0gWy4uLmVycm9yc1RvRGlzcGxheSwgJ9eb16rXldeR16og15DXnteZ15nXnCDXnNeQINeg15vXldeg15QnXVxyXG4gICAgLy8gICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgY2FzZSdtYXhsZW5ndGgnOiBlcnJvcnNUb0Rpc3BsYXk9IFsuLi5lcnJvcnNUb0Rpc3BsYXksICfXnteh16TXqCDXqteV15XXmdedINec15Ag16rXp9eZ158nXVxyXG4gICAgLy8gICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pOyBcclxuICAgIHJldHVybiBlcnJvcnNUb0Rpc3BsYXkgO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==