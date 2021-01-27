import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanReddirectIfItIsLoggedAdminGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private route: Router, private firestore: AngularFirestore) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {

    try {
      return this.auth.authState.pipe(switchMap(async user => {

        if (!user) {
          return true;
        }

        const dataArray = [];
        const snapshots = await this.firestore.collection('admins').get().toPromise();

        snapshots.forEach((doc) => {
          dataArray.push(doc.data());
        });

        const foundAdmin = dataArray.find(admin => admin.uid === user.uid);

        if (!foundAdmin) {
          return true;
        } else {
          this.route.navigate(['admin-panel']);
          return false;
        }
      }))
    } catch (error) {
      console.log(error);
      return true;
    }
  }


}
