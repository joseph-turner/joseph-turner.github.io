import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  time_from_beginning = moment([2010, 5, 21]).fromNow(true);

  constructor() { }

  ngOnInit() {
  }

}
