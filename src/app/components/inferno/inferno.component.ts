import { Component, OnInit } from '@angular/core';
import {INFERNO} from './inferno-const';

@Component({
  selector: 'app-inferno',
  templateUrl: './inferno.component.html',
  styleUrls: ['./inferno.component.scss']
})
export class InfernoComponent implements OnInit {
infernos = INFERNO;
  constructor() { }

  ngOnInit() {
  }

}
