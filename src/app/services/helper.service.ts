import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HelperService {

    createParams(paramsOptions): HttpParams {
        let params = new HttpParams();

        Object.keys(paramsOptions).forEach((key) => {
            if (paramsOptions[key] instanceof Date) {
                params = params.append(key, paramsOptions[key].toISOString());
            } else if (paramsOptions[key]) {
                params = params.append(key, paramsOptions[key]);
            }
        });

        return params;
    }
}
