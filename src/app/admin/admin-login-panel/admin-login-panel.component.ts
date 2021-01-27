import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-admin-login-panel',
  templateUrl: './admin-login-panel.component.html',
  styleUrls: ['./admin-login-panel.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {
        timing: 0.5
      }

    }))]),
  ]
})
export class AdminLoginPanelComponent implements OnInit {

  fadeIn: any;

  errorMessage: string | null = null;
  form: FormGroup;

  constructor(private auth: AngularFireAuth, private route: Router, private firestore: AngularFirestore) {
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

  ngOnInit(): void {
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.form.valid) {
      const {
        email,
        password: { password: password },
      } = this.form.value;
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          const dataArray = [];
          this.firestore.collection('admins').get().subscribe(snapshot => {
            snapshot.forEach((doc) => {
              dataArray.push(doc.data());
            });
            const foundAdmin = dataArray.find(admin => {
              console.log(admin.uid, user.user.uid);
              return admin.uid === user.user.uid;
            });
            if (foundAdmin) {
              this.route.navigate(['admin-panel']);
            } else {
              this.errorMessage = 'Błedny login lub hasło';
            }
          });
        })
        .catch((error) => alert('Wystapił błąd'));
    } else {
      this.errorMessage = 'Błedny login lub hasło';
    }
  }

}
