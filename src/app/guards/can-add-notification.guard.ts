import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAddNotificationGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private route: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    try {

      return this.auth.authState.pipe(switchMap(async user => {
        if (user && user.emailVerified) {
          return true;
          console.log('Wciąż zalogowany');
        } else if (user) {
          this.route.navigate(['verify']);
          return false;
        } else {
          this.route.navigate(['logowanie']);
          return false;
        }
      }))
    } catch (error) {
      console.log(error);
      this.route.navigate(['logowanie']);
      return false;
    }
  }

}
