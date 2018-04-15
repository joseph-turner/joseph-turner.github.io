// tslint:disable:max-line-length
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase
  ) { }

  lostQuip;

  getLostQuip(): Observable<any[]> {
    const quips = this.db.list('/not-found/quips').valueChanges();
    return quips;
  }

  randIdx(val): number {
    return Math.floor(Math.random() * val.length - 1);
  }

  ngOnInit() {
    this.getLostQuip().subscribe(quotes => {
      this.lostQuip = quotes[this.randIdx(quotes)];
    });
  }

}
