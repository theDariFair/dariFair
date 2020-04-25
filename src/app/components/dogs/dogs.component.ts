import { Component, OnInit } from '@angular/core';
import {DOGS} from './dogs-const';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogs = DOGS;
  constructor() { }

  ngOnInit() {
  }

}
