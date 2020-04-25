import { Component, OnInit } from '@angular/core';
import {ICECREAM} from './iceCream-const';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.scss']
})
export class IceCreamComponent implements OnInit {
  iceCream = ICECREAM;
  constructor() { }

  ngOnInit() {
  }

}
