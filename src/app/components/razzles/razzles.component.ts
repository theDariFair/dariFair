import { Component, OnInit } from '@angular/core';
import { RAZZLES} from './razzles-const';

@Component({
  selector: 'app-razzles',
  templateUrl: './razzles.component.html',
  styleUrls: ['./razzles.component.scss']
})
export class RazzlesComponent implements OnInit {
  razzles = RAZZLES;
  constructor() { }

  ngOnInit() {
  }

}
