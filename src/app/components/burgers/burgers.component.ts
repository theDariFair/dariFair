import { Component, OnInit } from '@angular/core';
import { BURGERS } from './burger-const';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})

export class BurgersComponent implements OnInit {
  burgers = BURGERS;
  constructor() { }

  ngOnInit() {
  }

}
