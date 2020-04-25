import { Component, OnInit } from '@angular/core';
import { FRAPPES } from './frappes-const'

@Component({
  selector: 'app-frappes',
  templateUrl: './frappes.component.html',
  styleUrls: ['./frappes.component.scss']
})
export class FrappesComponent implements OnInit {
 frappes = FRAPPES;
  constructor() { }

  ngOnInit() {
  }

}
