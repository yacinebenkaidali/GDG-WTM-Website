import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-s1',
  templateUrl: './landing-s1.component.html',
  styleUrls: ['./landing-s1.component.css']
})
export class LandingS1Component implements OnInit {
  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123'.split('').map((x, i) => {
    const num = i + 1;
    return {
      url: `../../assets/header_${num}.jpg`,
      title: `${num}`
    };
  });
  constructor() { }

  ngOnInit() {
  }

  indexChanged(index) {
    console.log(index);
  }
}
