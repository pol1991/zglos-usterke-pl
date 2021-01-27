import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounceIn, fadeIn, fadeOutUp, flip, rotateIn, pulse, fadeInLeft} from 'ng-animate';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.scss'],
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
export class AdminWelcomeComponent implements OnInit {

  flip: any;
  rotateIn: any;
  fadeIn: any;
  fadeInLeft: any;
  bounceIn: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLoginPanel = () => {
    this.router.navigate(['admin-login']);
  }

}
