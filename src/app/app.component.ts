import {Component} from '@angular/core';

declare const SC: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
      SC.initialize({
          client_id: 'e59d8b005900e38649c1882b87cd828d'
      });
  }
}
