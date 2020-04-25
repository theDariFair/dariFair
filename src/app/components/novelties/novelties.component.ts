import { Component, OnInit } from '@angular/core';
import { NOVELTIES} from './novelties-const';

@Component({
  selector: 'app-novelties',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.scss']
})
export class NoveltiesComponent implements OnInit {
  novelties = NOVELTIES
  constructor() { }

  ngOnInit() {
  }

}
