import { Component, Inject } from '@angular/core';
import { catogoryToken } from './providers';

@Component({
  selector: 'revapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(@Inject(catogoryToken) public catogs) {}
  title = 'revapp';
}
