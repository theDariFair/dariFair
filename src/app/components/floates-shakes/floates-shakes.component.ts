import { Component, OnInit } from '@angular/core';
import {FLOATS} from './floates-const';

@Component({
  selector: 'app-floates-shakes',
  templateUrl: './floates-shakes.component.html',
  styleUrls: ['./floates-shakes.component.scss']
})
export class FloatesShakesComponent implements OnInit {
  floats = FLOATS
  constructor() { }

  ngOnInit() {
  }

}
