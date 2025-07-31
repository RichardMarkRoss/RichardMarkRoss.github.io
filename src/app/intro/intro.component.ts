// hero.component.ts
import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const options = {
      strings: ["DEVELOPER", "DESIGNER", "PROBLEM SOLVER"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
    };

    new Typed('.typed', options);
  }
}
