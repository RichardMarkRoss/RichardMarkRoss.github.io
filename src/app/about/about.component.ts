import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skillsLeft = [
    { name: 'HTML/CSS', value: 95 },
    { name: 'JavaScript/Node.js', value: 85 },
    { name: 'PHP/Laravel', value: 90 }
  ];

  skillsRight = [
    { name: 'React/Vue.js', value: 85 },
    { name: 'Go/REST APIs', value: 80 },
    { name: 'Python/MySQL', value: 75 }
  ];
}
