import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanGoToAdminPanelGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private route: Router, private firestore: AngularFirestore) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {

    try {

      return this.auth.authState.pipe(switchMap(async user => {
        console.log(user)
        if (!user) {
          this.route.navigate(['admin-login']);
          return false;
        }

        const dataArray = [];
        const snapshots = await this.firestore.collection('admins').get().toPromise();
        snapshots.forEach((doc) => {
          dataArray.push(doc.data());
        });

        const foundAdmin = dataArray.find(admin => admin.uid === user.uid);

        if (!foundAdmin) {
          this.route.navigate(['admin-login']);
          return false;
        } else {
          return true;
        }
      }))
      // const user = await this.auth.currentUser;
    } catch (error) {
      console.log(error);
      this.route.navigate(['admin-login']);
      return false;
    }
  }
}
