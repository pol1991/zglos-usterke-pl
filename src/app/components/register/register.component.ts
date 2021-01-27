import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounce, fadeIn, fadeOutUp, flip, rotateIn, pulse, fadeInLeft } from 'ng-animate';

@Component({
  selector: 'zarejestruj',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
export class RegisterComponent implements OnInit {

  flip: any;
  rotateIn: any;
  fadeIn: any;
  fadeInLeft: any;

  form: FormGroup;

  constructor(private auth: AngularFireAuth, private route: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormGroup({
        password1: new FormControl('', [Validators.required, Validators.minLength(6)]),
        password2: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.form.valid) {
      const { email, password: { password1: password } } = this.form.value;
      this.auth.createUserWithEmailAndPassword(email, password)
        .then(
          user => this.auth.currentUser
        )
        .then(
          user => user.sendEmailVerification()
        )
        .then(
          () => { this.route.navigate(['redirect']); }
        )
        .catch(error => console.log('Wystapił bład'));
    }
  }

  goBack = () => {
    this.route.navigate(['emaillogin']);
  }
}
