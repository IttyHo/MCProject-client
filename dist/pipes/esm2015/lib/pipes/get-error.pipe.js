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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVycm9yLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtZXJyb3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSXBELE1BQU0sT0FBTyxZQUFZOzs7OztJQUV2QixTQUFTLENBQUMsTUFBd0I7UUFDaEMsSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNULE9BQU8sRUFBRSxDQUFDO1NBQ1g7O1lBQ0csZUFBZSxHQUFHLEVBQUU7UUFDeEIseUNBQXlDO1FBQ3pDLG1CQUFtQjtRQUNuQix3RUFBd0U7UUFDeEUsa0JBQWtCO1FBQ2xCLCtGQUErRjtRQUMvRixrQkFBa0I7UUFDbEIsbUZBQW1GO1FBQ25GLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLE9BQU8sZUFBZSxDQUFFO0lBQzFCLENBQUM7OztZQW5CRixJQUFJLFNBQUMsRUFBRyxJQUFJLEVBQUUsVUFBVSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQFBpcGUoeyAgbmFtZTogJ2dldEVycm9yJ30pXG5leHBvcnQgY2xhc3MgR2V0RXJyb3JQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyk6ICBzdHJpbmdbXSB7XG4gICAgaWYoIWVycm9ycyl7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGxldCBlcnJvcnNUb0Rpc3BsYXkgPSBbXTtcbiAgICAvLyBPYmplY3Qua2V5cyhlcnJvcnMpLmZvckVhY2goZXJyb3IgPT4ge1xuICAgIC8vICAgc3dpdGNoKGVycm9yKXtcbiAgICAvLyAgICAgY2FzZSdyZXF1aXJlZCc6IGVycm9yc1RvRGlzcGxheT0gWy4uLmVycm9yc1RvRGlzcGxheSwgJ9ep15PXlCDXl9eV15HXlCddXG4gICAgLy8gICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGNhc2UnaW52YWxpZEVtYWlsQWRkcmVzcyc6IGVycm9yc1RvRGlzcGxheT0gWy4uLmVycm9yc1RvRGlzcGxheSwgJ9eb16rXldeR16og15DXnteZ15nXnCDXnNeQINeg15vXldeg15QnXVxuICAgIC8vICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICBjYXNlJ21heGxlbmd0aCc6IGVycm9yc1RvRGlzcGxheT0gWy4uLmVycm9yc1RvRGlzcGxheSwgJ9ee16HXpNeoINeq15XXldeZ150g15zXkCDXqten15nXnyddXG4gICAgLy8gICAgICAgICAgYnJlYWs7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7IFxuICAgIHJldHVybiBlcnJvcnNUb0Rpc3BsYXkgO1xuICB9XG5cblxufVxuIl19