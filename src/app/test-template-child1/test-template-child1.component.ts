import { Component, OnInit } from '@angular/core';

export interface City {
  id: number;
  name: string;
  pic: string;
}

@Component({
  selector: 'app-test-template-child1',
  templateUrl: './test-template-child1.component.html',
  styleUrls: ['./test-template-child1.component.css'],
})
export class TestTemplateChild1Component implements OnInit {
  cities: City[] = [
    {
      id: 1,
      name: 'Luke Skywalker',
      pic: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Tripoli',
      pic: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Beirut',
      pic: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Larry Potter',
      pic: 'https://via.placeholder.com/150',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
