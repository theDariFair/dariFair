import { Component, OnInit } from '@angular/core';
import { SIDES } from './sides-const';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.scss']
})
export class SidesComponent implements OnInit {
  sides = SIDES;
  constructor() { }

  ngOnInit() {
  }

}
