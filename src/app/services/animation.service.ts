import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private observer!: IntersectionObserver;

  observe(elements: NodeListOf<Element> | Element[]) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => this.observer.observe(el));
  }

  disconnect() {
    if (this.observer) this.observer.disconnect();
  }
}