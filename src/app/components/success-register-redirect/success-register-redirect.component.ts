import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'przekierowanie',
  templateUrl: './success-register-redirect.component.html',
  styleUrls: ['./success-register-redirect.component.scss']
})
export class SuccessRegisterRedirectComponent implements OnInit, OnDestroy {
  timeToRedirect = 5;
  interval: any;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.timeToRedirect -= 1;

      if (this.timeToRedirect === 0) {
        this.router.navigate(['']);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
