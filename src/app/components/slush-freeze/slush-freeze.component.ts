import { Component, OnInit } from '@angular/core';
import {SLUSH} from './slush-const';

@Component({
  selector: 'app-slush-freeze',
  templateUrl: './slush-freeze.component.html',
  styleUrls: ['./slush-freeze.component.scss']
})
export class SlushFreezeComponent implements OnInit {
  slush = SLUSH;
  constructor() { }

  ngOnInit() {
  }

}
