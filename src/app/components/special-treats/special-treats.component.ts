import { Component, OnInit } from '@angular/core';
import {SPECIAL} from './specialTreats-const';

@Component({
  selector: 'app-special-treats',
  templateUrl: './special-treats.component.html',
  styleUrls: ['./special-treats.component.scss']
})
export class SpecialTreatsComponent implements OnInit {
special = SPECIAL;
  constructor() { }

  ngOnInit() {
  }

}
