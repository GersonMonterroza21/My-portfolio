import { Injectable, signal } from '@angular/core';

export type Lang = 'ES' | 'EN';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Lang>('ES');

  toggle() {
    this.currentLang.set(this.currentLang() === 'ES' ? 'EN' : 'ES');
  }

  t(translations: { ES: string; EN: string }): string {
    return translations[this.currentLang()];
  }
}
