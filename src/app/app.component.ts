import { Component } from '@angular/core';
import { fakeData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = fakeData;
  title = 'Multi-select';

  getSelectedItem(item: any) {
    console.log(item);
  }
}
