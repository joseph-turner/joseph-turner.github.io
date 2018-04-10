import { Component, OnInit, Input, AfterContentInit, AfterViewInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';

import * as $ from 'jquery';
import * as svg from 'svg.js';
import { SwitchView } from '@angular/common/src/directives/ng_switch';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @ViewChild('siteNav') siteNav;
  @ViewChild('navToggle') navToggle;

  $header;
  headerHeight;
  headerWidth;
  hexSize;
  resizeTimer;

  toggleNav = function () {
    this.navToggle.nativeElement.classList.toggle('active');
    this.siteNav.nativeElement.classList.toggle('shown');
  };

  shapeBuilder = function (size: number, id: string) {
    const R = size;
    const r = Math.sqrt(3) / 2 * R;
    const buffer = 5;

    const coords = [];

    coords[1] = [R, buffer];
    coords[2] = [R + r, (R / 2) + buffer];
    coords[3] = [coords[2][0], coords[2][1] + R];
    coords[4] = [coords[1][0], (R * 2) + buffer];
    coords[5] = [R - r, coords[3][1]];
    coords[6] = [coords[5][0], coords[2][1]];

    const shapeId = id;
    const shapeString = coords.join(' ').trim();
    const x = this.randomInt(0, this.headerWidth);
    const y = Math.max(this.randomInt(0, this.headerHeight), );
    const color = this.colorizer(x);

    $('.header__shapes').append('<div id="' + shapeId + '" class="header__shape"></div>');

    // TODO: Position using css% instead of cx & cy
    const shape = svg(shapeId).polygon(shapeString).cx(x).cy(y).fill({ color: color });
  };

  colorizer = function (x: number) {
    // TODO: pick color ranges
    const xPos = x / this.headerWidth;

    const hue = xPos * 360;

    return 'hsl(' + hue + ', 90%, 45%)';
  };

  randomInt = function (min: number, max: number) {
    return Math.floor(Math.random() * Math.floor(max - min) + min);
  };

  shapesInit = function (width, height) {
    // TODO: generate more or less depending on screen size
    const hexSize: number = Math.floor(height / 4);
    const area: number = width * height;
    const shapeMin: number = Math.floor(Math.sqrt(area) / 5);
    const shapeMax: number = Math.floor(Math.sqrt(area) / 3);

    document.getElementById('headerShapes').innerHTML = '';

    for (let i = 0; i < this.randomInt(shapeMin, shapeMax); i++) {
      this.shapeBuilder(hexSize, 'hex' + i);
    }
  };

  constructor(
    private el: ElementRef
    ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.el.nativeElement);
    this.$header = $('.header__shapes');
    this.headerHeight = this.$header.outerHeight();
    this.headerWidth = this.$header.outerWidth();

    this.shapesInit(this.headerWidth, this.headerHeight);

    window.onresize = (e) => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout( () => {
        this.headerHeight = this.$header.outerHeight();
        this.headerWidth = this.$header.outerWidth();
        this.shapesInit(this.headerWidth, this.headerHeight);
      }, 250);
    };
  }
}
