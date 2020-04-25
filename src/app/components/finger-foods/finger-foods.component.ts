import { Component, OnInit } from '@angular/core';
import { FFOOD } from './ff-const';

@Component({
  selector: 'app-finger-foods',
  templateUrl: './finger-foods.component.html',
  styleUrls: ['./finger-foods.component.scss']
})
export class FingerFoodsComponent implements OnInit {
  ffood = FFOOD;
  constructor() { }

  ngOnInit() {
  }

}
