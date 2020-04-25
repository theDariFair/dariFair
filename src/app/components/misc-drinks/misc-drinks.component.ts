import { Component, OnInit } from '@angular/core';
import { MISCDRINKS } from './miscDrinks-const';

@Component({
  selector: 'app-misc-drinks',
  templateUrl: './misc-drinks.component.html',
  styleUrls: ['./misc-drinks.component.scss']
})
export class MiscDrinksComponent implements OnInit {
misDrinks = MISCDRINKS;
  constructor() { }

  ngOnInit() {
  }

}
