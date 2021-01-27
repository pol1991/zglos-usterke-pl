import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounce, fadeIn, fadeOutUp, flip, rotateIn, pulse, fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-after-reset-view',
  templateUrl: './after-reset-view.component.html',
  styleUrls: ['./after-reset-view.component.scss'],
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
export class AfterResetViewComponent implements OnInit {

  flip: any;
  rotateIn: any;
  fadeIn: any;
  fadeInLeft: any;
  timeOut: any;

  timeToRedirect = 10;
  interval: any;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.timeToRedirect -= 1;

      if (this.timeToRedirect === 0) {
        this.router.navigate(['']);
      }
    }, 1000);  // 5s
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


}
