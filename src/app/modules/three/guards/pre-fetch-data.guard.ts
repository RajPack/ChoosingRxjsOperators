import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, forkJoin, of, combineLatest } from 'rxjs';
import { DataService } from '../services/data.service';
import { switchMap, map, startWith, skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreFetchDataGuard implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
  }
}
