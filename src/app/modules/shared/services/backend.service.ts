import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  db: any = {};
  delay = 500;

  constructor(private logger: LoggerService) {}

  Get(key, params) {
    return this._evaluateResponse(key, params);
  }
  Put(key, params) {
    return this._evaluateResponse(key, params);
  }
  Post(key, params) {
    return this._evaluateResponse(key, params);
  }

  setResponse(obj) {
    Object.keys(obj).forEach(k => (this.db[k] = obj[k]));
  }

  _evaluateResponse(key, params) {
    const resp$ = new Observable(obs => {
      setTimeout(() => {
        let val = this.db[key];
        if (val instanceof Function) {
          try {
            val = val(params);
          } catch (e) {
            obs.error(e);
          }
        }
        obs.next(val);
        obs.complete();
      }, this.delay);
    });
    return resp$;
  }
}
