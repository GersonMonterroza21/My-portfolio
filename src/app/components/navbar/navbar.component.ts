import { Component, OnInit, HostListener } from '@angular/core';
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

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const offsets = this.sections.map(s => {
      const el = document.getElementById(s.id);
      return el ? el.getBoundingClientRect().top : 9999;
    });
    const active = offsets.findIndex((top, i) => {
      const next = offsets[i + 1] ?? 9999;
      return top <= 100 && next > 100;
    });
    if (active !== -1) this.activeSection = active;
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