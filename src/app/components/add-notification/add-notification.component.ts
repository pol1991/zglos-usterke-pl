import { v4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation, style } from '@angular/animations';
import { bounce, fadeIn, fadeOutUp, flip, rotateIn, pulse } from 'ng-animate';




@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('rotateIn', [transition('* => *', useAnimation(rotateIn, {
      params:
      {
        timing: 1
      }
    }))])
  ]
})
export class AddNotificationComponent implements OnInit {
  flip: any;
  rotateIn: any;
  fadeIn: any;
  form: FormGroup;
  fileToUpload: File = null;
  errorMessage: string = null;
  user: firebase.User;
  lat;
  lon;
  photoMode = false;
  captures: Array<any> = [];
  stream: MediaStream;
  categories: string[] = [];

  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;

  // tslint:disable-next-line: max-line-length
  constructor(private firestore: AngularFirestore, private firestage: AngularFireStorage, private auth: AngularFireAuth, private route: Router) {

    this.auth.currentUser.then(user => {
      this.user = user;
    });

    this.firestore
      .collection('config')
      .get()
      .subscribe((snapshot) => {
        const categories = snapshot.docs.find(doc => doc.id === 'categories');
        const data = categories.data();
        this.categories = data.categories;
      });

    this.form = new FormGroup({
      personal: new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]),
        surname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(24)])
      }),
      location: new FormControl(''),
      photos: new FormControl(''),
      category: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(450)])
    });


  }
  hasUnsavedData(): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getLocation();
  }

  makePhoto = async (event) => {
    event.preventDefault();
    this.photoMode = true;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.stream = stream;
        const mediaStream = new MediaStream(stream);
        this.video.nativeElement.srcObject = mediaStream;
        this.video.nativeElement.play();
      });
    }
  }

  close = () => {
    this.photoMode = false;
    this.stream.getTracks().forEach(track => { track.stop(); });
  }

  capture = () => {
    const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
    console.log(this.captures);
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geo Location not supported by browser');
    }
  }
  // function that retrieves the position
  showPosition = (position) => {
    const location = {
      lon: position.coords.longitude,
      lat: position.coords.latitude
    };
    this.form.controls.location.setValue(`${location.lat}, ${location.lon} `);
    this.lat = location.lat;
    this.lon = location.lon;
  }

  // tslint:disable-next-line: typedef
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }

  onSubmit = async (event) => {
    if (this.form.valid) {

      const uuis = [];

      if (this.fileToUpload) {
        const uui = v4();
        uuis.push(uui);
        this.firestage.upload(uui, this.fileToUpload, {
          customMetadata: {
            uid: this.user.uid
          }
        });
      } else {
        for (const capture of this.captures) {
          try {
            const takedPhoto = await fetch(capture);
            const blob = await takedPhoto.blob();
            const uui = v4();
            uuis.push(uui);
            this.firestage.upload(uui, blob, {
              customMetadata: {
                uid: this.user.uid
              }
            });
          } catch (error) {
            console.log(error);
          }
        }
      }

      this.firestore.collection('raports').add({
        uid: this.user.uid,
        email: this.user.email,
        name: this.form.value.personal.name,
        surname: this.form.value.personal.surname,
        description: this.form.value.description,
        category: this.form.value.category,
        location: this.form.value.location,
        photos: uuis
      });

      this.route.navigate(['potwierdzenie']);

    } else {
      console.log('nie zwalidowane');
      this.errorMessage = 'Nie wypełniłeś poprawnie formularza, spróbuj jeszcze raz';
      this.route.navigate(['dodaj']);
      alert('Nie wypełniłeś poprawnie formularza, spróbuj jeszcze raz');
    }
  }

  goBack = () => {
    this.route.navigate(['wybor']);
  }


}



