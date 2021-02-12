import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'zweryfikuj',
  templateUrl: './please-verify-email.component.html',
  styleUrls: ['./please-verify-email.component.scss']
})
export class PleaseVerifyEmailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
  }

}
