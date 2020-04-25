import { Component, OnInit } from '@angular/core';
import { SSFLAVORS} from './ss-const';
@Component({
  selector: 'app-ss-flavors',
  templateUrl: './ss-flavors.component.html',
  styleUrls: ['./ss-flavors.component.scss']
})
export class SsFlavorsComponent implements OnInit {
  flavors = SSFLAVORS
  constructor() { }

  ngOnInit() {
  }

}
