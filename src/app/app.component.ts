import { Component } from '@angular/core';

// import * as $ from 'jquery';
// import * as bootstrap from 'bootstrap';
// import * as moment from 'moment';
import * as svg from 'svg-sprite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Joseph Turner Land';

  hexBuilder = function (size, x, y) {
    const R = size;
    const r = Math.sqrt(3) / 2 * R;
    const buffer = 5;
    const dim = R + buffer + 'px';

    // const coords = {
    //   x1: R,
    //   y1: buffer,
    //   x2: R + r,
    //   y2: (R / 2) + buffer,
    //   x3: this.x2,
    //   y3: this.y2 + R,
    //   x4: this.x1,
    //   y4: (R * 2) + buffer,
    //   x5: R - r,
    //   y5: this.y3,
    //   x6: this.x5,
    //   y6: this.y2
    // };
    const coords = {
      1: [R, buffer],
      2: [R + r, (R / 2) + buffer],
      3: [this.x2, this.y2 + R],
      4: [this.x1, (R * 2) + buffer],
      5: [R - r, this.y3],
      6: [this.x5, this.y2]
    };

    let hexString;

    for (const key in coords) {
      if (coords.hasOwnProperty(key)) {
        const elem = coords[key];
        hexString += elem[0].toString() + ',' + elem[1].toString() + ' ';
      }
    }

    console.log(hexString);
    const hex1 = svg('hex1').size(dim, dim).polygon(hexString).cx(x).cy(y);
  };
}
