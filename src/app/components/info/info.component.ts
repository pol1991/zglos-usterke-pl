import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounce, fadeIn, fadeOutUp, flip, rotateIn, pulse, fadeInLeft, jackInTheBox} from 'ng-animate';

@Component({
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


  constructor() { }

  ngOnInit(): void {
  }

}
