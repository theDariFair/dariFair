import { Component, OnInit } from '@angular/core';
import { SMOOTHIE} from './smoothie-const';

@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.scss']
})
export class SmoothiesComponent implements OnInit {
 smoothies = SMOOTHIE;
  constructor() { }

  ngOnInit() {
  }

}
