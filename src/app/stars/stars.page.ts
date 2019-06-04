import { Component } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: 'stars.page.html',
  styleUrls: ['stars.page.scss']
})
export class StarsPage {
  stars: any[] = [];

  constructor() {}

    ionViewDidEnter() {
        this.stars = [
            {
            name: 'CSS Star',
                template: 'css',
        },
            {
                name: 'SVG Star',
                template: 'svg',
            },
            {
                name: 'Ionicon Star',
                template: 'ionicon',
            },
            {
                name: 'Symbol Star',
                template: 'symbol',
            },
        ];

        this.initStars();

    }

    initStars() {
      // Canvas
      //   const canvas = document.getElementById('canvas-star');
      //   const context = canvas.getContext('2d');
        //
        // canvas.beginPath();
        // canvas.moveTo(50, 50);
        // canvas.lineTo(120, 150);
        // canvas.lineTo(0, 180);
        // canvas.lineTo(120, 210);
        // canvas.lineTo(50, 310);
        // canvas.lineTo(160, 250);
        // canvas.lineTo(190, 370);
        // canvas.lineTo(220, 250);
        // canvas.lineTo(330, 310);
        // canvas.lineTo(260, 210);
        // canvas.lineTo(380, 180);
        // canvas.closePath();
        // canvas.stroke();

    }

}
