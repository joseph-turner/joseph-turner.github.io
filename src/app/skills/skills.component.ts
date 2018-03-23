import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  time_from_beginning = moment([2010, 5, 21]).fromNow(true);

  constructor() { }

  ngOnInit() {
  }

}
