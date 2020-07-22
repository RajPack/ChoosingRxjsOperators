import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreFetchDataGuard implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot) {
  }
  
}
