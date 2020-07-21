import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  db: any = {};

  constructor() { }

  Get(key, params) {
    return this._evaluateResponse(key, params);
  }
  Put(key, params) {
    return this._evaluateResponse(key, params);
  }
  Post(key, params) {
    return this._evaluateResponse(key, params);
  }

  setResponse (obj) {
    Object.keys(obj).forEach(k => this.db[k]= obj[k]);
  }

  _evaluateResponse(key, params) {
    const resp$ = new Observable((obs) => {
      let val = this.db[key];
      if(val instanceof Function) {
        val = val(params);
      }
      obs.next(val);
      obs.complete();
    });
    return resp$;
  }
}
