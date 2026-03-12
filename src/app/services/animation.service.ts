import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  private observer!: IntersectionObserver;

  observe(elements: NodeListOf<Element>) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => this.observer.observe(el));
  }

  disconnect() {
    if (this.observer) this.observer.disconnect();
  }
}