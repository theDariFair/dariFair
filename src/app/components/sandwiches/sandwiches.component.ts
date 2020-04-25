import { Component, OnInit } from '@angular/core';
import { SANDWICHES } from './sandwiches-const';

@Component({
  selector: 'app-sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.scss']
})
export class SandwichesComponent implements OnInit {
  sandwiches = SANDWICHES;
  constructor() { }

  ngOnInit() {
  }

}
