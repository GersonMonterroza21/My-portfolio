import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  isDark = true;
  isScrolled = false;
  currentLang = 'ES';
  activeSection = 0;

  sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'contact', label: 'Contacto' },
  ];

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
      if (scrollTop >= offsets[i] - 200) {
        active = i;
      }
    }
    this.activeSection = active;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
    document.body.classList.toggle('light', !this.isDark);
  }

  toggleLang() {
    this.currentLang = this.currentLang === 'ES' ? 'EN' : 'ES';
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}