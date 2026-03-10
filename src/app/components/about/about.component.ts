import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent implements OnInit {
  yearsCount = 0;
  projectsCount = 0;
  techCount = 0;

  ngOnInit() {
    this.animateCounters();
  }

  animateCounters() {
    this.animateValue('yearsCount', 0, 3, 1500);
    this.animateValue('projectsCount', 0, 20, 2000);
    this.animateValue('techCount', 0, 10, 1800);
  }

  animateValue(key: 'yearsCount' | 'projectsCount' | 'techCount', start: number, end: number, duration: number) {
    const range = end - start;
    const step = Math.ceil(duration / range);
    let current = start;
    const timer = setInterval(() => {
      current++;
      (this as any)[key] = current;
      if (current >= end) clearInterval(timer);
    }, step);
  }
}