import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  _logs$ = new Subject<{text: any; level: string}>();
  logs$ = this._logs$.asObservable();

  _clearSignal$ = new Subject<any>();
  clearSignal$ = this._clearSignal$.asObservable();

  constructor() { }

  log(message, logLevel) {
    this._logs$.next({text: message, level: logLevel});
  }

  clear() {
    this._clearSignal$.next('clear');
  }
}
