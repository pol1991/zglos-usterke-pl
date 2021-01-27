import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanReddirectIfItIsLoggedUserGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private route: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {

    try {

      return this.auth.authState.pipe(switchMap(async user => {
        console.log(user)
        if (user && user.emailVerified) {
          this.route.navigate(['dodaj']);
          return false;
        } else {
          return true;
        }
      }));
    } catch (error) {
      console.log(error);
      this.route.navigate(['admin-login']);
      return false;
    }

  }
}
