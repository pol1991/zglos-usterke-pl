import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'potwierdzenie',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit {

  timeToRedirect = 5;
  interval: any

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.timeToRedirect -= 1;

      if (this.timeToRedirect === 0)
        this.router.navigate(['']);
    }, 1000);  //5s
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }



}
