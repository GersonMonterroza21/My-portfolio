import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';
import { LanguageService } from '../../translations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  yearsCount = 0;
  projectsCount = 0;
  techCount = 0;

  constructor(
    private animationService: AnimationService,
    public lang: LanguageService
  ) {}

  ngOnInit() {
    this.animateCounters();
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('#about .fade-up, #about .fade-right');
    this.animationService.observe(elements);
  }

  ngOnDestroy() {
    this.animationService.disconnect();
  }

  animateCounters() {
    this.animateValue('yearsCount', 0, 3, 1500);
    this.animateValue('projectsCount', 0, 15, 2000);
    this.animateValue('techCount', 0, 15, 1800);
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