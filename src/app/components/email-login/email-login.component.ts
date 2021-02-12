import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounce, fadeIn, fadeOutUp, flip, rotateIn, pulse, fadeInLeft} from 'ng-animate';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'logowanie-email',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('rotateIn', [transition('* => *', useAnimation(rotateIn))]),
    trigger('fadeInLeft', [
      transition('* => *', useAnimation(fadeInLeft, {
        params: {
          timing: 0.3
        }
      }))])
  ]
})
export class EmailLoginComponent implements OnInit {
  flip: any;
  rotateIn: any;
  fadeIn: any;
  fadeInLeft: any;
  errorMessage: string | null = null;
  form: FormGroup;

  constructor(private auth: AngularFireAuth, private route: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit = (event) => {
    event.preventDefault();
    if (this.form.valid) {
      const {
        email,
        password: { password: password },
      } = this.form.value;
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.route.navigate(['dodaj']);
        })
        .catch((error) => this.errorMessage = 'Nie pamietasz hasła? Zresetuj je! ');
    } else {
      this.errorMessage = 'Nie pamietasz hasła? Zresetuj je!';
    }
  }

  reserPassword = () => {
    this.route.navigate(['resetowanie-hasla']);
  }

  goToNewRegistrationPage = () => {
    this.route.navigate(['rejestracja-email']);
  }

  goBack = () => {
    this.route.navigate(['wybor']);
  }
}
