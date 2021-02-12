import { AngularFireAuth } from '@angular/fire/auth';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AngularFireAuth) {}
  title = 'Zglos Usterke';

  @HostListener('window:beforeunload', ['$event'])
  // tslint:disable-next-line: typedef
  async beforeunUnload(event) {
    event.preventDefault();
    await this.auth.signOut();
    window.close();
  }
}
