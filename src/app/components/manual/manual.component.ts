import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation} from '@angular/animations';
import { fadeIn, flip, rotateIn, fadeInLeft, tada} from 'ng-animate';

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('tada', [transition('* => *', useAnimation(tada, {
      params: {
        delay: 0.6,
        timing: 0.6
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
export class ManualComponent implements OnInit {

  fadeIn: any;
  tada: any;

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  goBack = () => {
    this.route.navigate(['wybor']);
  }

}
