import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  cursor = true;
  private words = ['experiencias únicas', 'soluciones reales', 'código limpio', 'apps increíbles'];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeInterval: any;

particles = Array.from({ length: 50 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 2,
  delay: `${Math.random() * 8}s`
}));

  ngOnInit() {
    this.startTypewriter();
  }

  ngOnDestroy() {
    clearInterval(this.typeInterval);
  }

  startTypewriter() {
    this.typeInterval = setInterval(() => {
      const word = this.words[this.wordIndex];
      if (this.isDeleting) {
        this.displayText = word.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.displayText = word.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      if (!this.isDeleting && this.charIndex === word.length) {
        setTimeout(() => this.isDeleting = true, 1500);
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }, 100);
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}