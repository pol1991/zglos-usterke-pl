import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounce, fadeIn, fadeOutUp, flip, rotateIn, pulse, fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
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
export class ResetPasswordComponent implements OnInit {
  flip: any;
  rotateIn: any;
  fadeIn: any;
  fadeInLeft: any;
  timeOut: any;

  form: FormGroup;
  errorMessage: string | null = null;

  constructor(private auth: AngularFireAuth, private route: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void { }

  onSubmit = async (event: Event) => {
    event.preventDefault();
    if (this.form.valid) {
      try {
        await this.auth.sendPasswordResetEmail(this.form.value.email);
        this.route.navigate(['reset-hasla-podziekowanie']);
      } catch (error) {
        // errorMessage
        console.log(error);
      }
    } else {
      this.errorMessage = 'Nie mamy tego adresu w bazie.';
      setTimeout (() => {
         // alert("Hello from setTimeout");
         window.location.reload();
      }, 2000);
    }
  }

  goToLoginPage = () => {
    this.route.navigate(['emaillogin']);
  }
}
