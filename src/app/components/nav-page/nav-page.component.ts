import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, flip, rotateIn, fadeInLeft} from 'ng-animate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.scss'],
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
export class NavPageComponent implements OnInit {

  flip: any;
  rotateIn: any;
  fadeIn: any;
  fadeInLeft: any;

  constructor(private route: Router) {}

  ngOnInit(): void {
  }

  goToNewNotificationPage = () => {
    this.route.navigate(['logowanie']);
  }

  goToManual = () => {
    this.route.navigate(['instrukcja']);
  }

  goToInfo = () => {
    this.route.navigate(['info']);
  }

}
