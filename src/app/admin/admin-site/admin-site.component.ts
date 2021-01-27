import { AddNotificationComponent } from './../../components/add-notification/add-notification.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, createStorageRef } from '@angular/fire/storage';
import { storage } from 'firebase';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounceIn, fadeIn, fadeOutUp, flip, rotateIn, pulse, fadeInLeft } from 'ng-animate';


@Component({
  selector: 'app-admin-site',
  templateUrl: './admin-site.component.html',
  styleUrls: ['./admin-site.component.scss'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn, {
      params: {
        opacity: 0.7
      }
    }))]),
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
export class AdminSiteComponent implements OnInit {

  flip: any;
  rotateIn: any;
  fadeIn: any;
  fadeInLeft: any;
  bounceIn: any;

  lat: number;
  lon: number;
  isMapVisible = false;
  currentLocation = '';
  photos: any[] = [];

  notifications = [];
  showManual = false;
  constructor(
    private firestore: AngularFirestore,
    private firestage: AngularFireStorage
  ) {
    this.getCurrentDataFromFirestore();
  }

  ngOnInit(): void { }
  setManual = () => {
    this.showManual = !this.showManual;
  }

  getCurrentDataFromFirestore = () => {
    const dataArray = [];
    this.firestore
      .collection('raports')
      .get()
      .forEach((snapshot) => {
        snapshot.forEach((doc) => {
          const { id } = doc;
          dataArray.push({ ...doc.data(), id });
        });
      });

    this.notifications = dataArray;
  }

  onConfirm = (id: string) => {
    this.firestore.collection('raports').doc(id).update({
      isConfirmed: true,
    });

    this.getCurrentDataFromFirestore();
  }

  onDelete = (id: string, pictures) => {
    const firstPic = pictures[0];
    const pic = this.firestage.storage.ref(firstPic);
    const func = (cos: Observable<any>) => {
      cos.subscribe((data) => {
        console.log(data);
      });
      return cos;
    };
    createStorageRef(pic, this.firestage.schedulers, func).delete();

    this.firestore.collection('raports').doc(id).delete();

    this.isMapVisible = false;
    this.photos = [];
    this.currentLocation = '';
    this.getCurrentDataFromFirestore();
  }

  getData = (pictures, location: string) => {

    this.currentLocation = location;
    const locData = location.split(',');

    if (!locData[1]) {
      this.isMapVisible = false;
    } else {
      this.isMapVisible = true;
      this.lat = Number(locData[0].trim());
      this.lon = Number(locData[1].trim());
    }

    const func = (cos: Observable<any>) => {
      cos.subscribe((data) => {
        console.log(data);
      });
      return cos;
    };

    this.photos = [];

    pictures.forEach(picName => {
      const pic = this.firestage.storage.ref(picName);
      createStorageRef(pic, this.firestage.schedulers, func)
        .getDownloadURL()
        .toPromise()
        .then((url) => {
          this.photos.push(url);
        });
    });
  }

}
