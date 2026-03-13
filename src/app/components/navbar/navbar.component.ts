import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  sunnyOutline, moonOutline, homeOutline, personOutline,
  rocketOutline, briefcaseOutline, mailOutline
} from 'ionicons/icons';
import { LanguageService } from '../../translations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon]
})
export class NavbarComponent implements OnInit {
  isDark = true;
  isScrolled = false;
  activeSection = 0;

  sections = [
    { id: 'hero',       icon: 'home-outline' },
    { id: 'about',      icon: 'person-outline' },
    { id: 'projects',   icon: 'rocket-outline' },
    { id: 'experience', icon: 'briefcase-outline' },
    { id: 'contact',    icon: 'mail-outline' },
  ];

  constructor(public lang: LanguageService) {
    addIcons({
      sunnyOutline, moonOutline, homeOutline, personOutline,
      rocketOutline, briefcaseOutline, mailOutline
    });
  }

  getSectionLabel(id: string): string {
    const labels: Record<string, string> = {
      hero: this.lang.t.nav_inicio,
      about: this.lang.t.nav_sobre,
      projects: this.lang.t.nav_proyectos,
      experience: this.lang.t.nav_experiencia,
      contact: this.lang.t.nav_contacto,
    };
    return labels[id] || id;
  }

  ngOnInit() {
    document.body.classList.add('dark');
  }

  updateActiveSectionByScroll(scrollTop: number) {
    const offsets = this.sections.map(s => {
      const el = document.getElementById(s.id);
      return el ? el.offsetTop : 9999;
    });
    let active = 0;
    for (let i = 0; i < offsets.length; i++) {
      if (scrollTop >= offsets[i] - 200) active = i;
    }
    this.activeSection = active;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
    document.body.classList.toggle('light', !this.isDark);
  }

  toggleLang() {
    this.lang.toggle();
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
