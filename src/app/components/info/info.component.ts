import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, flip, rotateIn, fadeInLeft, jackInTheBox } from 'ng-animate';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'infromacje',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox, {
      params: {
        timing: 1
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
export class InfoComponent implements OnInit {

  fadeIn: any;
  jackInTheBox: any;


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goBack = () => {
    this.route.navigate(['wybor']);
  }

}
