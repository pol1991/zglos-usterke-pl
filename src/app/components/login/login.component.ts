import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounce, fadeIn, fadeOut, flip, rotateIn, pulse } from 'ng-animate';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'opcje-logowania',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('rotateIn', [transition('* => *', useAnimation(rotateIn, {
      params:
      {
        timing: 0.3
      }
    }))]),
    trigger('fadeOut', [
      state('start', style({ opacity: 1 })),
      state('end', style({})), transition('start => end', useAnimation(fadeOut))])
  ]
})
export class LoginComponent implements OnInit {

  flip: any;
  rotateIn: any;
  fadeIn: any;
  fadeOut = 'start';

  constructor(private firebaseAuth: AngularFireAuth, private route: Router) {
  }

  ngOnInit(): void {
  }

  FacebokAuth = () => {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  GoogleAuth = () => {
    console.log('działa?');
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin = (provider) => {
    return this.firebaseAuth.signInWithPopup(provider).then(result => {
      this.fadeOut = 'end';
      this.route.navigate(['dodaj']);
    }).catch(() => {
      console.log('nie udane');
    });
  }

  goToNewRegisterPage = () => {
    this.fadeOut = 'end';
    setTimeout(() => {
      this.route.navigate(['emaillogin']);
    }, 300);
  }

  goBack = () => {
    this.route.navigate(['wybor']);
  }

}
