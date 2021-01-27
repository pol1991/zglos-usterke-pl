import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { bounce, fadeIn, fadeOut, flip, fadeOutRight, zoomOut } from 'ng-animate';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('fadeOut', [
      state('start', style({
        opacity: 1
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('start => end', useAnimation(fadeOut, {
        params: {
          timing: 0.3
        }
      }))])
  ]
})
export class FrontPageComponent implements OnInit {

  fadeIn: any;
  flip: any;
  fadeOut = 'start';
  //zoomOut = 'start';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToNavigationPanel = () => {
    this.fadeOut = 'end';
    //this.zoomOut = 'end';
    setTimeout(() => {
      this.router.navigate(['wybor']);
    }, 300);
  }

}
