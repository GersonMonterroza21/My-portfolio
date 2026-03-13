import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../translations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  private charIndex = 0;
  private wordIndex = 0;
  private deleting = false;
  private timer: any;
  private currentWord = '';

  private allWords = {
    ES: ['experiencias únicas', 'soluciones escalables', 'código limpio', 'apps en tiempo real'],
    EN: ['unique experiences', 'scalable solutions', 'clean code', 'real-time apps']
  };

  constructor(public lang: LanguageService, private ngZone: NgZone) {}

  ngOnInit() {
    this.loadNextWord();
    this.ngZone.runOutsideAngular(() => this.startTypewriter());
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private loadNextWord() {
    const words = this.allWords[this.lang.current()];
    this.currentWord = words[this.wordIndex % words.length];
  }

  private startTypewriter() {
    if (this.timer) clearTimeout(this.timer);

    if (!this.deleting) {
      this.charIndex++;
      const text = this.currentWord.substring(0, this.charIndex);
      this.ngZone.run(() => this.displayText = text);
      if (this.charIndex >= this.currentWord.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.startTypewriter(), 1800);
        return;
      }
    } else {
      this.charIndex--;
      const text = this.currentWord.substring(0, this.charIndex);
      this.ngZone.run(() => this.displayText = text);
      if (this.charIndex <= 0) {
        this.deleting = false;
        this.wordIndex++;
        this.loadNextWord();
      }
    }

    this.timer = setTimeout(() => this.startTypewriter(), this.deleting ? 60 : 100);
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}