import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [
    {
      id: 1,
      name: 'Define system user',
      pic: 'bug',
    },
    {
      id: 2,
      name: 'Configure projects',
      pic: 'task',
    },
    {
      id: 3,
      name: 'Align Engine Output',
      pic: 'bug',
    },
    {
      id: 4,
      name: 'Align Telescope',
      pic: 'task',
    },
    {
      id: 5,
      name: 'Chart Course',
      pic: 'bug',
    },
    {
      id: 6,
      name: 'Clean O2 Filter',
      pic: 'task',
    },
    {
      id: 7,
      name: 'Fill Canisters',
      pic: 'bug',
    },
    {
      id: 8,
      name: 'item 1',
      pic: 'bug',
    },
    {
      id: 9,
      name: 'item 2',
      pic: 'bug',
    },
    {
      id: 10,
      name: 'item 3',
      pic: 'bug',
    },
  ];
  title = 'Multi-select';

  getSelectedItem(item: any) {
    console.log(item);
  }
}
