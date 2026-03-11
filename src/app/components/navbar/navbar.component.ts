import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  sunnyOutline, moonOutline, homeOutline, personOutline,
  rocketOutline, briefcaseOutline, mailOutline
} from 'ionicons/icons';
import { LanguageService } from '../../services/language.service';
import { TRANSLATIONS } from '../../translations';

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

  constructor(public langService: LanguageService) {
    addIcons({
      sunnyOutline, moonOutline, homeOutline, personOutline,
      rocketOutline, briefcaseOutline, mailOutline
    });
  }

  get sections() {
    const t = TRANSLATIONS.nav;
    const lang = this.langService.currentLang();
    return [
      { id: 'hero',       label: t.home[lang],       icon: 'home-outline' },
      { id: 'about',      label: t.about[lang],      icon: 'person-outline' },
      { id: 'projects',   label: t.projects[lang],   icon: 'rocket-outline' },
      { id: 'experience', label: t.experience[lang], icon: 'briefcase-outline' },
      { id: 'contact',    label: t.contact[lang],    icon: 'mail-outline' },
    ];
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
    this.langService.toggle();
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
